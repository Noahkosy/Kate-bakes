import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SeasonalProductListComponent } from './components/seasonal-product-list/seasonal-product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SocialComponent } from './components/social/social.component';
import { ProductItemComponent } from './components/product-list/product-item/product-item.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import { SeasonalProductItemComponent } from './components/seasonal-product-list/seasonal-product-item/seasonal-product-item.component';
import { ContactFormComponent } from './components/cart/contact-form/contact-form.component';
import { ContactService } from './services/contact.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    SeasonalProductListComponent,
    ProductDetailsComponent,
    CartComponent,
    AboutMeComponent,
    SocialComponent,
    ProductItemComponent,
    CartItemComponent,
    SeasonalProductItemComponent,
    ContactFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ CookieService,ContactService],
  bootstrap: [ AppComponent ],

})
export class AppModule { }
