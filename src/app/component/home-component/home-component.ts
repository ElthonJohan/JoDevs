import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatButtonModule } from "@angular/material/button";
import { CdkAriaLive } from "../../../../node_modules/@angular/cdk/types/_a11y-module-chunk";

@Component({
  selector: 'app-home-component',
  imports: [
    CommonModule, MatIconModule,
    FormsModule,
    MatButtonModule,
    RouterLink
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

  services = [
    {
      id: 'desarrollo-web',
      icon: 'code',
      title: 'Desarrollo Web',
      description: 'Desarrollo de aplicaciones web modernas y responsivas utilizando Angular, React, Django y más.',
      features: [
        'React',
        'Node.js'
      ]
    },
    {
      id: 'app-movil',
      icon: 'phone_iphone',
      title: 'Desarrollo Móvil',
      description: 'Desarrollo de aplicaciones móviles nativas e híbridas utilizando React Native, Flutter y más.',
      features: [
        'React Native',
        'Flutter'
      ]
    },
    {
      id: 'design-web',
      icon: 'palette',
      title: 'Diseño Web',  
      description: 'Diseño y desarrollo de interfaces web modernas y responsivas utilizando las últimas tecnologías.',
      features: [
        'Figma',
        'Protipado',
        'UI/UX'
      ]
    
    }
  ];



  projects = [
    {
      id: 'mrp-multialmacen',
      number:"01",
      title: 'Sistema MRP Multialmacén',
      description: "Requerimientos y movimientos logísticos: Desarrollado con Streamlit + Python + SQLite y desplegado en PostgreSQL para producción.",
      technologies: ['MRP', 'Multialmacen', 'Logística'],
      image: 'assets/projects/mrp.jpg',
      challenge: 'Gestionar múltiples almacenes y movimientos en tiempo real.',
      solution: 'Se desarrolló un sistema MRP optimizado con sincronización de inventario.',
      features: [
        'Gestión de stock',
        'Control de órdenes',
        'Reportes en tiempo real',
        'Dashboard administrativo'
      ]
    },

    {
      id: 'gestion-administrativa',
      number:"02",
      title: 'Sistema de Gestión Administrativa',
      description: 'Matrículas, pagos y seguimiento académico: Desarrollado con Django REST Framework (backend) y React + Vite (frontend).',
      technologies: ['Django', 'React', 'PostgreSQL'],
      image: ['assets/projects/admin.jpg', 'assets/projects/admin2.jpg'],
      challenge: 'Centralizar matrículas y pagos.',
      solution: 'Se creó una plataforma administrativa moderna y escalable.',
      features: [
        'Módulo de matrículas',
        'Pagos online',
        'Gestión de estudiantes',
        'Panel administrativo'
      ]
    },
    {
      id:'landing-page',
      number:"03",
      title: 'Landing Page Jhonax',
      description:'Confección textil al mercado digital: Desarrollada con Angular para mostrar servicios de confección de ropa de Jhonax. ',
      technologies: ['Angular', 'Textil', 'Landing Page'],
      image: ['assets/projects/landing.jpg', 'assets/projects/landing2.jpg'],
      challenge: 'Centralizar matrículas y pagos.',
      solution: 'Se creó una plataforma administrativa moderna y escalable.',
      features: [
        'Módulo de matrículas',
        'Pagos online',
        'Gestión de estudiantes',
        'Panel administrativo'
      ]
    },
    {
      id:'tienda-virtual',
      number:"04",
      title: 'Tienda Virtual Leon’s',
      description:'Uniformes deportivos online: Desarrollada con C# MVC para ampliar la venta presencial al canal digital.',
      technologies: ['C#', 'MVC', 'E-commerce'],
      image: ['assets/projects/landing.jpg', 'assets/projects/landing2.jpg'],
      challenge: 'Centralizar matrículas y pagos.',
      solution: 'Se creó una plataforma administrativa moderna y escalable.',
      features: [
        'Módulo de matrículas',
        'Pagos online',
        'Gestión de estudiantes',
        'Panel administrativo'
      ]


    }
  ];

 

  constructor(
    private router: Router,
    private route: ActivatedRoute,
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