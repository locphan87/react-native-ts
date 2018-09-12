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
	exp start -c --lan

run-ios:
	make setup-env
	exp start -c --lan --ios

run-android:
	make setup-env
	exp start -c --lan --android

deploy-expo:
	make setup-env
	make update-sha
	exp publish -c --release-channel $(CHANNEL)

build-android:
	make setup-env
	make update-sha
	exp build:android --release-channel $(CHANNEL)

build-ios:
	make setup-env
	make update-sha
	exp build:ios --release-channel $(CHANNEL)
