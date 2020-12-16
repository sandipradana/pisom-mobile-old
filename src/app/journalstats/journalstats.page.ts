import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import { api_base_url } from 'src/config';
const { Storage } = Plugins;
import { Chart } from 'chart.js';

@Component({
  selector: 'app-journalstats',
  templateUrl: './journalstats.page.html',
  styleUrls: ['./journalstats.page.scss'],
})

export class JournalstatsPage implements OnInit {

  @ViewChild('chartWajib') chartWajib;
  @ViewChild('chartMakanan') chartMakanan;
  @ViewChild('chartMinuman') chartMinuman;
  @ViewChild('chartOlahraga') chartOlahraga;
  @ViewChild('chartObat') chartObat;

  bars: any;
  colorArray: any;

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

  showChart = {
    wajib : 0,
    makanan : 0,
    minuman : 0,
    olahraga : 0,
    obat : 0
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

    this.http.post(api_base_url + '/journal/stats/' + this.id, {}, options).subscribe(resp => {
      this.proccess(resp)
    }, err => {
      this.showError(err)
    });

  }

  proccess(resp) {
    this.stats = resp.data

    if(this.stats['1'].label.length > 0){
      this.showChart.wajib = 1
      setTimeout(()=>{ 
         this.createChartWajib();
      }, 1000)
    }

    if(this.stats['2'].label.length > 0){
      this.showChart.makanan = 1
      setTimeout(()=>{ 
        this.createChartMakanan();
      }, 1000)
    }

    if(this.stats['2'].label.length > 0){
      this.showChart.makanan = 1
      setTimeout(()=>{ 
        this.createChartMakanan();
      }, 1000)
    }

    if(this.stats['3'].label.length > 0){
      this.showChart.minuman = 1
      setTimeout(()=>{ 
        this.createChartMinuman();
      }, 1000)
    }

    if(this.stats['4'].label.length > 0){
      this.showChart.olahraga = 1
      setTimeout(()=>{ 
        this.createChartOlahraga();
      }, 1000)
    }

    if(this.stats['5'].label.length > 0){
      this.showChart.obat = 1
      setTimeout(()=>{ 
        this.createChartObat();
      }, 1000)
    }
   
   

  }
  
  showError(err){

  }

  ionViewDidEnter() {

  }

  createChartWajib() {
    this.bars = new Chart(this.chartWajib.nativeElement, {
      options: {
        title: {
          display: true,
          text: 'Protokol Wajib'
        },
        legend: {
          position: 'bottom',
        }
      },
      type: 'pie',
      data: {
        labels: this.stats['1'].label,
        datasets: [{
          data: this.stats['1'].total,
          backgroundColor: [
            '#A4E374',
            '#FCFC97',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderWidth: 1
        }]
      }
    });
  }

  createChartMakanan(){
    this.bars = new Chart(this.chartMakanan.nativeElement, {
      options: {
        title: {
          display: true,
          text: 'Makanan'
        },
        legend: {
          position: 'bottom',
        }
      },
      type: 'pie',
      data: {
        labels: this.stats['2'].label,
        datasets: [{
          data: this.stats['2'].total,
          backgroundColor: [
            '#A4E374',
            '#FCFC97',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderWidth: 1
        }]
      }
    });
  }

  createChartMinuman(){
    this.bars = new Chart(this.chartMinuman.nativeElement, {
      options: {
        title: {
          display: true,
          text: 'Minuman'
        },
        legend: {
          position: 'bottom',
        }
      },
      type: 'pie',
      data: {
        labels: this.stats['3'].label,
        datasets: [{
          data: this.stats['3'].total,
          backgroundColor: [
            '#A4E374',
            '#FCFC97',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderWidth: 1
        }]
      }
    });
  }

  createChartOlahraga(){
    this.bars = new Chart(this.chartOlahraga.nativeElement, {
      options: {
        title: {
          display: true,
          text: 'Olahraga'
        },
        legend: {
          position: 'bottom',
        }
      },
      type: 'pie',
      data: {
        labels: this.stats['4'].label,
        datasets: [{
          data: this.stats['4'].total,
          backgroundColor: [
            '#A4E374',
            '#FCFC97',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderWidth: 1
        }]
      }
    });
  }

  createChartObat(){
    this.bars = new Chart(this.chartObat.nativeElement, {
      options: {
        title: {
          display: true,
          text: 'Obat'
        },
        legend: {
          position: 'bottom',
        }
      },
      type: 'pie',
      data: {
        labels: this.stats['5'].label,
        datasets: [{
          data: this.stats['5'].total,
          backgroundColor: [
            '#A4E374',
            '#FCFC97',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderWidth: 1
        }]
      }
    });
  }

}
