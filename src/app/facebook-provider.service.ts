import { Injectable } from '@angular/core';

import { FacebookLoginPlugin, FacebookLogin } from '@capacitor-community/facebook-login';
import { Plugins, registerWebPlugin } from '@capacitor/core';
import { HttpClient } from '@angular/common/http';
import { isPlatform } from '@ionic/angular';
registerWebPlugin(FacebookLogin);

@Injectable({
  providedIn: 'root'
})
export class FacebookProviderService {

  private fbLogin: FacebookLoginPlugin;
  private user = null;
  private token = null;

  constructor(
    private http: HttpClient
  ) {
    this.setupFbLogin();
  }

  // But this one is!
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

  // And this one too!
  async FacebookLogin() {
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
    console.log("Test 9: Completing login. I don't believe Test 8 will have run yet, so user below is still undefined huh?");
    console.log('facebook signup, user: ', this.user);
    //this.router.navigate(['app/categories']);
    return true;
  }

  // This one's mine TOO
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

  // This one's part of Facebook login too.
  private async loadUserData() {
    console.log("Test 6: loadUserData() Starting");
    console.log("Test 7: token = ", this.token);
    const url = `https://graph.facebook.com/${this.token.userId}?fields=id,name,picture.width(720),birthday,email&access_token=${this.token.token}`;
    const res = await this.http.get(url).toPromise(); //.then(res => {
    //console.log("Test 8: Supposed to be setting user. But hmmm, this'll run after 7*** won't it huh?");
    //console.log('user: ', res);
    //this.user = res;
    //});
    console.log("Test 8***: doing the callback outside of the observable");
    console.log('user: ', res);
    this.user = res;
  }

  // And this one too (for logging out though)
  async FacebookLogout() {
    await this.fbLogin.logout();
    this.user = null;
    this.token = null;
  }

  public getUser() {
    return this.user;
  }
}
