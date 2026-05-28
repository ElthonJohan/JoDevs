import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar'
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-navbar-component',
  imports: [
    MatIconModule,
    MatToolbarModule,
    RouterModule,
    CommonModule,
    MatMenuModule,
    MatButtonModule
],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.css',
})
export class NavbarComponent {
   showMenu = false;

  constructor(private router: Router) {
  }

  ngOnInit() {}

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }
  closeMenu(): void {
    this.showMenu = false;
  }

  // ==================== SOLUCIÓN AL ERROR ====================
  @HostListener('document:keydown.escape')
  onEscKeydown() {
    this.closeMenu();
  }


}
