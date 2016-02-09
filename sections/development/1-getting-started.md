
##Getting Started

To get started, install our command line tool using the following command in your terminal:

    gem install terrestrial-cli     
  
To check if the command line interface has been installed, type the following command in your terminal and it should print the release version number.  

    terrestrial --version

###iOS

To get started with iOS, first *cd* to your **root project directory** in your terminal window. This should be the folder that has your **`.xcodeproj`** or **`.xcworkspace`** file inside it.

To connect your iOS app project to mission control, you will have to initialize your project:

    terrestrial init --api-key <YOUR API KEY> --project-id <YOUR PROJECT ID>

Both your Api Key and Project ID can be found in the repository section of [mission control]( https://mission.terrestrial.io ):

####Terrestrial Framework

The terrestrial framework allows you use the terrestrial photoshoot command to create *live UI previews* for your translators. It also allows you to localize your **`.storyboard`** files using **`IBInspectable`** properties, allowing you to define your own identifiers for storyboard strings.

You can install it using either **Cocoapods** or **Carthage**:

To install using **Cocoapods**, add the following line to your **`Podfile`**:

	pod 'Terrestrial'

To install using **Carthage**, add the following line to your **`Cartfile`**;

	github "terrestrial-io/iOSFrameworkRepo"

After framework is installed, import it into every file where NSLocalizedString is called to make sure the framework will be able to detect your strings at run time.

####Already Localized?

If you have already extracted strings from your project into .strings files, the init command will use your project's base language to create a reference to your main **`Localizable.strings`** in **`terrestrial.yml`**, located in your root project directory. Terrestrial will track changes in the files listed in **`terrestrial.yml`** under `translation_files`.

To see which strings are currently tracked in your new project, run:

    terrestrial scan

*scan* analyzes your locally tracked .strings files and compares them with strings that have already been uploaded. To see the full diff, you can add the **--verbose** flag. When you start your project and have not uploaded any strings yet, scan will list all the strings in your project.

####Haven't Localized?

While inside the project directory, run the command below. It will look for strings in your source code and put them into your base language **`Localizable.strings`**

    terrestrial flight


*To read more about the flight command, click [here](#command-line-tool-flight)*

When you've run the flight command, follow the instructions which will walk you through the string extraction process.

###Android

To get started with Android, first *cd* to your **root project directory** in your terminal window.

To connect your Android app project to mission control, you will have to initialize your project:

    terrestrial init --api-key <YOUR API KEY> --project-id <YOUR PROJECT ID>

Both your Api Key and Project ID can be found in the repository section of [mission control]( https://mission.terrestrial.io ):

Terrestrial will automatically detect your `res/values/strings.xml` file and add it to **`terrestrial.yml`**. To see which strings Terrestrial is tracking, run:

    terrestrial scan

*scan* analyzes the files listed in **`terrestrial.yml`** and compares them with strings that have already been uploaded. To see the full diff, you can add the **--verbose** flag. When you start your project and have not uploaded any strings yet, scan will list all the strings in your project.
