import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() appName: string = '';
  @Input() navItems: any[] = []; // Replace 'any[]' with the actual type for your navigation items.
  @Input() userName: string = '';
  @Input() backgroundColor: string = 'blue';
  @Input() userHasPermission: boolean = false;
}
