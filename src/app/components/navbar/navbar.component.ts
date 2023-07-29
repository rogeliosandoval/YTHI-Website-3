import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
    public showNav: any;
    public sticky = false;

    subNav = [
        { icon: 'phone', info: '(210) 367-2945' },
        { icon: 'email', info: 'info@yourtimehomeinspections.com' },
        { icon: 'star', info: 'TREC#21507 Inspector James Williams' },
        { icon: 'star', info: 'TPCL #877175' }
    ]

    navLinks = [
        { name: 'Home', route: 'home' },
        { name: 'About', route: 'about' },
        { name: 'Services', route: 'services' },
        { name: 'Our Reviews', route: 'reviews' },
        { name: 'Contact', route: 'contact' },
        { name: 'Careers', route: 'careers' },
        { name: 'Our Blog', route: 'blog' }
    ]

    @HostListener('window:keydown.enter', ['$event']) onClick($event:any) {
        console.log(this.sticky);
    }

    @HostListener('window:scroll', ['$event']) onScroll($event:any) {
        if (window.scrollY >= 50) {
            this.sticky = true;
        } else {
            this.sticky = false;
        }
    }

    public hide(): void {
        setTimeout(() => {
            this.showNav = null;
        }, 300)
    }
}