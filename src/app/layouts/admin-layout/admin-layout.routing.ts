import { Routes } from '@angular/router';

import { CategoryComponent } from '../../category/category.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { PlaylistComponent } from '../../playlist/playlist.component';
import { SubcategoryComponent } from '../../subcategory/subcategory.component'
import { from } from 'rxjs';

export const AdminLayoutRoutes: Routes = [
    { path: 'category', component: CategoryComponent },
    { path: 'sub-category', component: SubcategoryComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'playlist', component: PlaylistComponent },
];
