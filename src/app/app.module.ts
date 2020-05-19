import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FoodService } from './service/food.service';

import { AppComponent } from './app.component';
import { FoodSearchComponent } from './food-search/food-search.component';
import { NavigationComponent } from './navigation/navigation.component';
import { WinesComponent } from './wines/wines.component';
import { FoodDetailsComponent } from './food-search/food-details.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { MainPageComponent } from './mainpage/mainpage.component';

const appRoutes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'foodsearch', component: FoodSearchComponent },
  { path: 'wines', component: WinesComponent },
  { path: 'fooddetails/:id', component: FoodDetailsComponent},
  { path: 'ingredients', component: IngredientsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FoodSearchComponent,
    NavigationComponent,
    WinesComponent,
    FoodDetailsComponent,
    MainPageComponent,
    IngredientsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot( appRoutes, {enableTracing: true})
  ],
  providers: [
    FoodService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
