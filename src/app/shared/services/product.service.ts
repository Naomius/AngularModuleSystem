import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {ICreatOrderInterface} from "../../components/interfaces/ICreatOrderInterface";
import {ProductsType} from "../../../types/products.type";
import {OrderFormType} from "../../../types/orderForm.type";


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  searchText: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) { }

  getSearchProduct(search: string): Observable<ProductsType[]> {
    const params = new HttpParams().set('search', search);
    return this.http.get<ProductsType[]>('https://testologia.site/tea', {params})
  }

  getProducts(): Observable<ProductsType[]> {
    return this.http.get<ProductsType[]>('https://testologia.site/tea')
  }

  getProduct(id: number): Observable<ProductsType> {
    return this.http.get<ProductsType>(`https://testologia.site/tea?id=${id}`)
  }

  creatOrder(data: OrderFormType): Observable<ICreatOrderInterface> {
    return this.http.post<ICreatOrderInterface>(`https://testologia.site/order-tea`, data)
  }



}
