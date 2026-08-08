# IntelliJ IDEA

IntelliJ IDEA is an Integrated development environment (IDE) used by Project Zomboid modders. It is most useful to parse the Java files of the game.

Make sure to download the **Community Edition** of IntelliJ IDEA which is free compared to the **Ultimate Edition**.

## Tips and tricks

* You can open an entire folder as a workspace, making it easier to navigate the files. Useful to search for specific elements in the game files. To search in an entire folder, press Ctrl+⇧ Shift+F and select the folder you want to search in.
* You can search for Java classes by pressing Ctrl+N and typing the name of the class you want to find. This is useful for quickly navigating to specific classes in the decompiled code.
* By holding Ctrl then left clicking on a used method or class, you can quickly navigate to its definition.
* By holding Ctrl then left clicking on the definition of a method or class, you can see the various usages of that method or class in the code.

## Remote debugging

_Main article: Remote debugging_

To setup remote debugging with IntelliJ IDEA, you need to set up a remote debugging configuration. This allows you to connect to the game process and debug it remotely. Follow the steps below to set up remote debugging in IntelliJ IDEA:

* Open IntelliJ IDEA and open the decompiled game code as a project.
* Top right corner, click _"Current file"_ to open a dropdown menu. This might be something else if you used it already, it should be next to a play button, a green bug button and a three vertical dots button.
* Open _"Edit Configurations..."_.
* Click the _"+"_ button to add a new configuration (top left).
* Select _"Remote JVM Debug"_ from the list.
* In the _"Name"_ field, enter a name for the configuration (e.g. _"Project Zomboid Remote Debug"_ or _"Attach to PZ"_), this is just for your reference.
* The other fields should already be set correctly. If you are having issues, check the following: 
    * _Transport_ is set to _Socket_
    * _Host_ is set to _localhost_
    * _Port_ is set to _5005_

* Click _"OK"_ to save the configuration.

To start remote debugging, you need to start the game with the remote debugging options enabled. You can do this by adding the following JVM argument to the game launch options:

Make sure to have remapped the game files first, see Zomboid Decompiler for more information.