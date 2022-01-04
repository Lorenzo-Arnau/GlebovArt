import { AfterViewInit, Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {
  title = 'Glebovart';
  homeLink:any;
  contactsLink:any;
  portfolioLink:any;

  constructor(private router: Router){
    setTimeout(() => {
      this.homeLink = document.getElementsByClassName('home-link')[0];
      this.contactsLink = document.getElementsByClassName('contacts-link')[0];
      this.portfolioLink = document.getElementsByClassName('portfolio-link')[0];
    }, 1);
}

  ngDoCheck(): void {
    if(this.homeLink && this.contactsLink && this.portfolioLink){
      switch (this.router.url) {
        case '/':
          this.homeLink.setAttribute('style','border-bottom: 1px solid gold')
          this.contactsLink.setAttribute('style','border-bottom: none')
          this.portfolioLink.setAttribute('style','border-bottom: none')
          break;
        case '/contacts':
          this.homeLink.setAttribute('style','border-bottom: none')
          this.contactsLink.setAttribute('style','border-bottom: 1px solid gold')
          this.portfolioLink.setAttribute('style','border-bottom: none')
          break;
        case '/portfolio':
          this.homeLink.setAttribute('style','border-bottom: none')
          this.contactsLink.setAttribute('style','border-bottom: none')
          this.portfolioLink.setAttribute('style','border-bottom: 1px solid gold')
          break;

        default:
          break;
      }
    }
  }
  return(){
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
