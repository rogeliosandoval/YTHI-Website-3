import { Component } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { GuaranteeDialog } from "src/app/dialogs/guarantee/guarantee.component";

@Component({
    selector: 'about',
    templateUrl: './about.html',
    styleUrls: ['./about.scss']
})

export class About {

    constructor(
        private matDialog: MatDialog
    ){}
    public title: string = '';
    public name: string = '';
    public supportTeam: Array<any> = [
        {name: 'elvia', displayName: 'Elvia Williams'},
        {name: 'kalen', displayName: 'Kalen Bahlman'},
        {name: 'roger', displayName: 'Roger Sandoval'}
    ]

    public inspectors: Array<any> = [
        {name: 'james', displayName: 'James Williams', trec: '21507'},
        {name: 'luis', displayName: 'Luis Vargas', trec: '23535'},
        {name: 'robbie', displayName: 'Robbie Spencer', trec: '23968'}
    ]

    public openGuarantee(): void {
        this.matDialog.open(GuaranteeDialog);
    }
}
