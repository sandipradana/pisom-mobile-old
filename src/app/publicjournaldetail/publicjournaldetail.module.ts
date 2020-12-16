import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicjournaldetailPageRoutingModule } from './publicjournaldetail-routing.module';

import { PublicjournaldetailPage } from './publicjournaldetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicjournaldetailPageRoutingModule
  ],
  declarations: [PublicjournaldetailPage]
})
export class PublicjournaldetailPageModule {}
