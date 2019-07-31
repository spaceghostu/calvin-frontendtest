import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  
  @Input() user;

  label = 'Hi, My name is' //TODO change
  value = 'Calvin' //TODO change

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

}
