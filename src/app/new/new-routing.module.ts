import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewPage } from './new.page';
import { NewGamePage } from './newGame.page';

const routes: Routes = [
  {
    path: '',
    component: NewPage
  },
  {
      path: 'game',
      component: NewGamePage
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewPageRoutingModule {}
