import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Component({
  selector: 'app-tab6',
  templateUrl: 'tab6.page.html',
  styleUrls: ['tab6.page.scss']
})

export class Tab6Page {

  _user = {
    id: null,
    name: null,
    email: null,
    password: null,
    phone: null,
    api_token: null,
    date_of_birth: null,
    gender: null,
    hospital_id: null,
    test : {
      date : null,
      result : null,
      type : {
        name : null
      }
    }
  }

  user = this._user

  constructor(private router: Router) {
    this.getUser()
  }

  ionViewWillEnter() {
    this.getUser()
  }

  ionViewDidLoad(){
    this.getUser()
  }

  async getUser() {
    var ret = await Storage.get({ key: 'user' });

    if(ret.value != null){
      this.user = JSON.parse(ret.value);
    }else{
      this.user = this._user
    }
  }

  isLogin(){
    if(this.user.id != null){
      return true
    }

    return false
  }

  async logout() {
    await Storage.remove({ key: 'user' });
    this.user = this._user
  }


}
