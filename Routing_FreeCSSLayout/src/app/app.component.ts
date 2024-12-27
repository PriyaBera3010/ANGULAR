import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { Sidebar1Component } from './sidebar1/sidebar1.component';
import { Sidebar2Component } from './sidebar2/sidebar2.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent,Sidebar1Component,Sidebar2Component,MaincontentComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Routing_FreeCSSLayout';
}
