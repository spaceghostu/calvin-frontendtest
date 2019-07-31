import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { TabComponent } from './tab/tab.component';



@NgModule({
  declarations: [
    TabsComponent,
    TabComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TabsComponent,
  ]
})
export class TabsModule { }
