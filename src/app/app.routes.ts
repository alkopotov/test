import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { AboutUserComponent } from './pages/about-user/about-user.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'about/:id', component: AboutUserComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'phone', redirectTo: 'contacts'},
  {path: '**', component: NotFoundPageComponent},
];
