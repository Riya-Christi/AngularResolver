import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { ProductService } from '../product/product.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsResolverService implements Resolve<Product[]>{
  constructor(private product: ProductService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<Product[]>{
    console.log('Get products data in resolver', route);
    return this.product.getProducts();
  }
}
