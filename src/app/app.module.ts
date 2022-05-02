import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserContainerComponent } from './componenti/user-container/user-container.component';
import { OrderContainerComponent } from './componenti/order-container/order-container.component';
import { UserListComponent } from './componenti/user-list/user-list.component';
import { UserDetailComponent } from './componenti/user-detail/user-detail.component';
import { UserSingleComponent } from './componenti/user-single/user-single.component';
import { OrderListComponent } from './componenti/order-list/order-list.component';
import { OrderSingleComponent } from './componenti/order-single/order-single.component';
import { OrderDetailComponent } from './componenti/order-detail/order-detail.component';
import { NavbarComponent } from './componenti/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrComponentComponent } from './error/err-component/err-component.component';

@NgModule({
  declarations: [
    AppComponent,
    UserContainerComponent,
    OrderContainerComponent,
    UserListComponent,
    UserDetailComponent,
    UserSingleComponent,
    OrderListComponent,
    OrderSingleComponent,
    OrderDetailComponent,
    NavbarComponent,
    ErrComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
