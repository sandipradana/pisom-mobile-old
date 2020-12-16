import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import { api_base_url } from 'src/config';
const { Storage } = Plugins;

@Component({
  selector: 'app-symptomstats',
  templateUrl: './symptomstats.page.html',
  styleUrls: ['./symptomstats.page.scss'],
})

export class SymptomstatsPage implements OnInit {

  id = null

  stats = []

  user = {
    id: null,
    name: null,
    email: null,
    password: null,
    phone: null,
    api_token: null,
    date_of_birth: null,
    gender: null,
    hospital_id: null
  }

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, public toastController: ToastController, public router: Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getUser()
  }

  ionViewWillEnter() {
    this.getStats()
  }

  async getUser() {
    const ret = await Storage.get({ key: 'user' });
    this.user = JSON.parse(ret.value);
  }

  getStats() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.user.api_token
    });

    let options = { headers: headers };

    this.http.post(api_base_url + '/symptom/stats/' + this.id, {}, options).subscribe(resp => {
      this.proccess(resp)
    }, err => {
      this.showError(err)
    });

  }

  proccess(resp) {
    this.stats = resp.data
  }
  
  showError(err){

  }

}
