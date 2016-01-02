
##iOS SDK

To install the SDK manually, you will have to make sure it is included in your project as an **Embedded Binary** :

![Terrestrial Embedded Binary]({{ site.baseurl }}/images/embedded-binary.png)


###API

To simply translate a String without any context you simply append **.`translated`** to it. 

This uses the string as a key to retrieve the right translated string at runtime.

**Objective C**

{% highlight objc %}
@"This is my string" -> @"This is my string".translated;
{% endhighlight %}

	
**Swift**
{% highlight swift %}
"This is my string" -> "This is my string".translated
{% endhighlight %}


To translate with context, you invoke our **`translatedWithContext`** function. Context allows you to communicate to your translators more information about your text.

Because context may differentiate between two identical strings, the context you provide is also used in combination with the string to retrieve the right translated string at runtime.

**Objective C**

{% highlight objc %}

[@"This is my string" translatedWithContext:@"Here's context"];

{% endhighlight %}


**Swift**

{% highlight swift %}
"This is my string".translatedWithContext("Here's context")
{% endhighlight %}

This context is then used in addition to your string to lookup the appropriate translation at runtime and distinguish between the same words/phrases but with different meaning.

The above functions also work with **string variables**:

**Objective C**

{% highlight objc %}
NSString *myString = @"This is my string" ;
myString = myString.translated;
myString = [myString translatedWithContext:@"This is my string's context"];
{% endhighlight %}

**Swift**

{% highlight swift %}
var myString = "This is my string"
myString = myString.translated
myString = myString.translatedWithContext("This is my string’s context")
{% endhighlight %}


>Note: these functions will not work with **static strings** or string declared with **let** as they cannot be changed at runtime.

#### **Helper Commands** 

Manually setting language

**Objective C**

{% highlight objc %}
[[Terrestrial sharedInstance]  setCurrentLanguageTo:"<language code>"];
{% endhighlight %}

**Swift**

{% highlight swift %}
Terrestrial.sharedInstance().setCurrentLanguageTo("<language code>")
{% endhighlight %}
