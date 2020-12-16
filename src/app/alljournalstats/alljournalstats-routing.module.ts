import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlljournalstatsPage } from './alljournalstats.page';

const routes: Routes = [
  {
    path: '',
    component: AlljournalstatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlljournalstatsPageRoutingModule {}
