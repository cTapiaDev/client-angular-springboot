import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '../../../services/contact/contact.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private contactService = inject(ContactService);

  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required]
  });

  create() {
    const contact = this.form.value;
    this.contactService.create(contact)
      .subscribe(() => {
        
      })
  }
}
