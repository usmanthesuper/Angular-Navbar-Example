import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-navbar';
  navItemsData = [
    {
      isActive: true,
      hasDropdown: true,
      label: "App Name",
      dropdownItems: [{label:"ABC"}, {label:"DEF"}]
    }
  ]
}
