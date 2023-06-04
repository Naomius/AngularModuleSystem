import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

import {ActivatedRoute, Params, Router} from "@angular/router";
import {Subscription, switchMap, tap} from "rxjs";
import {ProductService} from "../../../shared/services/product.service";
import {ProductsType} from "../../../../types/products.type";


@Component({
  selector: 'about-product',
  templateUrl: './about-product.component.html',
  styleUrls: ['./about-product.component.scss']
})
export class AboutProductComponent implements OnInit, OnDestroy{

  private subscription: Subscription | null = null;

  @Input() product: ProductsType;
  @Output() addToCardEvent: EventEmitter<string> = new EventEmitter<string>()


  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private router: Router) {
    this.product = {
      id: 0,
      image: '',
      title: '',
      description: '',
      price: 0
    }
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
   this.subscription = this.activatedRoute.params
      .pipe(
        switchMap((params: Params) => this.productService.getProduct(params['id'])),
        tap((result: ProductsType) => console.log(result))
      )
      .subscribe({
        next: (data: ProductsType) => {
          this.product = data
        },
        error: (error) => {
          this.router.navigate(['/'])
        }
      })
  }

}
