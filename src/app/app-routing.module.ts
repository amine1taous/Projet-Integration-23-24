import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddarticleadminComponent } from './addarticleadmin/addarticleadmin.component';
import { AddprodadminComponent } from './addprodadmin/addprodadmin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminproductComponent } from './adminproduct/adminproduct.component';
import { ArticlesadminComponent } from './articlesadmin/articlesadmin.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EventsadminComponent } from './eventsadmin/eventsadmin.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { PanierComponent } from './panier/panier.component';
import { ProductsadminComponent } from './productsadmin/productsadmin.component';
import { UserAcceuilComponent } from './user-acceuil/user-acceuil.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { UserProductsComponent } from './user-products/user-products.component';
import { UserchoixConnectComponent } from './userchoix-connect/userchoix-connect.component';
import { UserdetailprodComponent } from './userdetailprod/userdetailprod.component';
import { UserfooterComponent } from './userfooter/userfooter.component';
import { UserloginformComponent } from './userloginform/userloginform.component';
import { UsersigninformComponent } from './usersigninform/usersigninform.component';

const routes: Routes = [
  { path: 'logina', component: LoginadminComponent },
  { path: 'dashadmin', component: AdmindashboardComponent },
  //{ path: '', redirectTo: 'useracceuil', pathMatch: 'full' },
  { path: 'products', component: ProductsadminComponent },
  { path: 'addproduct', component: AddprodadminComponent },
  { path: 'events', component: EventsadminComponent },
  { path: 'articles', component: ArticlesadminComponent },
  { path: 'addarticle', component: AddarticleadminComponent },
  { path: 'products/modif/:id', component: AdminproductComponent },
  //user part
  { path: 'userproducts', component: UserProductsComponent },
  { path: 'usermenu', component: UserMenuComponent },
  { path: 'useracceuil', component: UserAcceuilComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'footer', component: UserfooterComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'choixconnect', component: UserchoixConnectComponent },
  { path: 'signin', component: UsersigninformComponent },
  { path: 'login', component: UserloginformComponent },
  { path: 'detailproduct', component: UserdetailprodComponent },
  // { path: '', redirectTo: 'useracceuil', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
