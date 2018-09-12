# Deployment

## Publish to Expo

Login to Expo

```
$ exp login
$ exp whoami // check the current user
```

We need to specify the environment and the Expo channel for deployment

```
$ ENV=staging CHANNEL=staging yarn deploy
```

There is a [post publish hook](https://docs.expo.io/versions/latest/workflow/configuration#hooks) that we can benefit to do extra stuff:
* notify the new build on Slack
* build sourcemaps for error reporting service (i.e Sentry)
* ...

## Build standalone apps

```
$ ENV=staging CHANNEL=staging yarn build:android
$ ENV=staging CHANNEL=staging yarn build:ios
```

Refer [Building Standalone Apps](https://docs.expo.io/versions/latest/distribution/building-standalone-apps)
