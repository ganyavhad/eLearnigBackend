import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { CategoryComponent } from '../../category/category.component';
import { SubcategoryComponent } from '../../subcategory/subcategory.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { PlaylistComponent } from '../../playlist/playlist.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ChartsModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    CategoryComponent,
    UserProfileComponent,
    PlaylistComponent,
    SubcategoryComponent
  ]
})

export class AdminLayoutModule { }
