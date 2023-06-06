import { Component } from "@angular/core";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})

export class HomeComponent {

    constructor(){}

    public testimonials = [
        '"1 Always a great experience. Always take great care of my clients with each and every inspection."',
        '"2 I would recommend your inspection be conducted by them! Thorough and report submitted in a timely manner!"',
        '"3 I\'m a Realtor and Your Time Home Inspections had great availability and came out quick to inspect and did a great job and had a keen eye. I will be using them again."',
        '"4 James was very professional. He was able to answer all my questions. Very pleased with their services. Would definitely recommend the company."',
        '"5 Dope service. Third time using them."'
    ]

    public i = 0;
    public testimonial = this.testimonials[this.i];


    public cards = [
        { icon: 'access_time', title: 'Fast Delivery', text: 'Weekend inspections available and 24hr or less delivery of inspection reports'},
        { icon: 'attach_money', title: 'Work Smarter', text: 'Online ordering and our use of state-of-the-art equipment will save you time and money' },
        { icon: 'mood', title: 'Licensed and Certified', text: 'We are in good standing with InterNACHI, SABOR, TPREIA, and TREC'}
    ]

    public certifiedList =[
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

    nextTestimonial() {
        if (this.i <= 3) {
            this.i = this.i + 1;
        } else {
            this.i = 0;
        }
        this.testimonial = this.testimonials[this.i];
    }

    previousTestimonial() {
        if (this.i > 0) {
            this.i = this.i - 1;
        } else {
            this.i = 4;
        }
        this.testimonial = this.testimonials[this.i];
    }
}