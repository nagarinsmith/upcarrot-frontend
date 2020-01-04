## You should have installed
- NodeJs
- Yarn
- Optionally: Visual Studio Code
- Android Studio
- Android SDK
- or Xcode

### Installation
- clone the project from git
- `cd` the folder in which you cloned it 
- in the root of the project run:
  ```javascript
    yarn
  ```

### Running the program
There are some scripts in the root package.json used for running all the projects

```json
 "scripts": {
    "android": "yarn workspace mobile android",
    "web": "yarn workspace web start",
    "ios": "yarn workspace mobile ios",
    "studio": "yarn workspace mobile studio",
    "mobile": "yarn workspace mobile start",
    "xcode": "yarn workspace mobile xcode",
    "desktop": "yarn workspace desktop electron-dev"
  },
```
You need to run `yarn name_of_script` to run the application
Eg
```
  yarn web // for web 
  yarn android // for android
  yarn desktop // for desktop
  .... // the rest are just some utils
```