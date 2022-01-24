
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserdataComponent } from './form/userdata/userdata.component';
import { HomeComponent } from './main/home/home.component';
import { FormsModule, FormGroup, FormControl} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Auth/login/login.component';
import { RegComponent } from './Auth/reg/reg.component';

@NgModule({
  declarations: [
    AppComponent,
    UserdataComponent,
    HomeComponent,
    LoginComponent,
    RegComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
