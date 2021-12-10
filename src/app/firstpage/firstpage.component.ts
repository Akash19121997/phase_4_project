import { Component, OnInit } from '@angular/core';
import QuestionData from '../Question.json';
import { Router } from '@angular/router';
interface Question {
  id:number;
  qusname:String;
}
@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})

export class FirstpageComponent implements OnInit {
  cname:String="";
  constructor(private router:Router) { }
  text:String="";
  ngOnInit(): void {
  }
  email:String="";
 ans1:string="";
 ans2:string="";
 ans3:string="";
 ans4:string="";
 ans5:string="";
  questions:Question[]=QuestionData;
  ans:any;
  onSubmit(value:any){
    console.log(value);
    this.ans1=value.ans1;
    this.ans2=value.ans2;
    this.ans3=value.ans3;
    this.ans4=value.ans4;
    this.ans5=value.ans5;
    this.open=1;
    this.cname=value.cname;
    this.email=value.email;
  }
  
  goToSecondpage(){
    console.log(this.ans);
    this.router.navigate(['/reviewpage']);
  }

  answerspage():any{
    return this.ans;
  }



  open:number=0;
  reviewpagetoback(){
    this.open=0;
    console.log(this.open);
  }

  
  result=0;
  submitpage(){
    this.open=2;
    if(this.ans1=="DELHI"){
      this.result=this.result+1;
    }
    if(this.ans2=="PEACOCK"){
      this.result=this.result+1;
    }
    if(this.ans3=="JAGAN"){
      this.result=this.result+1;
    }
    if(this.ans4=="MODI"){
      this.result=this.result+1;
    }
    if(this.ans5=="TIGER"){
      this.result=this.result+1;
    }
  }
}
