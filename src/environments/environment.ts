// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  functions: {
    emulator: false,
    host: 'http://localhost:5001'
  },
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  firebase: {
    apiKey: 'AIzaSyDW0-84jy9wDl91Kb-vygPz9qex6HXMCFE',
    authDomain: 'crud-78cf5.firebaseapp.com',
    projectId: 'crud-78cf5',
    storageBucket: 'crud-78cf5.appspot.com',
    messagingSenderId: '789992614623',
    appId: '1:789992614623:web:3f04fa0e176cce386ed76a',
    measurementId: 'G-53P3PEE45F'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
