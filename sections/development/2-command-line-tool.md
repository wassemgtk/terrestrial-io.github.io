
##Command Line Tool

Ths command line tool contains some commands that will allow you to localize your app & also test quickly.

The commands available to you are:

	terrestrial flight

	terrestrial scan

	terrestrial push

	terrestrial pull

	terrestrial ignite

	terrestrial photoshoot


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

This command will look through your strings files & compare them with the strings on the mission control to highlight any ommissions/additions of strings.

###Push

	terrestrial push

This will look through your base language strings files in your projects and push them up to mission control.

Make sure you have ran the [initialisation](#getting-started) command before trying to push.

###Pull

	terrestrial pull

This will pull down translations from the online dashboard that are ready to be used and create the appropriate localized files.

####iOS

In iOS, the pull command with place **`Localizable.strings`** files in the appropriate .lproj folders in your project. For example a spanish translation will be placed in the **'/es.lproj'** folder.

Don't forget to add the language you've pulled in your project in the Localizations section of your xcode project.

![Terrestrial Embedded Swift]({{ site.baseurl }}/images/localizations.png)

####Android

In Android, the pull command will create the appropriate folder structure according to [android's default localization specification](http://developer.android.com/guide/topics/resources/localization.html) and place the translated **`strings.xml`** files in the right place.

###Ignite

	terrestrial ignite <language-code>

This will launch your iOS app in the simulator using the last used build scheme.

###Photoshoot

	terrestrial photoshoot

This works like ignite but launches your iOS app in your native language while also allowing you take screenshots that will generate live UI previews for translators on the web translation interface.

A green camera icon should appear on the center right of the screen, which you can click to generate and upload the screenshots.

