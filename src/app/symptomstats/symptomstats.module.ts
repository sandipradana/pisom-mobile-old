import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SymptomstatsPageRoutingModule } from './symptomstats-routing.module';

import { SymptomstatsPage } from './symptomstats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SymptomstatsPageRoutingModule
  ],
  declarations: [SymptomstatsPage]
})
export class SymptomstatsPageModule {}
