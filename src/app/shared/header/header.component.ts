import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Subject} from "rxjs";
import {ProductService} from "../services/product.service";
import {ProductsType} from "../../../types/products.type";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [ProductService]
})

@Input()
export class HeaderComponent implements OnInit {

  searchValue = '';

  products: ProductsType[] = [];


  constructor(private activeRoute: ActivatedRoute, private router: Router, private productService: ProductService) {
  }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.searchValue = params['search']?.trim();
      this.productService.searchText.next(params['search']?.trim());
    })
  }


  getCatalog() {
    this.router.navigate(['/catalog'], {queryParams: this.searchValue? {search: this.searchValue} : {}});
  }

}


