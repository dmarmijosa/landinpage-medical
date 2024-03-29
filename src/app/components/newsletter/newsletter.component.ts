import {AfterViewInit, Component} from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [],
  templateUrl: './newsletter.component.html',
  styles: ``
})
export class NewsletterComponent implements AfterViewInit{
  ngAfterViewInit() {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '60px',
      duration: 900,
      delay: 600
    });
    sr.reveal('.newsletter');
    sr.reveal('.newsletter__container');
  }
}
