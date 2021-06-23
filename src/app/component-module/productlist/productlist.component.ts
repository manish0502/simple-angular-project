import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/productlists';
import { ProductListService } from '../../services/product-list.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {


  productList: Product[]=[];

  constructor(private productService:ProductListService) { }

  ngOnInit(): void {
    this.loadProducts();

  }


 
  loadProducts(){

    this.productService.getProducts().subscribe((products)=> {
      debugger
      this.productList=products;
      console.log(this.productList)
   });

}
 }
