import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { MaterialsModule } from './material/material-module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PizzaComponent } from './pizza/pizza.component';
import { PizzaDetailsComponent } from './show/pizza-details.component';

import { EncrDecrService } from './services/enc-dec.service';
import { CommonService } from './services/common.service';

const routes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'pizza',  component: PizzaComponent },
  { path: 'pizza-details/:id', component: PizzaDetailsComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PizzaComponent,
    PizzaDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CommonService,EncrDecrService],
  bootstrap: [AppComponent],
  schemas: []
})
export class AppModule { }
