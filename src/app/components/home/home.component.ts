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

    certifiedList =[
        'Safe Practices for the Home Inspector course.',
        '25 Standards Every Inspector Should Know course.',
        'Residential Plumbing Inspection course.',
        'Roof Inspection course.',
        'HVAC Inspection course.',
        'Exterior Inspection course.',
        'Attic, Insulation, Ventilation and Interior Inspection course.',
        'Deck Inspection course.',
        'Moisture Intrusion Inspection course.',
        'Inspecting Foundation Walls and Piers course.'
    ]
}