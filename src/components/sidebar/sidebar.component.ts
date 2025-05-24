import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isExpanded = false;

 menuItems = [
  { icon: 'dashboard', label: 'Dashboard', path: '/dashboard' },
  { icon: 'person', label: 'Profile', path: '/profile' },
  { icon: 'local_hospital', label: 'Medical Analysis', path: '/analysis' }
];

}
