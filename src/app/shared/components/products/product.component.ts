import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {ProductsType} from "../../../../types/products.type";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [ProductService]
})
export class ProductComponent {

  @Input() product!: ProductsType

  constructor(private router: Router) {
  }

}
