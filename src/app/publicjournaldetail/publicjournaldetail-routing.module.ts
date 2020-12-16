import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicjournaldetailPage } from './publicjournaldetail.page';

const routes: Routes = [
  {
    path: '',
    component: PublicjournaldetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicjournaldetailPageRoutingModule {}
