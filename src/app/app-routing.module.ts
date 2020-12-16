import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'journaldetail/:id',
    loadChildren: () => import('./journaldetail/journaldetail.module').then( m => m.JournaldetailPageModule)
  },
  {
    path: 'addtodo/:id',
    loadChildren: () => import('./addtodo/addtodo.module').then( m => m.AddtodoPageModule)
  },
  {
    path: 'publicjournal/:id',
    loadChildren: () => import('./publicjournal/publicjournal.module').then( m => m.PublicjournalPageModule)
  },
  {
    path: 'publicjournaldetail/:id',
    loadChildren: () => import('./publicjournaldetail/publicjournaldetail.module').then( m => m.PublicjournaldetailPageModule)
  },
  {
    path: 'newsdetail/:id',
    loadChildren: () => import('./newsdetail/newsdetail.module').then( m => m.NewsdetailPageModule)
  },
  {
    path: 'symptomcheck/:id',
    loadChildren: () => import('./symptopmcheck/symptopmcheck.module').then( m => m.SymptopmcheckPageModule)
  },
  {
    path: 'symptomstats/:id',
    loadChildren: () => import('./symptomstats/symptomstats.module').then( m => m.SymptomstatsPageModule)
  },
  {
    path: 'journalstats/:id',
    loadChildren: () => import('./journalstats/journalstats.module').then( m => m.JournalstatsPageModule)
  },
  {
    path: 'alljournalstats',
    loadChildren: () => import('./alljournalstats/alljournalstats.module').then( m => m.AlljournalstatsPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
