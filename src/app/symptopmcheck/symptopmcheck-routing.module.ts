import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SymptopmcheckPage } from './symptopmcheck.page';

const routes: Routes = [
  {
    path: '',
    component: SymptopmcheckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SymptopmcheckPageRoutingModule {}
