import { Component, OnInit } from '@angular/core';
import { FoodService } from '../service/food.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'food-details-component',
    templateUrl: './food-details.component.html',
})
export class FoodDetailsComponent {

    food: string;
    information = null;
    nutrition= null;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private http: FoodService,
        private sanitizer: DomSanitizer
    ) {}

    ngOnInit() {
        this.route.paramMap.subscribe( paramMap => { this.food = paramMap.get('id')});
        this.http.getRecipeInformationById(this.food).subscribe( data => this.information = data);
        this.getNutritionDetails();
    }

    getNutritionDetails() {
        this.http.getRecipeNutrition(this.food).subscribe(resp => this.nutrition = this.sanitizer.bypassSecurityTrustHtml(resp));
    }

}
