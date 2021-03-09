// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDi1CYzU-nnDzNPBHISRXmIXVpKnBUp5u4",
    authDomain: "soled-70036.firebaseapp.com",
    projectId: "soled-70036",
    databaseURL: "https://soled-70036-default-rtdb.firebaseio.com/",
    storageBucket: "gs://soled-70036.appspot.com/",
    messagingSenderId: "680593845598",
    appId: "1:680593845598:web:d868ff90b1df3cd2bbb3cf",
    measurementId: "G-8VNZTR5ZB2"
  },
  appShellConfig: {
    debug: false,
    networkDelay: 500
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
