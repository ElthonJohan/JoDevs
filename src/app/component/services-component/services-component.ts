import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services-component',
  imports: [
    CommonModule
  ],
  templateUrl: './services-component.html',
  styleUrl: './services-component.css',
})
export class ServicesComponent implements OnInit {

  serviceId: string | null = '';

  @Input() service: any;
  
  services = [
  {
    id: 'desarrollo-web',
    icon: 'code',
    title: 'Desarrollo Web',

    subtitle:
      'Creamos plataformas web modernas, rápidas y escalables.',

    description:
      'Desarrollamos aplicaciones web profesionales enfocadas en rendimiento, experiencia de usuario y escalabilidad empresarial.',

    longDescription:
      'Construimos soluciones web completas utilizando tecnologías modernas como Angular, React, Node.js y Django. Creamos sistemas administrativos, plataformas empresariales, e-commerce, landing pages y aplicaciones SaaS optimizadas para alto rendimiento y crecimiento.',

    technologies: [
      'Angular',
      'React',
      'Node.js',
      'Django',
      'TypeScript',
      'MongoDB'
    ],

    includes: [
      'Diseño UI/UX moderno',
      'Aplicaciones responsivas',
      'Optimización SEO',
      'Panel administrativo',
      'Autenticación segura',
      'Integración con APIs',
      'Bases de datos escalables',
      'Deploy en la nube'
    ],

    benefits: [
      'Mayor presencia digital',
      'Automatización de procesos',
      'Escalabilidad empresarial',
      'Mayor velocidad y rendimiento'
    ],

    process: [
      'Análisis del proyecto',
      'Diseño de interfaz',
      'Desarrollo frontend/backend',
      'Testing y optimización',
      'Deploy y mantenimiento'
    ],

    stats: {
      projects: '10+',
      satisfaction: '99%',
      support: '24/7'
    }
  },

  {
    id: 'app-movil',
    icon: 'phone_iphone',
    title: 'Desarrollo Móvil',

    subtitle:
      'Aplicaciones móviles modernas para Android y iOS.',

    description:
      'Desarrollamos apps móviles nativas e híbridas enfocadas en rendimiento y experiencia de usuario.',

    longDescription:
      'Creamos aplicaciones móviles utilizando Flutter y React Native para Android y iOS. Diseñamos apps rápidas, intuitivas y escalables para startups, negocios y empresas.',

    technologies: [
      'Flutter',
      'React Native',
      'Firebase',
      'Node.js',
      'SQLite'
    ],

    includes: [
      'Apps Android y iOS',
      'Notificaciones push',
      'Autenticación',
      'Integración API REST',
      'Geolocalización',
      'Publicación en Play Store'
    ],

    benefits: [
      'Mayor alcance',
      'Interacción en tiempo real',
      'Fidelización de clientes',
      'Experiencia móvil moderna'
    ],

    process: [
      'Planificación',
      'Diseño UX/UI',
      'Desarrollo móvil',
      'Testing',
      'Publicación'
    ],

    stats: {
      projects: '2+',
      satisfaction: '98%',
      support: '24/7'
    }
  },

  {
    id: 'design-web',
    icon: 'palette',
    title: 'Diseño Web',

    subtitle:
      'Interfaces modernas centradas en experiencia de usuario.',

    description:
      'Diseñamos experiencias digitales modernas, intuitivas y atractivas.',

    longDescription:
      'Creamos diseños UI/UX profesionales enfocados en conversión, accesibilidad y experiencia de usuario. Diseñamos prototipos interactivos y sistemas visuales modernos.',

    technologies: [
      'Figma',
      'Adobe XD',
      'UI/UX',
      'Wireframing'
    ],

    includes: [
      'Diseño UI moderno',
      'Prototipos interactivos',
      'Diseño responsive',
      'Sistema de diseño',
      'Experiencia UX'
    ],

    benefits: [
      'Mayor conversión',
      'Mejor experiencia',
      'Diseño profesional',
      'Mayor impacto visual'
    ],

    process: [
      'Investigación',
      'Wireframes',
      'Prototipado',
      'Diseño visual',
      'Entrega final'
    ],

    stats: {
      projects: '15+',
      satisfaction: '100%',
      support: '24/7'
    }
  }
];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.serviceId = this.route.snapshot.paramMap.get('id');
    
    this.service = this.services.find(s => s.id === this.serviceId);
  }

  currentIndex = 0;

nextImage() {
  if (!this.service?.images?.length) return;

  this.currentIndex =
    (this.currentIndex + 1) %
    this.service.images.length;
}

prevImage() {
  if (!this.service?.images?.length) return;

  this.currentIndex =
    (this.currentIndex - 1 + this.service.images.length) %
    this.service.images.length;
}


}
