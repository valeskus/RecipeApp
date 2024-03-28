fastlane documentation
----

# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```sh
xcode-select --install
```

For _fastlane_ installation instructions, see [Installing _fastlane_](https://docs.fastlane.tools/#installing-fastlane)

# Available Actions

### get_app_version

```sh
[bundle exec] fastlane get_app_version
```



----


## Android

### android bump_version

```sh
[bundle exec] fastlane android bump_version
```



### android build_release

```sh
[bundle exec] fastlane android build_release
```



### android upload_play_store

```sh
[bundle exec] fastlane android upload_play_store
```



----


## iOS

### ios bump_version

```sh
[bundle exec] fastlane ios bump_version
```



### ios build_release

```sh
[bundle exec] fastlane ios build_release
```



### ios upload_test_flight

```sh
[bundle exec] fastlane ios upload_test_flight
```



### ios download_certificates_and_profiles

```sh
[bundle exec] fastlane ios download_certificates_and_profiles
```

To be used from developer`s machine to download certificates

----

This README.md is auto-generated and will be re-generated every time [_fastlane_](https://fastlane.tools) is run.

More information about _fastlane_ can be found on [fastlane.tools](https://fastlane.tools).

The documentation of _fastlane_ can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
