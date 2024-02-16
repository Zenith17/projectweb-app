import { Routes } from '@angular/router';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { HomeComponent } from './home/home.component';
import { TestimoniosComponent } from './testimonios/testimonios.component';

export const routes: Routes = [
    {
        'path': 'nosotros', 
        component: NosotrosComponent 
    },
    {
        'path': 'home',
        component: HomeComponent
    },
    {
        'path': 'testimonios',
        component: TestimoniosComponent
    },
    {
        'path': '**',
        component: HomeComponent
    }
];
