import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicjournalPage } from './publicjournal.page';

const routes: Routes = [
  {
    path: '',
    component: PublicjournalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicjournalPageRoutingModule {}
