import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  @Input() people;

  constructor() { }

  ngOnInit() {}

}
