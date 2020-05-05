import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';

interface fooditem {
    title: string;
}
  
interface foodObject {
    results: fooditem[];
}

@Injectable()
export class FoodService {

    title = 'testd';

    constructor(
        private http: HttpClient
    ) {}


    getFood(paramsArray): Observable<foodObject> {
        //this.http.get<foodObject>('https://api.spoonacular.com/recipes/search?apiKey=33fc11d0655c4416bd7df0f4c99cccfb&query=burger').subscribe( resp => console.log(resp.results[1].title));

        //let par = new URLSearchParams;
        //par.append("apiKey", "33fc11d0655c4416bd7df0f4c99cccfb&query=burger");

        let foodObjectDto: foodObject;

        let params2 = new HttpParams().set('apiKey', '33fc11d0655c4416bd7df0f4c99cccfb').set('query', paramsArray);

        //this.http.get<foodObject>('https://api.spoonacular.com/recipes/search', { params: params2 }
        //).subscribe( resp => foodObjectDto = resp);

        return this.http.get<foodObject>('https://api.spoonacular.com/recipes/search', { params: params2 } );

        //return foodObjectDto;
    }
}