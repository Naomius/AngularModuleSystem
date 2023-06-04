import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main.component";
import {CatalogComponent} from "../catalog/catalog/catalog.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  // {path: 'catalog', component: CatalogComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
