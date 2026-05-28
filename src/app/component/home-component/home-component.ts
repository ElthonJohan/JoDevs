import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatAnchor, MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-home-component',
  imports: [
    CommonModule, MatIconModule,
    FormsModule,
    MatAnchor,
    MatButtonModule
],  
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent implements OnInit, OnDestroy {

  heroImages = [
    "https://i.postimg.cc/Jzzy5NnP/jodevs.png",
    "https://i.postimg.cc/fTKtd2w0/codigo.jpg",
    "https://i.postimg.cc/nrTFXWvt/movil.jpg",]

  currentImage = 0;
  loading = true;
  error = false;
  private intervalId: any;

  

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef // Inyectamos el detector de cambios
  ) {}

  contactForm = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  onSubmit() {
    if (this.contactForm.name && this.contactForm.email && this.contactForm.message) {
      console.log('Formulario enviado:', this.contactForm);
      alert('✅ Mensaje enviado correctamente. ¡Nos pondremos en contacto pronto!');
      
      // Resetear formulario
      this.contactForm = { name: '', email: '', phone: '', message: '' };
    } else {
      alert('Por favor completa los campos obligatorios.');
    }
  }

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.currentImage = (this.currentImage + 1) % this.heroImages.length;
      this.cdr.detectChanges(); // Forzamos a Angular a renderizar el cambio
    }, 3000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Limpiamos el timer al salir de la vista
    }
  }


}