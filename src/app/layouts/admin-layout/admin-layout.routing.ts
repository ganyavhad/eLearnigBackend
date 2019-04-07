import { Routes } from '@angular/router';

import { CategoryComponent } from '../../category/category.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { SubcategoryComponent } from '../../subcategory/subcategory.component'
import { from } from 'rxjs';

export const AdminLayoutRoutes: Routes = [
    { path: 'category', component: CategoryComponent },
    { path: 'sub-category', component: SubcategoryComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'table-list', component: TableListComponent },
];
