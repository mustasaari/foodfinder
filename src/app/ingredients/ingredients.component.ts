import { Component } from '@angular/core';
import { FoodService } from '../service/food.service';

interface fooditem {
    title: string;
}
  
interface foodObject {
    results: fooditem[];
}

@Component({
    templateUrl: './ingredients.component.html',
    styleUrls: ['../app.component.css']
})
export class IngredientsComponent {

    ingredient: string;
    ingredients: string[] = [];
    resultList;

    constructor(
        private foodService: FoodService
    ) {}

    addIngredient(): void {
        if (this.ingredient.length) {
            this.ingredients.push(this.ingredient);
            this.ingredient = "";
        }
    }

    searchButton() {
        this.foodService.getRecipesByIngrediends(this.ingredients).subscribe(resp => this.resultList = resp);
    }

    removeIngredient(ingredient: string) {
        //alert(ingredient);
        this.ingredients = this.ingredients.filter( i => i !== ingredient);
    }
}
