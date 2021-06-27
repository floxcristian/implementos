// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
// Layouts
import { MainLayoutComponent } from '@shared/layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from '@shared/layouts/auth-layout/auth-layout.component';

const routes: Routes = [
  {
    path: 'account',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/products/products.module').then(
            (m) => m.ProductsModule
          )
      }
      /*{
        path: '**',
        redirectTo: 'products',
        pathMatch: 'full'
      }*/
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
