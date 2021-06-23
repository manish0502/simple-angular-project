import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders ,HttpParams}   from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact'

import { Product } from '../models/productlists'

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

 

  constructor(private http:HttpClient) { }



  getProducts():Observable<Product[]>  {
    const productsUrl = 'http://localhost:3000/products';
    return this.http.get<Product[]>(productsUrl);
  }


  contactUs(productBody:any): Observable<Contact>{

    const productUrl='http://localhost:3000/contact';
    return this.http.post<Contact>(productUrl, productBody);

  }
}
