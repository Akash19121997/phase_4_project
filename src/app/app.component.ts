import { Component } from '@angular/core';
import QuestionData from './Question.json';
import { Router } from '@angular/router';
interface Question {
  id:number;
  qusname:String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router){
    
  }
  title = 'exams'
  Question:String[]=["","","","",""];
  questions:Question[]=QuestionData;

  onSubmit(value:any){
    console.log(value);
    this.goToSecondpage();
  }
  goToSecondpage(){
    this.router.navigate(['/reviewpage']);
  }
}
