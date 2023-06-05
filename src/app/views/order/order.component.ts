import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {ProductService} from "../../shared/services/product.service";


@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy{

  btnTextBlock: boolean = false;
  formBlock: boolean = true;
  modalSuccess: boolean = false;

  private subscription: Subscription | null = null;
  private subscriptionOrder: Subscription | null = null;


  public orderForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('^[а-яА-я]+$')]],
    last_name: ['', [Validators.required, Validators.pattern('^[а-яА-я]+$')]],
    phone: ['', [Validators.required, Validators.pattern('^[\+]?[0-9]{3}?[0-9]{3}?[0-9]{4,5}$')]],
    country: ['', Validators.required],
    zip: ['', Validators.required],
    address: ['', [Validators.required, Validators.pattern('^[A-zА-яЁё0-9\\s-\\s/]+$')]],
    product: ['', Validators.required],
    comment: '',
  })

  get name(): FormControl {
    return this.orderForm.get('name') as FormControl;
  }
  get last_name(): FormControl {
    return this.orderForm.get('last_name') as FormControl;
  }
  get phone(): FormControl {
    return this.orderForm.get('phone') as FormControl;
  }
  get country(): FormControl {
    return this.orderForm.get('country') as FormControl;
  }
  get zip(): FormControl {
    return this.orderForm.get('zip') as FormControl;
  }
  get address(): FormControl {
    return this.orderForm.get('address') as FormControl;
  }
  get product(): FormControl {
    return this.orderForm.get('product') as FormControl;
  }

  constructor(private router: Router,
              private fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private productService: ProductService) {
  }

  ngOnInit():void {
    this.subscription = this.activatedRoute.queryParams.subscribe((params) => {
      if (params['product']) {
        this.product?.setValue(params['product'])
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    this.subscriptionOrder?.unsubscribe();
  }


  public creatOrder(): void {
    this.subscriptionOrder = this.productService.creatOrder(
      this.orderForm.getRawValue()
    )
      .subscribe(
        {
        next: (data) => {
          if (data.success && !data.message) {
            this.formBlock= false;
            this.modalSuccess = true;
          }
        },
          error: (error) => {
            console.log(error)
            this.btnTextBlock = true;
          }
      })
  }

}
