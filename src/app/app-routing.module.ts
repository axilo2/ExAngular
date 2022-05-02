import { NgModule } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";
import { OrderContainerComponent } from "./componenti/order-container/order-container.component";
import { UserContainerComponent } from "./componenti/user-container/user-container.component";
import { ErrComponentComponent } from "./error/err-component/err-component.component"

const routes: Routes = [
    { path: 'users', component: UserContainerComponent },
    { path: 'order', component: OrderContainerComponent },
    { path: '', redirectTo: '/users', pathMatch: 'full' },
    { path: '**', component: ErrComponentComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{} 