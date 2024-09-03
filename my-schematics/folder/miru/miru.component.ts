import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miru',
  template: '<h1>Hello {{ title }}'
})
export class MiruComponent implements OnInit {
  title = 'Miru';

  constructor() { }

  ngOnInit() { }
}