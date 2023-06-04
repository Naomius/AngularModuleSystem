import {Injectable, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {FormsModule} from "@angular/forms";
import {CustomDescriptionTextPipe} from "./pipes/custom-description-text.pipe";
import {CustomPricePipe} from "./pipes/custom-price.pipe";
import {ProductComponent} from "./components/products/product.component";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CustomDescriptionTextPipe,
    ProductComponent,
    CustomPricePipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    CustomDescriptionTextPipe,
    CustomPricePipe,
  ]
})

export class SharedModule { }
