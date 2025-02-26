import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.scss',
})
export class CalcComponent {

  calcForm: FormGroup;
  result: number = 0;

  constructor(private formBuilder: FormBuilder) {
    this.calcForm = this.formBuilder.group({
      number1: '',
      number2: '',
    });
  }

  onSubmit(): void {
    const number1 = Number(this.calcForm.get('number1')?.value);
    const number2 = Number(this.calcForm.get('number2')?.value);
    this.result = number1 + number2;
  }
}