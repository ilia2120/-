import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export default class ContactComponent {
  onSubmit(form: NgForm) {
    const { firstName, email, phoneNumber, lastName } = form.value;
    console.log(form.value);
    console.log('After');
    console.log({
      lastName,
      firstName,
      email,
      phoneNumber: `+995${phoneNumber}`,
    });
  }
}
