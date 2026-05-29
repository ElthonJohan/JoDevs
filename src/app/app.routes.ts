import { Routes } from '@angular/router';
import { NavbarComponent } from './component/navbar-component/navbar-component';
import { HomeComponent } from './component/home-component/home-component';
import { BlogComponent } from './component/blog-component/blog-component';
import { WorksComponent } from './component/works-component/works-component';

export const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'blog',
        component: BlogComponent,
      },
      {
    path: 'works/:id',
    component: WorksComponent,
  }
    ],
  },
];
