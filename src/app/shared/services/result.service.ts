import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { prodacturl } from '../consts';
import {
  Allprodacts,
  category,
  comments,
  products,
} from '../interfaces/products';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResultService {
  readonly user$ = new Subject<string>();
  readonly userstream$ = this.user$.asObservable();
  private readonly http = inject(HttpClient);

  private readonly Baseurl = `${prodacturl}/products`;
  private readonly comment = `${prodacturl}/comments`;

  category() {
    return this.http.get<category[]>(`${this.Baseurl}/categories`);
  }

  getallproducts(id: number, limit: number) {
    return this.http.get<Allprodacts>(
      `${this.Baseurl}?limit=${limit}&skip=${id}`
    );
  }
  searchproducts(id: string) {
    return this.http.get<Allprodacts>(`${this.Baseurl}/search?q=${id}`);
  }
  getprudacts(id: string) {
    return this.http.get<Allprodacts>(`${this.Baseurl}/category/${id}`);
  }
  deletproduct(id: number) {
    return this.http.delete<products>(`${this.Baseurl}/${id}`);
  }

  getcomentss(id: number) {
    return this.http.get<comments>(`${this.comment}?limit=1&skip=${id}`);
  }
}
