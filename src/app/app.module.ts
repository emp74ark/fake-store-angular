import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { ItemsComponent } from './components/items/items.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserComponent } from './pages/user/user.component';
import { ItemComponent } from './components/item/item.component';
import { HttpClientModule } from "@angular/common/http";
import { UfoComponent } from './pages/ufo/ufo.component';
import { HomeComponent } from './pages/home/home.component';
import { StoreComponent } from './pages/store/store.component';
import { CartComponent } from './pages/cart/cart.component';
import { AuthComponent } from './pages/auth/auth.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProductComponent } from './pages/product/product.component';

import {HTTP_INTERCEPTORS} from "@angular/common/http";
import { AuthInterceptor } from "./services/http.interceptor";

const AUTH_INTERCEPTOR: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor,
}

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ItemsComponent,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    ItemComponent,
    UfoComponent,
    HomeComponent,
    StoreComponent,
    CartComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AUTH_INTERCEPTOR],
  bootstrap: [AppComponent]
})
export class AppModule {
}
