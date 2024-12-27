import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ResumeBuilder';

  stu:any = {
    projects:[]
  }
  tempProj = {};

  datafill(e:any){
    this.stu = {...this.stu,[e.target.name]:e.target.value}
    console.log(this.stu);
  }

  makeProj(e:any){
    this.tempProj = {...this.tempProj,[e.target.name]:e.target.value}
    console.log(this.tempProj);
  }

  addProject(){
    this.stu.projects.push(this.tempProj);
    console.log(this.stu)
  }
}
