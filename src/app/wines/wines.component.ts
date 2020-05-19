import { Component } from '@angular/core';
import { FoodService } from '../service/food.service';

@Component({
  selector: 'wines-component',
  templateUrl: './wines.component.html',
  styleUrls: ['../app.component.css']
})
export class WinesComponent {

  title = 'Foodfinder';
  searchPhrase: string;
  searchResult = null;

  searchForm;

  constructor(
    private http: FoodService
  ) {}

  searchButton() {
    this.http.getWineRecommendation(this.searchPhrase).subscribe(resp => this.searchResult = resp);
  }

  onSubmit(value): void {
    alert("submit");
  }

}
