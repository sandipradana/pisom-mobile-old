import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { api_base_url } from 'src/config';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  journals: any;

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

  constructor(public http: HttpClient, private router: Router) {
    this.getUser()
  }
  
  ionViewDidLoad(){
    this.getUser()
    this.getJournal()
  }

  ionViewWillEnter() {
    this.getUser()
    this.getJournal()
  }

  getJournal() {

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.user.api_token
    });

    let options = { headers: headers };

    this.http.post(api_base_url + '/journal/list', {}, options).subscribe(data => {
      this.proccessJournal(data)
    }, err => {
      this.showError(err)
    });
  }

  proccessJournal(data) {
    this.journals = data.data
  }

  showError(err) {
    console.log(err)
  }

  goToJournalDetail(id) {
    this.router.navigate(['/journaldetail', id])
  }

  async getUser() {
    const ret = await Storage.get({ key: 'user' });
    
    if(ret.value != null){
      this.user = JSON.parse(ret.value);
    }else{
      this.user = this._user
    }
  }

  goToJournalStats() {

    var journal_id = 0

    for (let index = 0; index < this.journals.length; ++index) {
      journal_id = this.journals[index].journal_id;
    }

    this.router.navigate(['/journalstats', journal_id])

  }

}
