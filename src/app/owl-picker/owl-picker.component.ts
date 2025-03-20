import { AfterViewInit, Component, ElementRef, OnInit, viewChild, ViewChild } from '@angular/core';
import { OwlDateTimeModule, OwlNativeDateTimeModule, OWL_DATE_TIME_FORMATS, OwlDateTimeInputDirective } from '@danielmoncada/angular-datetime-picker';
import { OwlDayJsDateTimeModule } from '@danielmoncada/angular-datetime-picker-dayjs-adapter';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';

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
    OwlDayJsDateTimeModule,
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule
  ],
  providers: [
    {provide: OWL_DATE_TIME_FORMATS, useValue: MY_DAYJS_FORMATS},
    provideAnimations(),
  ],
  templateUrl: './owl-picker.component.html',
  styleUrl: './owl-picker.component.scss'
})
export class OwlPickerComponent implements AfterViewInit {
  dateControl = new FormControl({ value: null, disabled: true });

  // @ViewChild('dtCodeInput') dtCodeInput!: ElementRef<HTMLInputElement>; //<HTMLInputElement> | ElementRef<unknown> | undefined;

  dtCodeInputS = viewChild<ElementRef<HTMLInputElement>>('dtCodeInput');

  ngAfterViewInit() {
    // ElementRef { nativeElement: <input> }
    console.log("on init", this.dtCodeInputS());
    // this.dtCodeInput.nativeElement.disabled = true;
    const codeInput = this.dtCodeInputS();
    if (codeInput?.nativeElement)
      codeInput.nativeElement.disabled = true;
  }
  // toggleCodeInput() {
  //   this.dtCodeInput.nativeElement.disabled = !this.dtCodeInput.nativeElement.disabled;
  // }
}
