import { Component } from "@angular/core";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})

export class HomeComponent {
    cards = [
        { icon: 'access_time', title: 'Fast Delivery', text: 'Weekend inspections available and 24hr or less delivery of inspection reports'},
        { icon: 'attach_money', title: 'Work Smarter', text: 'Online ordering and our use of state-of-the-art equipment will save you time and money' },
        { icon: 'mood', title: 'Licensed and Certified', text: 'We are in good standing with InterNACHI, SABOR, TPREIA, and TREC'}
    ]
}