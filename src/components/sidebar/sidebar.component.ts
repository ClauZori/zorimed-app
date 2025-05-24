import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [
    SharedModule
  ]
})
export class SidebarComponent {
  isExpanded = false;

 menuItems = [
  { icon: 'dashboard', label: 'Dashboard', path: '/dashboard' },
  { icon: 'person', label: 'Profile', path: '/profile' },
  { icon: 'local_hospital', label: 'Medical Analysis', path: '/analysis' }
];

}
