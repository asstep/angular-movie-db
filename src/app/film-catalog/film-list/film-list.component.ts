import {Component, Input, OnInit} from '@angular/core';
import {FilmService} from '../film.service';

@Component({
    selector: 'app-film-list',
    templateUrl: './film-list.component.html',
    styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
    countFavoriteFilms:number = 0;
    selectedSortBy:string;
    offsetFilms:number = 0;
    countUpload:number = 3;
    filmsArray = [];

    constructor(private filmList: FilmService) {
    }

    // Sorting methods
    sortArrayASC(array) {
        array.sort(function (a,b) {
            if(a.name > b.name) {return 1;}
            else if (a.name < b.name) {return -1;}
            else {return 0;}
        });
        return array;
    }
    sortArrayDESC(array) {
        array.sort(function (a,b) {
            if(a.name < b.name) {return 1;}
            else if (a.name > b.name) {return -1;}
            else {return 0;}
        });
        return array;
    }

    // Counter favorites movies
    countFavorite($event) {
        ($event) ? this.countFavoriteFilms++ : this.countFavoriteFilms--;
    }

    // Change sorting type
    changeFilmSort(data) {
        if(data === "ASC") {this.sortArrayASC(this.filmsArray)}
        if(data === "DESC") {this.sortArrayDESC(this.filmsArray)}
    }

    // Load more movies
    loadMore() {
        this.countFavoriteFilms = 0;
        this.offsetFilms += 3;
        this.countUpload += 3;
        this.filmsArray = this.filmsArray.concat(this.filmList.getFilms(this.offsetFilms,this.countUpload));
        this.filmsArray.forEach(function (item) {
            (item.isFavorite) ? this.countFavorite(item.isFavorite) : '';
        }, this)
    }

    // Find films by name
    findMovieByName($event) {
        ($event.target.value.length > 1) ?
            this.filmsArray = this.filmList.getFimsByName($event.target.value) :            //search by name
            this.filmsArray = this.filmList.getFilms(0,this.countUpload);    //set default
    }

    ngOnInit() {
        this.filmsArray = this.filmList.getFilms(this.offsetFilms,this.countUpload);
        this.filmsArray.forEach(function (item) {
            (item.isFavorite) ? this.countFavorite(item.isFavorite) : '';
        }, this)
    }

}
