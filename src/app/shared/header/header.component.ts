import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProductService} from "../services/product.service";
import {ProductsType} from "../../../types/products.type";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

@Input()
export class HeaderComponent implements OnInit {

  searchValue = '';

  products: ProductsType[] = [];


  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit(): void {}


  getCatalog(): void {
    this.router.navigate(['/catalog']);
    this.productService.searchText.next(this.searchValue);
  }

}


