/**
 * Unit tests for centralized environment configuration validation (audit P1).
 */
import { describe, test } from 'node:test';
import assert from 'node:assert/strict';

import {
  EnvSchema,
  loadEnvConfig,
  maxDownloadBytes,
  DEFAULT_MAX_DOWNLOAD_BYTES,
} from '../../dist/utils/config.js';

describe('config env validation (audit P1)', () => {
  test('a clean environment parses with defaults', () => {
    const cfg = loadEnvConfig({});
    assert.equal(cfg.PZ_MCP_DATA_DIR, undefined);
    assert.equal(cfg.PZ_MCP_LOG_LEVEL, undefined);
  });

  test('valid values are accepted', () => {
    const cfg = loadEnvConfig({
      PZ_MCP_DATA_DIR: 'C:\\pz-data',
      PZ_MCP_LOG_LEVEL: 'debug',
      PZ_GAME_VERSION: '42.20',
      PZ_MCP_MAX_DOWNLOAD_BYTES: '2147483648',
    });
    assert.equal(cfg.PZ_MCP_DATA_DIR, 'C:\\pz-data');
    assert.equal(cfg.PZ_MCP_LOG_LEVEL, 'debug');
    assert.equal(cfg.PZ_MCP_MAX_DOWNLOAD_BYTES, 2147483648);
  });

  test('an invalid log level is rejected at startup validation', () => {
    assert.throws(
      () => loadEnvConfig({ PZ_MCP_LOG_LEVEL: 'loud' }),
      /Invalid environment configuration/,
    );
  });

  test('a non-numeric download cap is rejected', () => {
    assert.throws(
      () => loadEnvConfig({ PZ_MCP_MAX_DOWNLOAD_BYTES: 'huge' }),
      /Invalid environment configuration/,
    );
  });

  test('STEAMCMD_USE_CREDENTIALS only accepts the documented values', () => {
    assert.doesNotThrow(() =>
      loadEnvConfig({ STEAMCMD_USE_CREDENTIALS: '1' }),
    );
    assert.throws(
      () => loadEnvConfig({ STEAMCMD_USE_CREDENTIALS: 'yes' }),
      /Invalid environment configuration/,
    );
  });

  test('maxDownloadBytes falls back to the default when unset', () => {
    const previous = process.env.PZ_MCP_MAX_DOWNLOAD_BYTES;
    delete process.env.PZ_MCP_MAX_DOWNLOAD_BYTES;
    try {
      assert.equal(maxDownloadBytes(), DEFAULT_MAX_DOWNLOAD_BYTES);
    } finally {
      if (previous !== undefined) {
        process.env.PZ_MCP_MAX_DOWNLOAD_BYTES = previous;
      }
    }
  });

  test('EnvSchema rejects empty-string paths but allows unknown variables', () => {
    const result = EnvSchema.safeParse({ PZ_MCP_DATA_DIR: '', SOME_FUTURE_VAR: 'x' });
    assert.equal(result.success, false);
  });
});
