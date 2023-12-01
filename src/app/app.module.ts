import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { UserchoixConnectComponent } from './userchoix-connect/userchoix-connect.component';
import { UsersigninformComponent } from './usersigninform/usersigninform.component';
import { UserloginformComponent } from './userloginform/userloginform.component';
import { UserdetailprodComponent } from './userdetailprod/userdetailprod.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AdminproductComponent } from './adminproduct/adminproduct.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';

@NgModule({
  declarations: [
    AppComponent,
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
    UserchoixConnectComponent,
    UsersigninformComponent,
    UserloginformComponent,
    UserdetailprodComponent,
    AdminproductComponent,
    AdmindashboardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
