import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { catchError, map } from 'rxjs';
import { ForbiddenException } from '@nestjs/common/exceptions';

@Injectable({})
export class ProductService {
  constructor(private httpService: HttpService) {}
  private url = 'https://fakestoreapi.com/products';

  async products(options) {
    return this.httpService.get(`${this.url}`, {
        headers: { 'Accept-Encoding': 'gzip,deflate,compress'}
    })
    .pipe(map((res=>{
        const sortArray = (options && options !== '') ? res.data.sort((firstProduct, secondProduct) =>
            options === 'desc'
                ? firstProduct.price < secondProduct.price
                ? 1
                : firstProduct.price > secondProduct.price
                ? -1
                : 0
                : firstProduct.price > secondProduct.price
                ? 1
                : firstProduct.price < secondProduct.price
                ? -1
                : 0
            ) : res.data;
            return sortArray;
        })
        ,
    ))
    .pipe(catchError(() => {
        throw new ForbiddenException('API not available');
      }),);
    ;
  }

  productsById(id: string){
    return this.httpService.get(`${this.url}/${id}`, {
        headers: { 'Accept-Encoding': 'gzip,deflate,compress'}
    })
    .pipe(map((res) => res.data))
    .pipe(catchError(() => {throw new ForbiddenException('API not available');}));
  }
}