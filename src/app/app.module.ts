import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FoodService } from './service/food.service';

import { AppComponent } from './app.component';
import { FoodSearchComponent } from './food-search/food-search.component';
import { NavigationComponent } from './navigation/navigation.component';
import { WinesComponent } from './wines/wines.component';

const appRoutes: Routes = [
  { path: 'foodsearch', component: FoodSearchComponent },
  { path: 'wines', component: WinesComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    FoodSearchComponent,
    NavigationComponent,
    WinesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot( appRoutes, {enableTracing: true})
  ],
  providers: [
    FoodService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
