import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { api_base_url } from 'src/config';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: any
  password: any

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, public toastController: ToastController, public router: Router) { }

  ngOnInit() {
  }

  login() {

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let options = { headers: headers };

    this.http.post(api_base_url + '/auth/login', { email: this.username, password: this.password }, options).subscribe(resp => {
      this.proccess(resp)
    }, err => {
      this.showError(err)
    });
  }

  async proccess(resp) {
    if (resp.status == 200) {
      await Storage.set({
        key: 'user',
        value: JSON.stringify(resp.data)
      });

      this.router.navigate(['/tabs/tab1'])
    } else {
      this.showError(resp.message)
    }
  }

  async showError(err) {
    const toast = await this.toastController.create({
      message: err,
      duration: 2000
    });
    toast.present();
  }

}
