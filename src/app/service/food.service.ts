import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


interface fooditem {
    title: string;
}
  
interface foodObject {
    results: fooditem[];
}

@Injectable()
export class FoodService {

    apiKey: string = '33fc11d0655c4416bd7df0f4c99cccfb';

    constructor(
        private http: HttpClient
    ) {}


    getFood(paramsArray): Observable<foodObject> {
        let params = new HttpParams().set('apiKey', '33fc11d0655c4416bd7df0f4c99cccfb').set('query', paramsArray);
        return this.http.get<foodObject>('https://api.spoonacular.com/recipes/search', { params: params } );
    }

    getRecipeInformationById(id): Observable<any> {
        return this.http.get<any>('https://api.spoonacular.com/recipes/' +id +'/information?apiKey=33fc11d0655c4416bd7df0f4c99cccfb');
    }

    getWineRecommendation(foodName): Observable<any> {

        let params = new HttpParams().set('apiKey', this.apiKey).set('food', foodName);
        return this.http.get<any>('https://api.spoonacular.com/food/wine/pairing', {params: params});
    }

    getRecipesByIngrediends(ingredients: string[]): Observable<any> {
        let params = new HttpParams().set('apiKey', this.apiKey).set('ingredients', ingredients.join(','));
        return this.http.get<any>('https://api.spoonacular.com/recipes/findByIngredients', {params: params});
    }

    getRecipeNutrition(id: string): Observable<any> {
        let params = new HttpParams().set('apiKey', this.apiKey).set('defaultCss', 'true');
        return this.http.get<any>("https://api.spoonacular.com/recipes/" +id +"/nutritionWidget", { params: params, responseType: "html" as any} );
    }

}