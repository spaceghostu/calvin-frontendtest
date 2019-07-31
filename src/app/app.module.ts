import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { TabsModule } from './tabs/tabs.module';
import { TabComponent } from './tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TabComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
