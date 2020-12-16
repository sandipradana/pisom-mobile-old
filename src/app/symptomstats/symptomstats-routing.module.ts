import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SymptomstatsPage } from './symptomstats.page';

const routes: Routes = [
  {
    path: '',
    component: SymptomstatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SymptomstatsPageRoutingModule {}
