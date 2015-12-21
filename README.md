# Caffeinehit List - Ionic App

## Installing

- Run `bower install ngCordova` to install the ngCordova
- Run `cordova plugin add cordova-plugin-geolocation` to install the geolocation plugin
- Run `cordova plugin add uk.co.workingedge.phonegap.plugin.launchnavigator` to install the navigator plugin

## Corrections

### No results found or yelp API error

- We use an API in this app which returns a list of coffee shops "near you"
- We use the yelp.com api and sometimes this may not have results in your area.
- So if the API returns an error like `no results found` or `yelp API error` then just **hardcode** the latitude and longitude that came with the starter project, do not try to use your own lat and lon.
