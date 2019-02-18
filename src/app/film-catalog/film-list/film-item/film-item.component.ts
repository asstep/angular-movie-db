import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-film-item',
    templateUrl: './film-item.component.html',
    styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {
    condition:boolean = false;
    @Input() filmItem: string;
    @Output() toFavorite = new EventEmitter();

    constructor() {
    }

    // Adding movie to favorite
    addFavorite($event) {
        this.condition = $event.target.classList.contains('active');
        if(this.condition) {$event.target.classList.remove('active')}
        else {$event.target.classList.add('active')}
        this.toFavorite.emit(!this.condition);
    }

    ngOnInit() {
    }

}
