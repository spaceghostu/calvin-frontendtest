import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  assetPath = "./assets/icons/svg/misc/"

  _icon;
  @Input()
  set icon(val: string) {
    this._icon = this.assetPath + val + '.svg';
    console.log(val);
  };

  get icon() {
    return this._icon;
  }

  constructor() { }

  ngOnInit() {
  }

}
