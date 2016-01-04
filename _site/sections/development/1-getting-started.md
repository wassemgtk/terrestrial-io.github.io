
##Getting Started

To get started, download our development toolkit from mission control *(if you haven't signed up for mission control, you can sign up [here](http://missioncontrol.terrestrial.io)*). 

When downloaded, open the package and complete the installation process.     
  
To check if the command line interface has been installed, type the following command in your terminal and it should print the release version number.  

    terrestrial -v


###iOS

To get started with iOS, first *cd* to your **root project directory** in your terminal window. This should be the folder that has your **`.xcodeproj`** file inside it.

{% include_relative sections/development/shared/git-changes.md %}

To connect your iOS app project to mission control, you will have to run a **initialization** command that you can find in the repository section of [mission control]( http://missioncontrol.terrestrial.io ).

While inside the project directory, run the command:

    terrestrial flight


*To find out more about what the flight command does to your iOS project click [here](#command-line-tool-flight)*

When you've run the flight command, a GUI dialog will slide down from the top of your screen and should look something like this:


![Terrestrial flight]({{ site.baseurl }}/images/flight.png)

This dialog will show the strings that we have detected in your project as being human readable. You can review the strings to make sure we made the right choices using the **'Preview source'** button to see where they were found in your project. 

More importantly you can add **context** information about your strings to ensure that your translators perform the right translations.

{% include_relative sections/development/shared/context-matters.md %}

Upon clicking next you will see a dialog that will detail the operations that we will perform on your sourcecode once you click 'Finish'. 

This is what we will do to your iOS project:

1. All the strings we detected will have **`.translated`** appended to them in your sourcecode. ( or **`.transatedWithContext()`** if you've added context )*

2. Any storyboard UI elements with text that we've detected will have **user-defined runtime variables** added to them that will allow our framework to retrieve the right translation at runtime. *( This setting is also accessible in your Interface Builder through IBInspectiable properties ).*

3. A Terrestrial folder will be added to your project root directory with the following folder structure:

	- Terrestrial
		- Framework
			- Terrestrial.framework
		- Translations
		- Configuration

4. A reference to the 'Translations' folder will be added where all your translations from the web dashboard will be pulled to.

5. **Terrestrial.framework** will be added to your project as an **Embedded Framework** to all your project targets. All the files where our API is called will have the following import statement added to the top of each applicable file:

{% highlight objc %}
#import <Terrestrial/Terrestrial>
{% endhighlight %}

   If you have a swift project you will have to create a [Bridging Header](http://www.learnswiftonline.com/getting-started/adding-swift-bridging-header/){:target="_blank"} and paste the above import statement to it.



###Android

To get started with Android, first *cd* to your **root project directory** in your terminal window.

To connect your Android app project to mission control, you will have to run a **initialization** command that you can find in the repository section of [mission control]( http://missioncontrol.terrestrial.io ).

While inside the project directory, run the command:

    terrestrial flight


*To find out more about what the flight command does to your Android project, click [here](#command-line-tool-flight)*

When you've run the flight command, a GUI dialog will slide down from the top of your screen and should look something like this:

{% include_relative sections/development/shared/context-matters.md %}

Upon clicking next you will see a dialog that will detail the operations that we will perform on your sourcecode once you click 'Finish'. 

This is what we will do to your Android project:

To keep track of which strings are localized with Terrestrial, the strings tags in your **strings.xml** file will be annotated with in the following fashion:
{% highlight xml %}
<string name="my_string" terrestrial=true >...
{% endhighlight %}

If you've added sont context, a 'context' tag will also be added in the following fashion:

{% highlight xml %}
<string name="my_string" terrestrial=true context="my context" >...
{% endhighlight %}

 When you pull strings from the online dashboard later, our tool wil automatically create the appropriate folder structure for the different languages and deposit the translated strings.xml files there.



