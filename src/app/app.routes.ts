import { Routes } from '@angular/router';
import { RentalManagementComponent } from './page/rental-management/rental-management.component';
import { ItemManagementComponent } from './page/item-management/item-management.component';
import { CustomerManagementComponent } from './page/customer-management/customer-management.component';

export const routes: Routes = [
    {
        path : "rental-management" ,
        component: RentalManagementComponent
    },
    {
        path : "item-management" ,
        component: ItemManagementComponent
    },
    {
        path : "customer-management" ,
        component: CustomerManagementComponent
    }
];
