import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usersigninform',
  templateUrl: './usersigninform.component.html',
  styleUrls: ['./usersigninform.component.css'],
})
export class UsersigninformComponent implements OnInit {
  constructor() {}

  test: boolean = true;

  se() {
    this.test = false;
  }
  ngOnInit(): void {
    this.test = true;
  }
}
