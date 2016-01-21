> 
> ####**Intelligent String Extraction**
> 
> Our selection of strings to be translated is done by comparing each string against our internal string model, and it has a number of different rules about what constitutes a **human readable string** inside an app:
> 
> For example, if a string found inside your project looks like:
> 
> {% highlight swift %}
"thisIsMyString"
{% endhighlight %}
> 
> One rule that Terrestrial uses checks that a strings isn't camelCased, so such a string would be not picked up by our system. This rule, in combination with a nuumber of different rules allows Terrestrial to internationalize the majority of your app in just one command. 
>