import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component1',
  template: `
  <h1>Collecting names of my friends...</h1>
  Your Name: <input #userInput type="text" name="name"><br>
  <button (click) = "onClick(userInput.value)">submit</button>`,
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public name = "";

onClick(value)
{
  console.log(value);
}
}
