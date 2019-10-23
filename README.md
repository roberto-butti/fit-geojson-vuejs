```
 _____ _ _   ____   ____            _
|  ___(_) |_|___ \ / ___| ___  ___ (_)___  ___  _ __
| |_  | | __| __) | |  _ / _ \/ _ \| / __|/ _ \| '_ \
|  _| | | |_ / __/| |_| |  __/ (_) | \__ \ (_) | | | |
|_|   |_|\__|_____|\____|\___|\___// |___/\___/|_| |_|
                                 |__/
```

Fit2Geojson is a web tool that converts your FIT or GPX files into GeoJson format.
You can use the tool online: [Fit2Geojson](https://fit2geojson.netlify.com/)

## FIT file

FIT file is a format used to store fitness activities like biking, running, swimming.
It is used by Garmin Devices and Zwift

## GPX File

GPX file is a format used to store workout activities like biking, running, swimming.
It is used by Strava.

## GeoJson

It is a popular format into GEO context.
For example is used by [https://xyz.here.com/studio](https://xyz.here.com/studio) web tool, useful to create your custom maps.

## Tutorial

I wrote a tutorial about how to:
[Mapping your sport activity with HERE XYZ Studio](https://developer.here.com/blog/mapping-your-sport-activity-with-here-xyz-studio)

# For Developers

## Requirements

- [Nodejs](https://nodejs.org/)
- The latest version of [NPM](https://www.npmjs.com/get-npm). Update by `npm install npm@latest -g`
- [NVM - Node Version Manager](https://github.com/nvm-sh/nvm)

## Project setup

```
git clone https://github.com/roberto-butti/fit-geojson-vuejs.git
cd fit-geojson-vuejs
nvm use
npm install
cp .env.dist .env
```

Don't forget to **specify your environments variables** in the `.env` file then **start the app** with:
```
npm run serve
```

#### Environments variables:
- `VUE_APP_PROXY_URL` must contain your proxy url, if you own one
- `VUE_APP_ACCESS_TOKEN` must contain the token used by the here.xyz APIs (to get one: https://www.here.xyz/api/getting-token/)
- `VUE_APP_GOOGLE_CODE` permit you to certifie that you are the owner of this website (more infos: https://support.google.com/webmasters/answer/9008080?hl=en)

# For Contributors

Please read CONTRIBUTING.md file.
It doesn't matter if you are not a very skilled developers.
If you have any suggestion on UI design, on Copywriting, your feedback and suggestion as Pull Request are welcomed!!!
