import { Component } from '@angular/core';
import { NavheaderComponent } from './navheader/navheader.component';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet,Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavheaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AbsoluteBrokingUI';


   constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0, behavior: 'smooth' });  // smooth scroll to top
      }
    });
  }
}
