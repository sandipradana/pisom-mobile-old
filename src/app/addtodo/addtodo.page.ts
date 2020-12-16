import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { api_base_url } from 'src/config';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.page.html',
  styleUrls: ['./addtodo.page.scss'],
})

export class AddtodoPage implements OnInit {

  id = null
  categories: any
  category: null
  sub_categories: any
  sub_category: null
  sub_category_other: null
  sub_category_other_input: null

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
    this.getCategories()
  }

  getCategories() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer 123"
    });

    let options = { headers: headers };

    this.http.post(api_base_url + '/todo/category', {}, options).subscribe(resp => {
      this.proccess(resp)
    }, err => {
      this.showError(err)
    });
  }

  getSubCategories() {
    console.log(this.category)
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer 123"
    });

    let options = { headers: headers };

    this.http.post(api_base_url + '/todo/sub-category', { todo_category_id: this.category }, options).subscribe(resp => {
      this.proccess_sub(resp)
    }, err => {
      this.showError(err)
    });
  }

  proccess(resp) {
    this.categories = resp.data
  }

  proccess_sub(resp) {
    this.sub_categories = resp.data
  }

  setCategory(id) {
    //alert(id)
  }

  async showError(err) {
    const toast = await this.toastController.create({
      message: err,
      duration: 2000
    });
    toast.present();
  }

  addTodo() {
    if (this.category == undefined) {
      this.showError("Harus pilih kategori")
      return
    }

    if (this.sub_category_other == undefined && this.sub_category == undefined) {
      this.showError("Harus pilih sub kategori")
      return
    }

    if (this.sub_category_other != undefined && this.sub_category_other_input == undefined) {
      this.showError("Harus isi sub kategori lainnya")
      return
    }

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.user.api_token
    });

    let options = { headers: headers };

    this.http.post(api_base_url + '/todo/add', { id: this.id, category_id: this.category, sub_category_id: this.sub_category, sub_category_other: this.sub_category_other, sub_category_other_input: this.sub_category_other_input }, options).subscribe(resp => {
      this.proccess_todo(resp)
    }, err => {
      this.showError(err)
    });

  }

  proccess_todo(resp) {
    this.router.navigate(['/journaldetail', this.id])
  }

  async getUser() {
    const ret = await Storage.get({ key: 'user' });
    this.user = JSON.parse(ret.value);
  }

}
