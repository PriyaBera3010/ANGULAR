import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myfirstapp';

  d = new Date();

  spi = 8.3;

  myvalue = 'Hello!!';

  isClickable = true;

  stuData = {
    Name : 'ABC',
    Sem : 4,
    Enrollment : 21020201000
  }

  handleClicking(){
    setInterval(()=>{
      this.isClickable = !this.isClickable;
    },100)
  }

  ngOnInit(){
    this.handleClicking();
  }
  
 inputvalue = ""
 displayDetail(e : any){
  this.inputvalue = e.target.value;
  console.log(this.inputvalue)
 }
  
}
