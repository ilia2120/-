import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  output,
  Output,
} from '@angular/core';
import { prodactss, products } from '../../interfaces/products';
import { HtmlParser } from '@angular/compiler';

@Component({
  selector: 'app-creat',
  standalone: true,
  imports: [],
  templateUrl: './creat.component.html',
  styleUrl: './creat.component.scss',
})
export class CreatComponent {
  @Input() products: products | null = null;
  @Output() addcart = new EventEmitter<products>();
  onclick() {
    if (this.products) {
      this.addcart.emit(this.products);
    }
  }
}
