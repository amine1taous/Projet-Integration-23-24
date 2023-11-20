import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-eventsadmin',
  templateUrl: './eventsadmin.component.html',
  styleUrls: ['./eventsadmin.component.css'],
})
export class EventsadminComponent implements OnInit {
  products$!: Observable<Event[]>;

  constructor() {}
  ngOnInit(): void {}
}
