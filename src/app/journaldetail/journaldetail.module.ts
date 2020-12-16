import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JournaldetailPageRoutingModule } from './journaldetail-routing.module';

import { JournaldetailPage } from './journaldetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JournaldetailPageRoutingModule
  ],
  declarations: [JournaldetailPage]
})
export class JournaldetailPageModule {}
