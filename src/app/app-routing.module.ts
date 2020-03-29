import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'folder/Welcome',
        pathMatch: 'full'
    },
    {
        path: 'new',
        loadChildren: () => import('./new/new.module').then( m => m.NewPageModule)
    },
    {
        path: 'folder/:id',
        loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
    }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
