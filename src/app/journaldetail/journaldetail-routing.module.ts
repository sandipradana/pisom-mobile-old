import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JournaldetailPage } from './journaldetail.page';

const routes: Routes = [
  {
    path: '',
    component: JournaldetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JournaldetailPageRoutingModule {}
