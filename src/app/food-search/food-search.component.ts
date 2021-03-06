import { Component } from '@angular/core';
import { FoodService } from '../service/food.service';

interface fooditem {
    title: string;
}
  
interface foodObject {
    results: fooditem[];
    totalResults?;
}

@Component({
    selector: 'food-search-component',
    templateUrl: './food-search.component.html',
    styleUrls: ['../app.component.css']
})
export class FoodSearchComponent {


    constructor(
        private foodService: FoodService
    ) {}

    title = 'Foodfinder';
    searchPhrase: string;
    foods: foodObject = null;

    searchButton() {
        this.foodService.getFood(this.searchPhrase).subscribe(resp => this.foods = resp);
        //alert("search");
    }

}
