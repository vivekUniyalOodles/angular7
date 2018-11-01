import { Component, OnInit } from '@angular/core';
import {GlobalServiceService} from "../global-service.service"


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:GlobalServiceService) { }
  

  // lineChart
  public lineChartData:Array<any> 
  =[
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  public lineChartLabels:Array<any>  = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartType:string = 'bar';
  public pieChartType:string = 'doughnut';
 
  // Pie
  // public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartLabels:string[] ;
  // = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData:number[] ;
  // = [300, 500, 100];
 
  // public randomizeType():void {
  //   this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
  //   this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
  // }
 
  // public chartClicked(e:any):void {
  //   console.log(e);
  // }
 
  // public chartHovered(e:any):void {
  //   console.log(e);
  // }


  ngOnInit() {
    // calling global service function to fetch chart api data
    this.service.getData("chart").subscribe(
      success => {        
         this.pieChartData=success["value"];        
         this.pieChartLabels=success["label"];
      },error => {
        console.log('error=', error);
    });
  }

}
