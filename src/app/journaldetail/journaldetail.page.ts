import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { api_base_url } from 'src/config';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Component({
  selector: 'app-journaldetail',
  templateUrl: './journaldetail.page.html',
  styleUrls: ['./journaldetail.page.scss'],
})

export class JournaldetailPage implements OnInit {

  id = null

  journals = {
    id :  null,
    name:   null,
    date:   null,
    journal_id:  null,
    status :  null,
    todos : []
  }

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
  
  getJournal() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.user.api_token });

    let options = { headers: headers };

		this.http.post(api_base_url + '/journal/detail/' + this.id, {}, options).subscribe(resp => {       
			this.proccess(resp)
		}, err => {
			this.showError(err)
		});
  }

  proccess(resp) {
    this.journals = resp.data
  }

  async showError(err) {
    const toast = await this.toastController.create({
      message: err,
      duration: 2000
    });
    toast.present();
  }

  goToAddTodo(){
		this.router.navigate(['/addtodo', this.id])
	}

  ionViewWillEnter() {
    this.getJournal()
  }

  updateFlag(id, status){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.user.api_token });

    let options = { headers: headers };

		this.http.post(api_base_url + '/todo/update/', {id : id, status : status}, options).subscribe(resp => {       
			this.getJournal()
		}, err => {
			this.showError(err)
		});
  }

  async getUser() {
    const ret = await Storage.get({ key: 'user' });
    this.user = JSON.parse(ret.value);
  }
}
