import { Component, OnInit, Input } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  
  _user
  @Input()
  set user(val) {
    this._user = val;
    this.setActiveTab('name');
  };
  get user() {
    return this._user;
  }

  activeTabName: string;

  label: string;
  value: string;

  tabs = [
    {icon: 'user'},
    {icon: 'email'},
    {icon: 'calendar'},
    {icon: 'map-location'},
    {icon: 'call'},
    {icon: 'locked'}
  ]

  constructor() { }

  ngOnInit() {
  }

  setActiveTab(tabName: string) {
    if (!this.user) {
      return;
    }
    this.activeTabName = tabName;
    switch (tabName) {
      case 'name':
        this.label = 'Hi, My name is';
        this.value = this.user.name.first;
        break;
      case 'email':
        this.label = 'My email is';
        this.value = this.user.email;
        break;
      case 'birthday':
        this.label = 'My birthday is';
        this.value = formatDate(this.user.dob.date, 'd/M/yyyy', 'en');
        break;
      case 'address':
        this.label = 'My address is';
        this.value = this.user.location.street;
        break;
      case 'phone':
        this.label = 'My phone number is';
        this.value = this.user.phone;
        break;
      case 'password':
        this.label = 'My password is';
        this.value = this.user.login.password;
        break;
    
      default:
        break;
    }
  }

}
