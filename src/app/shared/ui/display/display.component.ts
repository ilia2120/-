import {
  Component,
  EventEmitter,
  inject,
  Input,
  input,
  OnInit,
  Output,
} from '@angular/core';
import {
  Allprodacts,
  category,
  prodactss,
  products,
} from '../../interfaces/products';
import { RouterLink } from '@angular/router';
import { ResultService } from '../../services';
import { tap } from 'rxjs';
import { EpisodPipe } from '../../pipe';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [RouterLink, EpisodPipe],
  templateUrl: './display.component.html',
  styleUrl: './display.component.scss',
})
export class DisplayComponent {
  @Input() category: category | null = null;
  @Output() addcategory = new EventEmitter<category>();

  deleteProducts() {
    if (this.category) {
      this.addcategory.emit(this.category);
    }
  }
}
