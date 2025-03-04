import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DarkLightModeService } from './shared/layout/services/dark-light.mode.service';
import { NavbarComponent } from './shared/layout/components/navbar/navbar.component';
import { FooterComponent } from './shared/layout/components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  darkLightModeService: DarkLightModeService = inject(DarkLightModeService);
  constructor() {
    this.darkLightModeService.getPrefersColorScheme();
  }
}
