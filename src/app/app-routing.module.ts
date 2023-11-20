import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddarticleadminComponent } from './addarticleadmin/addarticleadmin.component';
import { AddprodadminComponent } from './addprodadmin/addprodadmin.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { ArticlesadminComponent } from './articlesadmin/articlesadmin.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EventsadminComponent } from './eventsadmin/eventsadmin.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { PanierComponent } from './panier/panier.component';
import { ProductsadminComponent } from './productsadmin/productsadmin.component';
import { UserAcceuilComponent } from './user-acceuil/user-acceuil.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { UserProductsComponent } from './user-products/user-products.component';
import { UserfooterComponent } from './userfooter/userfooter.component';

const routes: Routes = [
  { path: 'loginadmin', component: LoginadminComponent },
  { path: 'dashadmin', component: AdmindashComponent },
  { path: '', redirectTo: 'useracceuil', pathMatch: 'full' },
  { path: 'products', component: ProductsadminComponent },
  { path: 'addproduct', component: AddprodadminComponent },
  { path: 'events', component: EventsadminComponent },
  { path: 'articles', component: ArticlesadminComponent },
  { path: 'addarticle', component: AddarticleadminComponent },
  //user part
  { path: 'userproducts', component: UserProductsComponent },
  { path: 'usermenu', component: UserMenuComponent },
  { path: 'useracceuil', component: UserAcceuilComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'footer', component: UserfooterComponent },
  { path: 'panier', component: PanierComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
