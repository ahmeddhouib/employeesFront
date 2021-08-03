import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule} from "ng2-search-filter";
import { NgxPaginationModule} from "ngx-pagination";
// import { Ng2OrderModule } from 'ng2-order-pipe';
import { OrderModule } from 'ngx-order-pipe';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, Ng2SearchPipeModule, FormsModule, NgxPaginationModule, OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
