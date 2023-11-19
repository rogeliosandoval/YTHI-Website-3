import { Component } from "@angular/core";

@Component({
    selector: 'about',
    templateUrl: './about.html',
    styleUrls: ['./about.scss']
})

export class About {
    public title: string = '';
    public name: string = '';
    public supportTeam: Array<any> = [
        {name: 'elvia', displayName: 'Elvia Williams'},
        {name: 'kalen', displayName: 'Kalen Bahlman'},
        {name: 'roger', displayName: 'Roger Sandoval'}
    ];

    public inspectors: Array<any> = [
        {name: 'james', displayName: 'James Williams', trec: '21507'},
        {name: 'luis', displayName: 'Luis Vargas', trec: '23535'},
        {name: 'robbie', displayName: 'Robbie Spencer', trec: '23968'}
    ];
}
