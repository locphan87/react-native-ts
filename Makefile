ENV ?= staging
CHANNEL ?= default

setup:
	cp .env.example .env
	cp app.json.example app.json
	cp sha.json.example sha.json

setup-env:
	yarn
	cp ./environments/$(ENV)/.env .env
	cp ./environments/$(ENV)/app.json app.json

update-sha:
	FORMAT=short node ./scripts/sha.js

start:
	make setup-env
	expo start -c --lan

run-ios:
	make setup-env
	expo start -c --lan --ios

run-android:
	make setup-env
	expo start -c --lan --android

deploy-expo:
	make setup-env
	make update-sha
	expo publish -c --release-channel $(CHANNEL)

build-android:
	make setup-env
	make update-sha
	expo build:android --release-channel $(CHANNEL)

build-ios:
	make setup-env
	make update-sha
	expo build:ios --release-channel $(CHANNEL)
