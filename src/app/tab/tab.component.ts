import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  assetPath = "./assets/icons/svg/misc/"

  @Input() active: boolean;

  _icon;
  @Input()
  set icon(val: string) {
    this._icon = this.assetPath + val + '.svg';
  };

  get icon() {
    return this._icon;
  }

  constructor() { }

  ngOnInit() {
  }

}
