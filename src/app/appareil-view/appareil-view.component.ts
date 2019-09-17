import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {
  title = 'my first project ';
  isAuth = false;
  lastUpdate = new Date()
  //   (resolve, reject) => {
  //     const date = new Date();
  //     setTimeout(
  //       ()=>{
  //         resolve(date);
  //       },2000
  //     );
  //   }
  // );
  appareils : any[];
  
  constructor(private AppareilService: AppareilService) { 
    setTimeout(
      ()=>{
        this.isAuth = true;
      }, 2000
    )
   }
   ngOnInit(){
    this.appareils = this.AppareilService.appareils;
   }
   OnAllume(){
     this.AppareilService.SwitchonAll();
   }
   OnEteindre(){
    this.AppareilService.SwitchoffAll();
   }

}
