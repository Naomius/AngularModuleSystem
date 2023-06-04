import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Subscription, switchMap} from "rxjs";
import {ProductService} from "../../../shared/services/product.service";
import {ProductsType} from "../../../../types/products.type";


@Component({
  selector: 'catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  providers: [ProductService]
})
export class CatalogComponent implements OnInit, OnDestroy{

  private subscription: Subscription | null = null;
  products: ProductsType[] = [];

  constructor(private http: HttpClient,
              private productService: ProductService,
              private router: Router) {
  }


  ngOnInit() {
   this.subscription = this.productService.searchText
     .pipe(
       switchMap((searchText: string) => {
         if (searchText) {
           return this.productService.getSearchProduct(searchText);
         } else {
           return this.productService.getProducts();
         }
       })
     )
     .subscribe({
       next: (data) => {
         this.products = data;
       },
       error: (error) => {
         console.log(error);
         this.router.navigate(['/'])
       }
     })
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}


