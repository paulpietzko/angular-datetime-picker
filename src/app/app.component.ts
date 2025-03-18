import { Component } from '@angular/core';
import { DatetimeComponent } from "./datetime/datetime.component";

@Component({
  selector: 'app-root',
  imports: [DatetimeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-datetime-picker';
}
