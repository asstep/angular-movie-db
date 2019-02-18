import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainComponent} from './main/main.component';
import {FilmListComponent} from './film-list/film-list.component';
import {FilmItemComponent} from './film-list/film-item/film-item.component';

import {FormsModule} from '@angular/forms';
import {DetailsComponent} from './details/details.component';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatCardModule,
        MatButtonModule,
        MatGridListModule,
        MatTabsModule,
        MatToolbarModule,
        MatSelectModule,
        MatInputModule,
    ],
    declarations: [
        MainComponent,
        DetailsComponent,
        FilmListComponent,
        FilmItemComponent
    ]
})
export class FilmCatalogModule {
}
