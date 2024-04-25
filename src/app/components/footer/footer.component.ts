import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faFacebookF, faTumblr, faBehance, faYoutube, faTwitter, faDribbble, faGooglePlus} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  faFacebookF = faFacebookF;
  faTumblr = faTumblr;
  faBehance = faBehance;
  faYoutube = faYoutube;
  faTwitter = faTwitter;
  faDribbble = faDribbble;
  faGooglePlus = faGooglePlus;
}
