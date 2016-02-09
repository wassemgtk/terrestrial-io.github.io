
##iOS SDK

To install the SDK manually, you will have to make sure it is included in your project as an **Embedded Binary** :

![Terrestrial Embedded Binary]({{ site.baseurl }}/images/embedded-binary.png)


###API

To simply translate a String without any comments you simply append **.`translated`** to it. 

This is a light wrapper around NSLocalizedString and essentially calls the same function that NSLocalizedString would call, retrieving the correct string from your **`.strings`** files at runtime


**Objective C**

{% highlight objc %}
@"This is my string" -> @"This is my string".translated;
{% endhighlight %}

	
**Swift**
{% highlight swift %}
"This is my string" -> "This is my string".translated
{% endhighlight %}

>Note: these functions will not work with **static strings** or string declared with **let** as they cannot be changed at runtime.

