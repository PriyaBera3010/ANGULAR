import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EventsHandling';

  temp:any
  print(e:any)
  {
  this.temp=e.target.value
  console.log(e.target.value)
  }  

  keyup:any
  onKeyUp(x:any) { 
  alert("hello");
  }

  keypress:any
  onKeyPress(a:any){
    alert("byy byy");
  }

  keydown:any
  onKeyDown(b:any){
    alert("krisha");
  }
}

