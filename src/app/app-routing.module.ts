import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BrowseComponent } from './browse/browse.component';
import { CartComponent } from './cart/cart.component';
import { ChekoutComponent } from './chekout/chekout.component';
import { ContactComponent } from './contact/contact.component';
import { CheaperComponent } from './dashboard/cheaper/cheaper.component';
import { DhashboardComponent } from './dashboard/dhashboard.component';
import { MostvisitedComponent } from './dashboard/mostvisited/mostvisited.component';
import { SearchComponent } from './dashboard/search/search.component';
import { SiteComponent } from './dashboard/site/site.component';
import { DeatilsComponent } from './deatils/deatils.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './profil/category/category.component';
import { FactureComponent } from './profil/facture/facture.component';
import { FavoriteComponent } from './profil/favorite/favorite.component';
import { MeeComponent } from './profil/mee/mee.component';

import { OrderComponent } from './profil/order/order.component';
import { CreateComponent } from './profil/product/create/create.component';
import { ListComponent } from './profil/product/list/list.component';
import { UpdateComponent } from './profil/product/update/update.component';
import { ProfilComponent } from './profil/profil.component';
import { UserComponent } from './profil/user/user.component';
import { ProviderComponent } from './provider/provider.component';





import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './services/AuthG';

const routes: Routes = [
  { path : 'login' , component : LoginComponent},
  { path : 'checkout' , component : ChekoutComponent ,canActivate: [AuthGuard] ,  data: {
    Role: ['user']
  }},
  { path : 'profile' , component : ProfilComponent , children:[
    {path : 'facture/:id' , component : FactureComponent},
    { path : 'user'  , component : UserComponent , data: {
      Role: ['admin']
    } },
    { path : 'order'  , component : OrderComponent},
    { path : 'favorite'  , component : FavoriteComponent},
    { path : 'category'  , component : CategoryComponent , data: {
      Role: ['admin']
    }},
    { path : 'list'  , component : ListComponent},
    { path : 'update/:id'  , component : UpdateComponent},
    { path : 'create'  , component : CreateComponent},
    { path : 'mee'  , component : MeeComponent},
  ] ,  canActivate: [AuthGuard] },
  { path : '' , component : HomeComponent},
  { path : 'provider' , component : ProviderComponent},
  { path : 'cart' , component : CartComponent},
  { path : 'contact' , component : ContactComponent},
  { path : 'About' , component : AboutComponent},
  { path : 'details/:id' , component : DeatilsComponent},
  { path : 'browse' , component : BrowseComponent},
  { path : 'register' , component : RegisterComponent},
  { path : 'dhash' ,  component : DhashboardComponent , children : [

    { path : 'search'  , component : SearchComponent},
    { path : 'mostvisited'  , component : MostvisitedComponent},
    { path : 'site'  , component : SiteComponent},
    { path : 'cheaper'  , component : CheaperComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
