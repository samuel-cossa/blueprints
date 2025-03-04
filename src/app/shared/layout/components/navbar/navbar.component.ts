import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { ToggleModesComponent } from '../toggle-modes/toggle-modes.component';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkWithHref, RouterLinkActive, ToggleModesComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  header_var = false;
  show_menu = false;
  public show: string = 'hide';

  screenWidth = signal<number>(window.innerWidth);

  isToggleButtonVisible = signal<boolean>(false);

  @HostListener('window;resize')
  onResize() {
    this.screenWidth.set(window.innerWidth);
    if (this.screenWidth() < 768) {
      this.isToggleButtonVisible.set(true);
    } else {
      this.isToggleButtonVisible.set(false);
    }
  }

  @HostListener("document:scroll")
  scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      this.header_var = true;
    } else {
      this.header_var = false;
    }

    if (document.body.clientWidth < 1280) {
      this.show_menu = true;
    } else {
      this.show_menu = false;
    }
  }

  public toggle_menu() {
    document.documentElement.scrollTop = 0;
    this.show === 'hide' ? this.show = 'show' : this.show = 'hide';
    this.show_menu = !this.show_menu;
  }
}
