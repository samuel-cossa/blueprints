import { PageHeaderComponent } from './../../shared/layout/components/page-header/page-header.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [PageHeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  heroTitle: string = "About us";
  heroText: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex explicabo nemo quod illo! Nisi, animi velit veritatis quam impedit adipisci?"
}
