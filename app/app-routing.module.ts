import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SocialComponent } from './components/social/social.component';
import { SeasonalProductListComponent } from './components/seasonal-product-list/seasonal-product-list.component'


const routes: Routes = [
  { path: '',redirectTo: '/productlist', pathMatch: 'full'},
  { path: 'productlist', component: ProductListComponent },
  { path: 'productdetails/:id', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'aboutme', component: AboutMeComponent },
  { path: 'social', component: SocialComponent},
  { path: 'seasonal', component: SeasonalProductListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
