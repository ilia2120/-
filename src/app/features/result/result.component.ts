import { Component, inject, OnInit } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';
import { ResultService } from '../../shared/services';
import {
  Allprodacts,
  category,
  products,
} from '../../shared/interfaces/products';
import { CreatComponent, DisplayComponent } from '../../shared/ui';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, NgClass, NgFor } from '@angular/common';

import { RouterLink, RouterOutlet } from '@angular/router';

import { EpisodPipe } from '../../shared/pipe';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [
    CreatComponent,
    DisplayComponent,
    NgFor,
    RouterOutlet,
    FormsModule,
    RouterLink,
    AsyncPipe,
    EpisodPipe,
    NgClass,
  ],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss',
})
export default class ResultComponent implements OnInit {
  private readonly http = inject(ResultService);

  readonly nam = '';
  product: products[] = [];
  readonly category: category[] = [];
  readonly CategoryInCategoy = [
    { name: 'selfcare', product: ['Beauty', 'Fragrances', 'Skin Care'] },
    {
      name: 'furniture',
      product: ['Furniture', 'Home Decoration', 'Kitchen Accessories'],
    },
    { name: 'magazine', product: ['Groceries', 'Tablets'] },
    {
      name: 'Technic',
      product: ['Laptops', 'Mobile Accessories', 'Smartphones'],
    },
    { name: 'Men', product: ['Mens Shirts', 'Mens Watches', 'Mens Shoes'] },
    { name: 'transport', product: ['Motorcycle', 'Vehicle'] },
    {
      name: 'accessories',
      product: ['Sunglasses', 'Tops', 'Sports Accessories'],
    },
    {
      name: 'Women',
      product: [
        'Womens Bags',
        'Womens Dresses',
        'Womens Jewellery',
        'Womens Shoes',
        'Womens Watches',
      ],
    },
  ];

  get categorypush() {
    return this.http
      .category()
      .pipe(
        map((response) => {
          this.category.push(...response);
        })
      )
      .subscribe();
  }

  addcart(prduct: products) {
    this.product.push(prduct);
  }
  get totalPrice(): number {
    return this.product.reduce((sum, product) => sum + (product.price || 0), 0);
  }

  deleteproductsincart(productid: number) {
    this.http
      .deletproduct(productid)
      .pipe(
        tap((response) => {
          this.product = this.product.filter(
            (products) => products.id !== response.id
          );
        })
      )
      .subscribe();
  }
  readonly #products$ = new BehaviorSubject<products[]>([]);
  readonly products$ = this.#products$.asObservable();

  ngOnInit() {
    this.categorypush;
    this.main();
  }

  main() {
    this.http
      .getallproducts(this.skip, this.limit)
      .pipe(
        tap((response) => {
          this.#products$.next(response.products);
        })
      )
      .subscribe();
  }
  search() {
    this.http
      .searchproducts(this.nam)
      .pipe(
        tap((response) => {
          this.#products$.next(response.products);
        })
      )
      .subscribe();
  }
  categoryproducts(id: string) {
    this.http
      .getprudacts(id)
      .pipe(
        tap((response) => {
          this.#products$.next(response.products);
        })
      )
      .subscribe();
  }

  nextpage() {
    this.skip += this.limit;
    this.main();
    this.#products$.next([]);
  }

  previouspage() {
    if (this.skip >= this.limit) {
      this.skip -= this.limit;
      this.main();
      this.#products$.next([]);
    }
  }
  total: number = 194;
  limit: number = 10;
  skip: number = 0;

  get currentpage(): number {
    return Math.floor(this.skip / this.limit) + 1;
  }

  get totalpage(): number {
    return Math.ceil(this.total / this.limit);
  }
}
