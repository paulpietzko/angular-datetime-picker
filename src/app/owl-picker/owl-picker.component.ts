import { Component } from '@angular/core';
import { OwlDateTimeModule, OwlNativeDateTimeModule, OWL_DATE_TIME_FORMATS } from '@danielmoncada/angular-datetime-picker';
import { OwlDayJsDateTimeModule } from '@danielmoncada/angular-datetime-picker-dayjs-adapter';
import { provideAnimations } from '@angular/platform-browser/animations';


// See the Day.js docs for the meaning of these formats:
// https://day.js.org/docs/en/display/format
export const MY_DAYJS_FORMATS = {
  parseInput: 'l LT',
  fullPickerInput: 'l LT',
  datePickerInput: 'l',
  timePickerInput: 'LT',
  monthYearLabel: 'MMM YYYY',
  dateA11yLabel: 'LL',
  monthYearA11yLabel: 'MMMM YYYY',
};

@Component({
  selector: 'app-owl-picker',
  imports: [
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    OwlDateTimeModule, OwlDayJsDateTimeModule
  ],
  providers: [
    {provide: OWL_DATE_TIME_FORMATS, useValue: MY_DAYJS_FORMATS},
    provideAnimations(),
  ],
  templateUrl: './owl-picker.component.html',
  styleUrl: './owl-picker.component.scss'
})
export class OwlPickerComponent {

}
