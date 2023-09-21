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
      isActive: false,
      hasDropdown: false,
      label: "App Name",
      dropdownItems: ["ABC", "DEF"]
    }
  ]
}
