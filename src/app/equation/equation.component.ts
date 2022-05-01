import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CustomValidators } from '../custom-validators';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css'],
})
export class EquationComponent implements OnInit {
  public mathForm = new FormGroup(
    {
      a: new FormControl(this.randomNumber()),
      b: new FormControl(this.randomNumber()),
      answer: new FormControl(''),
    },
    [CustomValidators.addition('answer', 'a', 'b')]
  );
  constructor() {}

  get a() {
    return this.mathForm.value.a;
  }

  get b() {
    return this.mathForm.value.b;
  }

  ngOnInit() {
    this.mathForm.statusChanges.subscribe((value) => console.log(value));
  }

  randomNumber() {
    return Math.floor(Math.random() * 10);
  }
}

//statusChanges is an observable
