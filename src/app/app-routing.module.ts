import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './film-catalog/main/main.component';
import {FilmListComponent} from './film-catalog/film-list/film-list.component';


const routes: Routes = [
    {path: "", pathMatch: "full", redirectTo: "main"},
    {path: "main", component: MainComponent},
    {path: "films", component: FilmListComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
