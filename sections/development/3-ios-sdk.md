
##iOS SDK

You can install the Terrestrial iOS SDK from **Cocoapods** or **Carthage**:

To install using **Cocoapods**, add the following line to your **`Podfile`**:

	pod 'Terrestrial'

To install using **Carthage**, add the following line to your **`Cartfile`**;

	github "terrestrial-io/iOSFrameworkRepo"

If you want to install the SDK manually, you will have to make sure it is included in your project as an **Embedded Binary** :

![Terrestrial Embedded Binary]({{ site.baseurl }}/images/embedded-binary.png)

###API

To simply translate a String without any comments you simply append **.`translated`** to it. 

This is a light wrapper around NSLocalizedString and calls the same function that NSLocalizedString would call, retrieving the correct string from your **`.strings`** files at runtime.


**Objective C**

{% highlight objc %}
@"This is my string" -> @"This is my string".translated;
{% endhighlight %}

	
**Swift**
{% highlight swift %}
"This is my string" -> "This is my string".translated
{% endhighlight %}

You always have the ability to fall back to native iOS localization libraries. However, enable photoshoot mode, the Terrestrial framework must be imported in any file that uses NSLocalizedString.

>Note: these functions will not work with **static strings** or string declared with **let** as they cannot be changed at runtime.

