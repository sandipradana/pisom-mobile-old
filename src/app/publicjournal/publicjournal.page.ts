import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { api_base_url } from 'src/config';
import { ActivatedRoute, Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { ToastController } from '@ionic/angular';
const { Storage } = Plugins;

@Component({
  selector: 'app-publicjournal',
  templateUrl: './publicjournal.page.html',
  styleUrls: ['./publicjournal.page.scss'],
})

export class PublicjournalPage {

  id = null

  journals: any;

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

	constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, public toastController: ToastController,  public router : Router) { }

	ngOnInit() {
    this.id= this.activatedRoute.snapshot.paramMap.get('id');
    this.getUser()
  }

  ionViewWillEnter() {
    this.getJournal()
  }

  getJournal() {

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.user.api_token
    });

    let options = { headers: headers };

    this.http.post(api_base_url + '/journal/public-single/' + this.id, {}, options).subscribe(data => {
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
    this.router.navigate(['/publicjournaldetail', id])
  }

  async getUser() {
    const ret = await Storage.get({ key: 'user' });
    this.user = JSON.parse(ret.value);
  }

  goToJournalStats() {

    var journal_id = 0

    for (let index = 0; index < this.journals.length; ++index) {
      journal_id = this.journals[index].journal_id;
    }

    this.router.navigate(['/journalstats', journal_id])

  }

}
