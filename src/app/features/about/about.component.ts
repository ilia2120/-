import { Component, inject, OnInit } from '@angular/core';
import { ResultService } from '../../shared/services';
import { tap } from 'rxjs';
import { comment, comments } from '../../shared/interfaces/products';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export default class AboutComponent implements OnInit {
  private readonly http = inject(ResultService);

  readonly masive: comment[] = [];

  constructor() {

  }
  ngOnInit(): void {
    console.log(this.masive);
  }

  skip() {
    this.http
      .getcomentss(1)
      .pipe(
        tap((respons) => {
          this.masive.push(...respons.comments);
        })
      )
      .subscribe();
  }
}
