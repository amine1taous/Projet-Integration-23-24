import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { MenuadminComponent } from './menuadmin/menuadmin.component';
import { ProductsadminComponent } from './productsadmin/productsadmin.component';
import { HttpClientModule } from '@angular/common/http';
import { AddprodadminComponent } from './addprodadmin/addprodadmin.component';
import { EventsadminComponent } from './eventsadmin/eventsadmin.component';
import { ArticlesadminComponent } from './articlesadmin/articlesadmin.component';
import { AddarticleadminComponent } from './addarticleadmin/addarticleadmin.component';
import { UserProductsComponent } from './user-products/user-products.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { UserAcceuilComponent } from './user-acceuil/user-acceuil.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { UserfooterComponent } from './userfooter/userfooter.component';
import { PanierComponent } from './panier/panier.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';

@NgModule({
  declarations: [
    AppComponent,
    AdmindashComponent,
    MenuadminComponent,
    ProductsadminComponent,
    AddprodadminComponent,
    EventsadminComponent,
    ArticlesadminComponent,
    AddarticleadminComponent,
    UserProductsComponent,
    UserMenuComponent,
    UserAcceuilComponent,
    AboutusComponent,
    ContactusComponent,
    UserfooterComponent,
    PanierComponent,
    LoginadminComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
