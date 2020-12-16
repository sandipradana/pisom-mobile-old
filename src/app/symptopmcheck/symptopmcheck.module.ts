import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SymptopmcheckPageRoutingModule } from './symptopmcheck-routing.module';

import { SymptopmcheckPage } from './symptopmcheck.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SymptopmcheckPageRoutingModule
  ],
  declarations: [SymptopmcheckPage]
})
export class SymptopmcheckPageModule {}
