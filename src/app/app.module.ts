
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PatientDefaultPageComponent } from './patient-default-page/patient-default-page.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageNotFoundComponent,
    PatientDefaultPageComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  
    HttpClientModule,
  ],
  providers:[
  
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
