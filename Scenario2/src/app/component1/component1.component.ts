import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  template: `
            <h1>Collecting names of my friends...</h1><br>
             Enter Your Name:
             <input [(ngModel)] = "name" type="text"><br>
             
            <p>My friend name is...</p>  {{name}}
            `,
  styles: []
})
export class Component1Component implements OnInit {

  public name = "";
  constructor() { }

  ngOnInit() {
  }

}
