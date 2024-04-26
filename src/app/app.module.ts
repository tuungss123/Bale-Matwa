import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddNameComponent } from './components/add-name/add-name.component';
import { NameDetailComponent } from './components/name-detail/name-detail.component';
import { NamesListComponent } from './components/names-list/names-list.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';

import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeRoutingModule } from './components/home/home-routing.module';

import { LoginComponent } from './components/login/login.component';
import { LoginRoutingModule } from './components/login/login-routing.module';
import { NamesListAdminComponent } from './components/names-list-admin/names-list.admin.component';

@NgModule({
  declarations: [
    AppComponent,
    AddNameComponent,
    NameDetailComponent,
    NamesListComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    GalleryComponent,
    LoginComponent,
    NamesListAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    HomeRoutingModule,
    LoginRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
