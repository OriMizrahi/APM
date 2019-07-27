import { Component, OnChanges, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './Star.component.html',
    styleUrls: ['./Star.component.css'] 
})

export class StarComponent {
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = 
    new EventEmitter<string>();
    

    ngOnChanges() : void {
        this.starWidth = this.rating * 75 / 5;
    }

    onClick() : void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}