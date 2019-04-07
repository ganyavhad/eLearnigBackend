import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/category', title: 'Category', icon: 'design_app', class: '' },
  { path: '/sub-category', title: 'Subcategory', icon: 'education_atom', class: '' },
  { path: '/user-profile', title: 'User Profile', icon: 'users_single-02', class: '' },
  { path: '/table-list', title: 'Table List', icon: 'design_bullet-list-67', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  };
}
