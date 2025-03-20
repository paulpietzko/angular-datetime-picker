import { Component } from '@angular/core';
import { DatetimeComponent } from "./datetime/datetime.component";
import { OwlPickerComponent } from "./owl-picker/owl-picker.component";

@Component({
  selector: 'app-root',
  imports: [DatetimeComponent, OwlPickerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-datetime-picker';
}
