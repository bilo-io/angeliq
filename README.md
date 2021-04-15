# AngeliQ

React Native Mobile App

## Environment Setup

- Download [XCode](https://developer.apple.com/xcode/) and [Android Studio](https://developer.android.com/studio), for the Native Mobile IDEs
- Install Node 12 or higher
    - run `bash ./scripts/remove-node.sh` to completely remove Node from your system
    - recommended to install with Homebrew: ``

## QuickStart

|command|description|
|:-|:-|
|`yarn`|install dependencies (`node_modules`)|
|`yarn start`|start Metro|
|`yarn ios`|start iOS App (XCode)|
|`yarn android`|start Android App (Android Studio)|

#### TroubleShooting
iOS:
- update your pods `pod repo update` (see log output)
- you might need to run `pod install` in `{root}/ios`
- if there is a mismatch (an error message like, you'll need to upgrade CocoaPods.
```
`React` requires CocoaPods version `>= 1.10.1`, which is not satisfied by your current version, `1.10.0`.
```
- > Recommended installation of CocoaPods with Homebrew:
    - `brew list cocoapods` to see which version you are on, and if that matches the error message
    - `brew upgrade cocoapods`
    - you might see an `Error: The 'brew link' step did not complete successfully` ... in that case you'll have to manually link the new version of cocoapods with `brew link

## Project Overview

This project uses a variety of technologies. If you're unfamiliar with or relatively new to React Native, we recommend you go through [this guide](https://www.reactnative.guide/index.html).

### React Native CLI

This project uses the `react-native` cli, as opposed to `expo` cli.
The main motivation is to have access to native modules, and control over the builds.
> StackOverflow: [React Native CLI vs Expo CLI](https://stackoverflow.com/questions/54862388/what-is-the-difference-between-expo-cli-and-react-native-cli)

> - project was created with command:
> - `npx react-native init AngeliQ --template react-native-template-typescript`
> - Guide: [React Native Made Easy](https://www.reactnative.guide/index.html)

### Folder Structure

> TODO: update to existing

```
studio
│
│   # GENERATED FILES
├── dist (or build)
├── node_modules
│
│   # SOURCE FILES
├── src
│   ├── apps
│   │   ├── app-name-1/
│   │   │   ├── page-1/
│   │   │   ├── page-1/
│   │   │   └── router.js
│   │   │
│   │   └── app-name-2/
│   │
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── services/
│   ├── styles/
│   ├── util/
│   ├── widgets/
│   │
│   ├── app.js
│   ├── index.html
│   ├── index.js
│   ├── reducer.js
│   └── store.js
│
├── README.md
├── package.json
├── bower.json (if using bower)
└── .gitignore
```

### TechStack

- Redux (Toolkit)
- HighCharts React
-
