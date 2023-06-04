import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogRoutingModule } from './catalog-routing.module';
import {CatalogComponent} from "./catalog/catalog.component";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {AboutProductComponent} from "./about-product/about-product.component";


@NgModule({
  declarations: [
    CatalogComponent,
    AboutProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    CatalogRoutingModule
  ],
  exports: [
    CatalogRoutingModule
  ]
})
export class CatalogModule { }
