import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.products = this.activatedRoute.snapshot.data['products'];
    console.log("In products component::::",this.products);
    
   
  }
}