// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
// Guards
// import { PublicGuard } from "@core/guards/public/public.guard";
// import { AuthGuard } from "@core/guards/auth/auth.guard";
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
          import('./features/home/home.module').then((m) => m.HomeModule)
      }
      /*{
        path: 'products',
        loadChildren: () =>
          import('./features/products/products.module').then(
            (m) => m.ProductsModule
          )
      }*/
    ]
  },
  {
    path: '**',
    loadChildren: () =>
      import('./features/not-found-page/not-found-page.module').then(
        (m) => m.NotFoundPageModule
      )
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
