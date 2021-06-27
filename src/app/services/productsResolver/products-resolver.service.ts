import { Injectable } from '@angular/core';
import {
  Resolve
} from '@angular/router';
import { ProductService } from '../product/product.service';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsResolverService implements Resolve<any> {
  constructor(private product: ProductService) {}
  resolve() {
    return this.product.getProducts().pipe(
      catchError(error => {
        return of('No data');
      })
    );
  }
}
