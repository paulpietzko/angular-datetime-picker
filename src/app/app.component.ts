import { AfterViewInit, Component, effect, ElementRef, OnInit, viewChild, ViewChild } from '@angular/core';
import { OwlDateTimeModule, OwlNativeDateTimeModule, OWL_DATE_TIME_FORMATS, OwlDateTimeInputDirective } from '@danielmoncada/angular-datetime-picker';
import { OwlDayJsDateTimeModule } from '@danielmoncada/angular-datetime-picker-dayjs-adapter';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';;

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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    OwlDayJsDateTimeModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [
    {provide: OWL_DATE_TIME_FORMATS, useValue: MY_DAYJS_FORMATS},
    provideAnimations(),
  ],
})
export class AppComponent {
  dateControl = new FormControl({ value: null, disabled: true });

  dtCodeInputSig = viewChild<ElementRef<HTMLInputElement>>('dtCodeInput');


  ngAfterViewInit() {
    console.log("on init", this.dtCodeInputSig());
    const codeInput = this.dtCodeInputSig();
    if (codeInput?.nativeElement)
      codeInput.nativeElement.disabled = true;
  }
}
