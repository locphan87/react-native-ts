# Setting up the Starter Kit

## Requirements

Before you get started, make sure you have the following dependencies installed on your machine:

- [NodeJS](https://nodejs.org) `>=8.11` with `yarn` or `npm 5`.
- Latest React Native CLI

```
$ npm install -g react-native-cli
```

- [Expo dev tools](https://expo.io/tools)

## Installation

* Install dependencies from NPM

```
$ yarn install
```

* Create configuration files

```
$ yarn setup
```

* [Expo client for iOS simulator](https://docs.expo.io/versions/latest/introduction/installation#ios-simulator)

* [Expo client for Android emulator](https://docs.expo.io/versions/latest/introduction/installation#android-emulator)

## Multiple environments

### Environment configs

Related environment configs is grouped in the same directory

```
environments
├── dev
│   ├── .env
│   ├── app.json
├── local
├── production
├── staging
```

### Run the application in different environments

```
$ ENV=dev yarn ios
$ ENV=staging yarn ios
$ ENV=production yarn ios
```
