
##Getting Started

To get started, install our command line tool using the following command in your terminal:

    gem install terrestrial-cli     
  
To check if the command line interface has been installed, type the following command in your terminal and it should print the release version number.  

    terrestrial --version


###iOS

To get started with iOS, first *cd* to your **root project directory** in your terminal window. This should be the folder that has your **`.xcodeproj`** or **`.xcworkspace`** file inside it.

To connect your iOS app project to mission control, you will have to run a **initialization** command that you can find in the repository section of [mission control]( http://missioncontrol.terrestrial.io ).

####Terrestrial Framework

The terrestrial framework allows you use the terrestrial photoshoot command to create live UI previews for your translators. It also allows you to localize your **`.storyboard`** files using **`IBInspectable`** properties, allowing you to define your own identifiers for storyboard strings.

You can install it using either **Cocoapods** or **Carthage**:

To install using **Cocoapods**, add the following line to your **`Podfile`**:

	pod 'Terrestrial'


To install using **Carthage**, add the following line to your **`Cartfile`**;

	github "terrestrial-io/iOSFrameworkRepo"

After framework is installed, import it into every file where NSLocalizedString is called to make sure the framework will be able to detect your strings at run time.


####Already Localized?

The init command should have detected your base language **`Localizable.strings`** file and created a reference in a **`terrestrial.yml`** file in your root project directory. 

Run the command below to see the strings tracked by the cli tool.

    terrestrial scan --verbose

####Haven't Localized?

While inside the project directory, run the command below. It will look for strings in your source code and put them into your base language **`Localizable.strings`**

    terrestrial flight


*To find out more about what the flight command does to your iOS project click [here](#command-line-tool-flight)*

When you've run the flight command, follow the instructions which will walk you through the string extraction process.




###Android

To get started with Android, first *cd* to your **root project directory** in your terminal window.

To connect your Android app project to mission control, you will have to run a **initialization** command that you can find in the repository section of [mission control]( http://missioncontrol.terrestrial.io ).

While inside the project directory, run the command:

    terrestrial flight


*To find out more about what the flight command does to your Android project, click [here](#command-line-tool-flight)*

To keep track of which strings are localized with Terrestrial, the strings tags in your **`strings.xml`** file will be annotated with in the following fashion:
{% highlight xml %}
<string name="my_string" terrestrial=true >...
{% endhighlight %}

If you've added sont context, a 'context' tag will also be added in the following fashion:

{% highlight xml %}
<string name="my_string" terrestrial=true context="my context" >...
{% endhighlight %}

 When you pull strings from the online dashboard later, our tool will automatically create the appropriate folder structure for the different languages and deposit the translated **`strings.xml`** files there.
