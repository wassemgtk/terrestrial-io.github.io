
##Command Line Tool

Ths command line tool contains some commands that will allow you to localize your app project quickly.

The commands available to you are:

	terrestrial flight

	terrestrial scan

	terrestrial push

	terrestrial pull


###Flight

	terrestrial flight

####iOS

With this command, Terrestrial will traverse your project structure & analyze:

 > **.m** files 
 >
 > **.swift** files 
 >
 > **.storyboard** files 

It will look inside these files for **string literals** and for each string that it finds, it will try to determine whether or not the particular string that it has found is intended to be seen by the end user & hence whether is should be internationalized.

{% include_relative sections/development/shared/intelligent-string-extraction.md %}

####Android

With this command, Terrestrial will traverse your project structure & analyze your:

> **strings.xml** files

It will look inside this file and for each string that it finds, it will try to determine whether or not the particular string that it has found is intended to be seen by the end user & hence whether is should be internationalized.

{% include_relative sections/development/shared/intelligent-string-extraction.md %}

The subsequent operations will work with android's localization file structure and create the appropriate files required.

###Scan

	terrestrial scan

This command will look through your project & highlight any ommissions and additions of strings since the last '[push](#command-line-tool-push)' that may occur as you work.

###Push

	terrestrial push

This will look through your project for all the appropriately tagged strings in your projects and push them up to mission control.

Make sure you have ran the [initialisation](#getting-started) command before trying to push.

###Pull

	terrestrial pull

This will pull down translations from the online dashboard that are ready to be used.

####iOS

In iOS, the pull command with place **`.json`** files in the Terrestrial/Translations folder in your project root directory. With the Translations folder added as a referenced folder in your xcode project this will automatically build the translations in this folder with your app. 

####Android

In Android, the pull command will create the appropriate folder structure according to [android's default localization specification](http://developer.android.com/guide/topics/resources/localization.html) and place the translated **`strings.xml`** files in the right place.
