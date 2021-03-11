import { Injectable } from '@angular/core';

import { FacebookLoginPlugin, FacebookLogin } from '@capacitor-community/facebook-login';
import { Plugins, registerWebPlugin } from '@capacitor/core';
import { HttpClient } from '@angular/common/http';
import { isPlatform } from '@ionic/angular';
import { parse } from 'path';
import * as firebase from 'firebase';
registerWebPlugin(FacebookLogin);

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class FacebookProviderService {

  private fbLogin: FacebookLoginPlugin;
  private user = null;
  private token = null;
  private firebaseUserCredential: firebase.auth.UserCredential = null;
  private firebaseOAutCredential: firebase.auth.OAuthCredential = null;

  constructor(
    private http: HttpClient
  ) {
    this.setupFbLogin();
  }

  private async setupFbLogin() {
    if (isPlatform('desktop')) {
      this.fbLogin = FacebookLogin;
    }
    else {
      // Use the native imlementation inside a real app!
      const { FacebookLogin } = Plugins;
      this.fbLogin = FacebookLogin;
    }
  }

  //Probably gonna erase this later
  async facebookFireLogin() {
    console.log("facebookFireLogin()")
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('public_profile');
    await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    return await firebase.auth().signInWithPopup(provider).then((result) => {
      this.firebaseUserCredential = result;
      this.user = result.user;
      this.firebaseOAutCredential = result.credential;
      this.token = this.firebaseOAutCredential.accessToken;
      console.log(this.user);
      
      return true;
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's accoount used
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      console.log(`facebook-firebase login error: ${errorCode}, ${errorMessage}, ${email}, ${credential}`);
      return false;
    });
  }

  async facebookLogin() {
    console.log("Test 1: FacebookLogin() Starting");
    const FACEBOOK_PERMISSIONS = ['email', 'user_birthday'];
    const result = await this.fbLogin.login({ permissions: FACEBOOK_PERMISSIONS });
    console.log("Test 2: result(from fbLogin.login) != undefined ? (true) ", (result != undefined));
    if (result.accessToken && result.accessToken.userId) {
      this.token = result.accessToken;
      this.loadUserData();
    }
    else if (result.accessToken && !result.accessToken.userId) {
      console.log("Test 3: I'm on the web");
      // Web only gets the token but not the user ID
      // Directly call get token to retrieve it now
      await this.getCurrentToken();
    }
    else {
      // Login failed
      return false;
    }
    var cred = firebase.auth.FacebookAuthProvider.credential(result.accessToken.token);
    await firebase.auth().signInWithCredential(cred).then((res) => {
      this.firebaseUserCredential = res;
      //this.user = res.user;
      this.firebaseOAutCredential = res.credential;
      //this.token = this.firebaseOAutCredential.accessToken;
      console.log(this.user);
      
      return true;
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's accoount used
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      console.log(`facebook-firebase login error: ${errorCode}, ${errorMessage}, ${email}, ${credential}`);
      return false;
    });

    console.log("Test 9: Completing login. I don't believe Test 8 will have run yet, so user below is still undefined huh?");
    console.log('facebook signup, user: ', this.user);
    Storage.set({
      key: 'facebookCredentials',
      value: JSON.stringify({
        token: this.token.token,
        userId: this.token.userId
      })
    });
    //this.router.navigate(['app/categories']);
    return true;
  }

  private async getCurrentToken() {
    console.log("Test 4: getCurrentToken() Starting");
    const result = await this.fbLogin.getCurrentAccessToken();
    console.log("Test 5: result(from fbLogin.GetCurrentAccessToken() != undefined ? (true) ", (result != undefined));
    if (result.accessToken) {
      this.token = result.accessToken;
      await this.loadUserData();
      console.log("Test 7***: this.http.get(url).subscribe(callback) is run outside of this stack I'm guessing")
    }
    else {
      // Not logged in.
    }
  }

  private async loadUserData() {
    console.log("Test 6: loadUserData() Starting");
    console.log("Test 7: token = ", this.token);
    const url = `https://graph.facebook.com/${this.token.userId}?fields=id,name,picture.width(720),birthday,email&access_token=${this.token.token}`;
    const res = await this.http.get(url).toPromise(); //.then(res => {
    console.log("Test 8***: doing the callback outside of the observable");
    console.log('user: ', res);
    this.user = res;
  }

  async facebookLogout() {
    if (this.user == null) {return;}
    this.user = null;
    this.token = null;
    Storage.remove( {key: 'facebookCredentials'} );
    //let res = await this.fbLogin.getCurrentAccessToken();
    //if (res.accessToken) {
    await this.fbLogin.logout().catch((error) => {
      console.log("No access token, kick user");
    });
    //}
    await firebase.auth().signOut()
          .then(() => {
            console.log("firebase logout success!");
          })
          .catch((error) => {
            console.log("firebase logout error (", error.code, "): ", error.message);
          });
  }

  // Return a copy of the Facebook data to caller for information like user name, email, picture, etc..
  public async getUser() {
    if (this.user != null) { return this.user; }
    let res = await this.isActiveUser();
    if (res) { return this.user; }
    return null;
  }

  private async isActiveUser() {
    const ret = await Storage.get({ key: 'facebookCredentials'});
    const creds = JSON.parse(ret.value);
    if (creds == null) { return false; }
    const url = `https://graph.facebook.com/${creds.userId}?fields=id,name,picture.width(720),birthday,email&access_token=${creds.token}`;
    const res = await this.http.get(url).toPromise().catch((error) => {
      console.log("Failed to load Facebook data, error: ", error);
      Storage.remove( {key: 'facebookCredentials'});
      return null;
    });
    if (res == null) { return false; }
    console.log("res (from isActiveuser()): ", res);
    this.user = res;
    return true;
  }
}
