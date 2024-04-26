import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { NamesListComponent } from './components/names-list/names-list.component';
import { AddNameComponent } from './components/add-name/add-name.component';
import { NameDetailComponent } from './components/name-detail/name-detail.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NamesListAdminComponent } from './components/names-list-admin/names-list.admin.component';

 
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'names-list', component: NamesListComponent },
  { path: 'add-name', component: AddNameComponent },
  { path: 'edit-name/:id', component: NameDetailComponent },
  {path: 'names-admin', component: NamesListAdminComponent}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
 
export class AppRoutingModule { }
