import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatButtonModule } from "@angular/material/button";
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-home-component',
  imports: [
    CommonModule, MatIconModule,
    FormsModule,
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

  emailjs.send(
    'service_v8t69b9',
    'template_t9unew6',
    {
      from_name: this.contactForm.name,
      from_email: this.contactForm.email,
      phone: this.contactForm.phone,
      message: this.contactForm.message
    },
    'uvWtB5LJDJmRsh32_'
  )
  .then(() => {

    alert('Mensaje enviado correctamente');

    this.contactForm = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };

  })
  .catch((error) => {

    console.error(error);

    alert('Error al enviar el mensaje');

  });

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