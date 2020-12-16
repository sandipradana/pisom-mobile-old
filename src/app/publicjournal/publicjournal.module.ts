import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicjournalPageRoutingModule } from './publicjournal-routing.module';

import { PublicjournalPage } from './publicjournal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicjournalPageRoutingModule
  ],
  declarations: [PublicjournalPage]
})
export class PublicjournalPageModule {}
