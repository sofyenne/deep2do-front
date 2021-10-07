import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DhashboardComponent } from './dashboard/dhashboard.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SearchComponent } from './dashboard/search/search.component';
import { ContactComponent } from './contact/contact.component';
import { NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { MostvisitedComponent } from './dashboard/mostvisited/mostvisited.component';
import { CheaperComponent } from './dashboard/cheaper/cheaper.component';
import { SiteComponent } from './dashboard/site/site.component';


import { HomeComponent } from './home/home.component';
import { ImageSliderComponent } from './home/image-slider/image-slider.component';
import { NewlyAddedComponent } from './home/newly-added/newly-added.component';
import { BannerComponent } from './home/banner/banner.component';
import { MostSellingComponent } from './home/most-selling/most-selling.component';
import { BrowseComponent } from './browse/browse.component';
import { DeatilsComponent } from './deatils/deatils.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { ProfilComponent } from './profil/profil.component';
import { UserComponent } from './profil/user/user.component';
import { OrderComponent } from './profil/order/order.component';
import { ChekoutComponent } from './chekout/chekout.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CategoryComponent } from './profil/category/category.component';
import { createComponent } from '@angular/compiler/src/core';
import { CreateComponent } from './profil/product/create/create.component';
import { UpdateComponent } from './profil/product/update/update.component';
import { ListComponent } from './profil/product/list/list.component';
import { MeeComponent } from './profil/mee/mee.component';
import { ProviderComponent } from './provider/provider.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FactureComponent } from './profil/facture/facture.component';
import { FavoriteComponent } from './profil/favorite/favorite.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DhashboardComponent,
    NavComponent,
    FooterComponent,
    NavbarComponent,
    SearchComponent,
    ContactComponent,
    MostvisitedComponent,
    CheaperComponent,
    SiteComponent,
    HomeComponent,
    ImageSliderComponent,
    NewlyAddedComponent,
    BannerComponent,
    MostSellingComponent,
    BrowseComponent,
    DeatilsComponent,
    AboutComponent,
    CartComponent,
    ProfilComponent,
    UserComponent,
    OrderComponent,
    ChekoutComponent,
    CategoryComponent,
    CreateComponent , 
    UpdateComponent,
    ListComponent,
    MeeComponent,
    ProviderComponent,
    FactureComponent,
    FavoriteComponent
   


    

  ],
  imports: [
    Ng2SmartTableModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), NgbModule, 
    NgbPaginationModule, NgbAlertModule,
   
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
