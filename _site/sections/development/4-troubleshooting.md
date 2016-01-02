
##Troubleshooting

###iOS

####"dyld: Library not loaded: @rpath/libswiftCore.dylib"

You'll probably encounter this error when trying to build an Objective C project with our framework.
In order to make our framework work just as seamlessly with Swift, we had to embed some swift code into it.

So if you encounter this error make sure that the setting:

**"Embedded Content Contains Swift Code"**

is set to **YES**  in your Target's build settings as shown below:

![Terrestrial Embedded Swift]({{ site.baseurl }}/images/embedded-swift.png)
