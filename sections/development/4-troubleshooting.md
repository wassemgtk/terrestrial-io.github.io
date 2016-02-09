
##Troubleshooting

#### I was part of the early beta. How do I migrate to the new terrestrial tools?

If you were part of the early beta, you will have installed previous versions of the Terrestrial development toolkit. Due to the incredible feedback we received, we have made some backwards incompatible changes to how Terrestrial works. There are a couple things to note:

**CLI moved to standalone Ruby gem.**

If you have installed our previous CLI, you should uninstall so it does not conflict with the new gem. To do this, remove the contents of **`/usr/local/terrestrial`**. The Mac application has also been deprecated in order to allow Terrestrial to work better with automated build tools.

**Project Configuration**

Previously Terrestrial created a **`Terrestrial`** folder in your project root. This has been replaced with a simple **`terrestrial.yml`** file. To migrate your old configuration, run the following command:

    cd /to/my/project
    cp Terrestrial/Configuration/config.yml terrestrial.yml

**BaseStrings.json**

> iOS Only

Terrestrial no longer uses a proprietary localization file format, but instead integrates directly with iOS and Android native localization files. If you have strings in BaseStrings.json, you will have to move them to the appropriate Localizable.strings file. 

If you need assistance with the migration, contact us at <mailto:team@terrestrial.io> or on [Slack](https://terrestrial-slack.herokuapp.com/). We are happy to help you get onto the new and improved version of Terrestrial.

#### Terrestrial is not picking up string from my localization file

Terrestrial only tracks files referenced in **`terrestrial.yml`**. Make sure your files are listed under localization_files.
