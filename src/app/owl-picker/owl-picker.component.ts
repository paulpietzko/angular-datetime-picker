import { Component } from '@angular/core';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';

@Component({
  selector: 'app-owl-picker',
  imports: [
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ],
  templateUrl: './owl-picker.component.html',
  styleUrl: './owl-picker.component.scss'
})
export class OwlPickerComponent {

}
