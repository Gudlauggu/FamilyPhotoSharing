// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDtd4-nUczISq-DPFTXFTixXxtMlGmKBYA',
    authDomain: 'gfamilysharingapp.firebaseapp.com',
    databaseURL: 'https://gfamilysharingapp.firebaseio.com',
    projectId: 'gfamilysharingapp',
    storageBucket: 'gfamilysharingapp.appspot.com',
    messagingSenderId: '397282033298'
  }
};
