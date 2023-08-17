import { Component } from "@angular/core";

@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})

export class AboutComponent {
    public supportTeam: Array<any> = [
        {name: 'elvia', displayName: 'Elvia Williams'},
        {name: 'kalen', displayName: 'Kalen Bahlman'},
        {name: 'roger', displayName: 'Roger Sandoval'}
    ]

    public inspectors: Array<any> = [
        {name: 'james', displayName: 'James Williams'},
        {name: 'luis', displayName: 'Luis Vargas'},
        {name: 'robbie', displayName: 'Robbie Spencer'}
    ]

    public animation: Array<any> = []

    public test(): void {
        console.log('this is a test')
    }
}