import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { api_base_url } from '../../config'

@Component({
	selector: 'app-tab1',
	templateUrl: 'tab1.page.html',
	styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

	featuredNews: any;

	statistics = { positif: 0, sembuh: 0, meninggal: 0, odp: 0, pdp: 0, isolasi: 0 }

	latestNews: any;

	constructor(public http: HttpClient, private router: Router) {
		this.getFeaturedNews()
		this.getStatistics()
		this.getLatestNews()
	}

	getFeaturedNews() {
		this.http.get(api_base_url + '/news/featured', {}).subscribe(data => {
			this.proccessFeaturedNews(data)
		}, err => {
			this.showError()
		});
	}

	getStatistics() {
		this.http.get(api_base_url + '/home/statistics', {}).subscribe(data => {
			this.proccessStatistics(data)
		}, err => {
			this.showError()
		});
	}

	getLatestNews() {
		this.http.get(api_base_url + '/news/latest', {}).subscribe(data => {
			this.proccessLatestNews(data)
		}, err => {
			this.showError()
		});
	}

	proccessFeaturedNews(data) {
		this.featuredNews = data.data;
	}

	proccessStatistics(data) {
		this.statistics = data.data;
	}

	proccessLatestNews(data) {
		this.latestNews = data.data;
	}

	showError() {

	}

	goToNewsDetail(id){
		this.router.navigate(['/newsdetail', id])
	}

}
