import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlljournalstatsPageRoutingModule } from './alljournalstats-routing.module';

import { AlljournalstatsPage } from './alljournalstats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlljournalstatsPageRoutingModule
  ],
  declarations: [AlljournalstatsPage]
})
export class AlljournalstatsPageModule {}
