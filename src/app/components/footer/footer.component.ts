import { Component } from "@angular/core";

@Component({
    selector: 'footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})

export class FooterComponent {
    public socialIcons: any[] = [
        'facebook', 'instagram', 'google', 'youtube', 'linkedin'
    ]
}