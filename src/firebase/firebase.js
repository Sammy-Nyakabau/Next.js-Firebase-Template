import * as firebase from 'firebase';
import { devConfig } from './config';

/** This is an if/else statement in shortened form.
It checks if any firebase apps already exist.
If one does not exist, initialize the app, 
otherwise do nothing because it’s already happened
 so we’re good to go. **/
!firebase.apps.length && firebase.initializeApp(devConfig);

const auth = firebase.auth();
const GoogleProvider = new firebase.auth.GoogleAuthProvider()
const FacebookProvider = new firebase.auth.FacebookAuthProvider();
const DB = firebase.database()
const StoreDB = firebase.firestore()


export default firebase

export {
  auth,
  GoogleProvider,
  FacebookProvider,
  DB,
  StoreDB
}