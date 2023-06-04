import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CatalogComponent} from "./catalog/catalog.component";
import {AboutProductComponent} from "./about-product/about-product.component";


const routes: Routes = [
  {path: '', component: CatalogComponent},
  {path: ':id', component: AboutProductComponent}, //about-product/
  // {path: 'order', component: OrderComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
