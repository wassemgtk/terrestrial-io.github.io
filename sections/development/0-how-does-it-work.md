
## How Terrestrial Works

Terrestrial integrates with your projects through a **`terrestrial.yml`** file:

    joe@terrestrial_mainframe: /secret_mars_mission_app > cat terrestrial.yml
    ---
    app_id: <YOUR APP ID>
    project_id: <YOUR PROJECT ID>
    platform: < ios OR android >
    translation_files:
    - path/to/my/translation/file.strings
    - path/to/my/translation/strings.xml

Terrestrial will track changes in the files listed under translation_files. When pulling translations, language files will automatically get created, based on the locations of the base localization files.

### Workflow

Terrestrial uses a simple push, pull model. After you have worked on your project and are ready to upload your latest strings, you can use the Terrestrial CLI to push up your changes. Similarly, once your translators have completed the translations, you can pull down the latest translations, and Terrestrial will automatically create or update the necessary localization files.

> If you are working as a team, we recommend adding Terrestrial as part of your automated build cycle. For example, when changes are merged to master, automatically upload the most recent changes to Terrestrial with `terrestrial push`


### Testing

> The following features are currently iOS only

Translation quality is all about context, and Terrestrial gives translators a unique way to translate mobile apps through in browser live [in-context translation](https://www.terrestrial.io/context). You should periodically use Terrestrial's [photoshoot feature](http://docs.terrestrial.io/#command-line-tool-photoshoot) to provide your translators with up to date screenshots.

To conveniently test your application with a different locale, Terrestrial allows you to quickly start your application in a [foreign locale](http://docs.terrestrial.io/#command-line-tool-ignite).

### Configuration

Your project is configured through **`terrestrial.yml`** located in your project root, as seen above. You also have a personal config file located in your home directory **`~/.terrestrial`**, which will include user specific information such as your API Key.

    aldrin@terrestrial_mainframe: /secret_mars_mission_app > cat ~/.terrestrial
    ---
    api_key: abcdefghijklmnopqrstuvwxyz123567890

Both files are created automatically as you setup your project.
