import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-works-component',
  imports: [
    CommonModule
  ],
  templateUrl: './works-component.html',
  styleUrl: './works-component.css',
})
export class WorksComponent implements OnInit{

  projectId: string | null = '';

  @Input() project: any;


  projects = [
    {
      id: 'mrp-multialmacen',
      number:"01",
      title: 'Sistema MRP Multialmacén',
      description: "Requerimientos y movimientos logísticos: Desarrollado con Streamlit + Python + SQLite y desplegado en PostgreSQL para producción.",
      technologies: ['MRP', 'Multialmacen', 'Logística'],
      images: ['https://i.postimg.cc/W17Fmh81/mrp1.png', 'https://i.postimg.cc/7ZNG1f9h/mrp2.png','https://i.postimg.cc/wjky5721/mrp3.png'],
      challenge: 'Coordinar múltiples almacenes de obra con el almacén principal, asegurando trazabilidad en despachos y recepciones con un stack adaptable entre desarrollo y producción.',
      solution: 'Construido con Streamlit + Python + SQLite en desarrollo y PostgreSQL en producción, integrando seguimiento de movimientos y control logístico multialmacén.',
      features: [
        'Requerimientos entre almacenes de obra y principalGestión de stock',
        'Seguimiento de movimientos logísticos',
        'Guía de remisión',
        'Generación de despachos y recepciones',
        'Trazabilidad completa de materiales'
      ]
    },

    {
      id: 'gestion-administrativa',
      number:"02",
      title: 'Sistema de Gestión Administrativa',
      description: 'Matrículas, pagos y seguimiento académico: Desarrollado con Django REST Framework (backend) y React + Vite (frontend).',
      technologies: ['Django', 'React', 'PostgreSQL'],
      images: ['https://i.postimg.cc/6ph2VycX/jardin1.png', 'https://i.postimg.cc/g2pL6vVc/jardin2.png','https://i.postimg.cc/JzQD3Gxw/jardin3.png'],
      challenge: 'Digitalizar procesos académicos y financieros en un jardín escolar, integrando matrículas, pagos y seguimiento académico en una sola plataforma accesible para apoderados.',
      solution: 'Implementado con Django REST Framework (backend) y React + Vite (frontend), ofreciendo una intranet para gestión académica y financiera en tiempo real.',
      features: [
        'Registro de aulas, estudiantes y apoderados',
        'Gestión de matrículas y pagos',
        'Intranet para apoderados',
        'Seguimiento académico y financiero en tiempo real'
      ]
    },
    {
      id:'landing-page',
      number:"03",
      title: 'Landing Page Jhonax',
      description:'Confección textil al mercado digital: Desarrollada con Angular para mostrar servicios de confección de ropa de Jhonax. ',
      technologies: ['Angular', 'Textil', 'Landing Page'],
      images: ['https://i.postimg.cc/bwRD0sg8/jhonax1.png', 'https://i.postimg.cc/6ph2Vyc9/jhonax2.png','https://i.postimg.cc/8zbJdj4k/jhonax3.png'],
      challenge: 'Dar presencia digital a un negocio textil tradicional, mostrando servicios de confección de ropa y conectando con el mercado online mediante una interfaz moderna.',
      solution: 'Landing page desarrollada con Angular, mostrando servicios de confección de ropa y conectando con el mercado online.',
      features: [
        'Presentación de servicios de confección textil',
        'Interfaz moderna y responsive',
        'Conexión con mercado digital',
        'Branding corporativo'
      ]
    },
    {
      id:'tienda-virtual',
      number:"04",
      title: 'Tienda Virtual Leon’s',
      description:'Uniformes deportivos online: Desarrollada con C# MVC para ampliar la venta presencial al canal digital.',
      technologies: ['C#', 'MVC', 'E-commerce'],
      images: ['assets/projects/landing.jpg', 'assets/projects/landing2.jpg'],
      challenge: ' Transformar la venta presencial de uniformes deportivos en un canal e‑commerce, ampliando alcance y visibilidad con una solución robusta en C# MVC',
      solution: 'Plataforma e‑commerce creada con C# MVC, ampliando alcance y visibilidad de la empresa textil en el mercado digital.',
      features: [
        'Catálogo de uniformes deportivos',
        'Plataforma e‑commerce con C# MVC',
        'Gestión de ventas online y presenciales',
        'Expansión de alcance y visibilidad digital'
      ]


    }
  ];

 

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.projectId = this.route.snapshot.paramMap.get('id');

    this.project = this.projects.find(
      p => p.id === this.projectId
    );
  }

  

  currentIndex: number = 0;

  nextImage() {
    if (this.project?.images?.length) {
      this.currentIndex = (this.currentIndex + 1) % this.project.images.length;
    }
  }

  prevImage() {
    if (this.project?.images?.length) {
      this.currentIndex = (this.currentIndex - 1 + this.project.images.length) % this.project.images.length;
    }
  }

  goToImage(index: number) {
    this.currentIndex = index;
  }
}
