import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { api_base_url } from 'src/config';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  publicJournals:any;

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
  
  ionViewWillEnter() {
    this.getJournal()
  }


  getJournal(){

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.user.api_token
    });

    let options = { headers: headers };

		this.http.post(api_base_url + '/journal/public-list' , {}, options).subscribe(resp => {       
			this.proccessJournal(resp)
		}, err => {
			this.showError()
		});
  }

  proccessJournal(resp) {
    this.publicJournals = resp.data
  }
  
  showError(){

  }

  goToJournalDetail(id) {
    this.router.navigate(['/publicjournal', id])
  }

  
  async getUser() {
    const ret = await Storage.get({ key: 'user' });
    this.user = JSON.parse(ret.value);
  }


}
