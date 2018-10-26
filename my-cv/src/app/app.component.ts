import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  h1Class = "table table-sm";

  name = 'Greg Doud';
  address = '4900 Parkway Dr.';
  city = 'Mason';
  state = 'OH';
  zip = '45040';
  goals = 'Looking for a job in the software development training area';
}
