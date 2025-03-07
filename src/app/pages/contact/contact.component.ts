import { PageHeaderComponent } from './../../shared/layout/components/page-header/page-header.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [PageHeaderComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  heroTitle: string = "Contact us";
  heroText: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex explicabo nemo quod illo! Nisi, animi velit veritatis quam impedit adipisci?"
}
