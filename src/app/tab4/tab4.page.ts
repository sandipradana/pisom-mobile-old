import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { api_base_url } from 'src/config';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  daylist: any;

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

  constructor(public http: HttpClient, private router: Router) {
    this.getUser()
  }

  ionViewDidLoad() {
    this.getUser()
  }

  ionViewWillEnter() {
    this.getUser()
    this.getDaylist()
  }

  getDaylist() {

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.user.api_token
    });

    let options = { headers: headers };


    this.http.post(api_base_url + '/symptom/daylist', {}, options).subscribe(resp => {
      this.proccessDaylist(resp)
    }, err => {
      this.showError()
    });
  }

  proccessDaylist(resp) {
    this.daylist = resp.data
  }

  showError() {

  }

  async getUser() {
    const ret = await Storage.get({ key: 'user' });
    this.user = JSON.parse(ret.value);
  }

  goToJournalDetail(id) {
    this.router.navigate(['/symptomcheck', id])
  }

  goToSymptomStats() {

    var journal_id = 0

    for (let index = 0; index < this.daylist.length; ++index) {
      journal_id = this.daylist[index].journal_id;
    }

    this.router.navigate(['/symptomstats', journal_id])

  }

}
