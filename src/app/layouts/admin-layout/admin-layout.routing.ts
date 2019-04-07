import { Routes } from '@angular/router';

import { CategoryComponent } from '../../category/category.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { IconsComponent } from '../../icons/icons.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'category', component: CategoryComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'table-list', component: TableListComponent },
    { path: 'icons', component: IconsComponent }
];
