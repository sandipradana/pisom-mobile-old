import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JournalstatsPageRoutingModule } from './journalstats-routing.module';

import { JournalstatsPage } from './journalstats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JournalstatsPageRoutingModule
  ],
  declarations: [JournalstatsPage]
})
export class JournalstatsPageModule {}
