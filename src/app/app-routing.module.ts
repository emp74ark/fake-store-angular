import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {StoreComponent} from "./pages/store/store.component";
import {UserComponent} from "./pages/user/user.component";
import {UfoComponent} from "./pages/ufo/ufo.component";
import {CartComponent} from "./pages/cart/cart.component";
import {CanactivateGuard} from "./services/canactivate.guard";
import {AuthComponent} from "./pages/auth/auth.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'store', component: StoreComponent},
  {path: 'cart', component: CartComponent, canActivate: [CanactivateGuard]},
  {path: 'auth', component: AuthComponent},
  {path: 'user', component: UserComponent, canActivate: [CanactivateGuard]},
  {path: '**', component: UfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
