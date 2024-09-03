import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miru2',
  template: '<h1>Hello {{ title }}'
})
export class Miru2Component implements OnInit {
  title = 'Miru2';

  constructor() { }

  ngOnInit() { }
}