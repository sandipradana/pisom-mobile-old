import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { api_base_url } from '../../config'
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newsdetail',
  templateUrl: './newsdetail.page.html',
  styleUrls: ['./newsdetail.page.scss'],
})
export class NewsdetailPage implements OnInit {

  id = null

  news = {
    title : null,
    date : null,
    thumbnail : null,
    body : null
  }

  constructor(private activatedRoute: ActivatedRoute, public http: HttpClient, private router: Router) { 

  }

  ngOnInit() {
    this.id= this.activatedRoute.snapshot.paramMap.get('id');
    this.getNews()
  }

  getNews() {
		this.http.get(api_base_url + '/news/detail/' + this.id, {}).subscribe(resp => {
			this.proccessNews(resp)
		}, err => {
			this.showError()
		});
  }
  
  showError() {
    
  }

  proccessNews(resp) {
    this.news = resp.data
  }

}
