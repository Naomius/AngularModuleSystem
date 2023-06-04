import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Page404Component} from "./components/common/page404/page404.component";
import {LayoutComponent} from "./views/layout.component";


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '', loadChildren: () => import('./views/main/main.module').then(m => m.MainModule)},
      {path: 'order', loadChildren: () => import('./views/order/order.module').then(m => m.OrderModule)},
      {path: 'about-product', loadChildren: () => import('./views/catalog/catalog.module').then(m => m.CatalogModule)},
      {path: 'catalog', loadChildren: () => import('./views/catalog/catalog.module').then(m => m.CatalogModule)},
    ]
  },
  {path: '**', component: Page404Component}
]

@NgModule({
  imports: [RouterModule.forRoot(routes,  {anchorScrolling: 'enabled', useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
