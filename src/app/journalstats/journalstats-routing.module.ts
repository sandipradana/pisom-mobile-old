import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JournalstatsPage } from './journalstats.page';

const routes: Routes = [
  {
    path: '',
    component: JournalstatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JournalstatsPageRoutingModule {}
