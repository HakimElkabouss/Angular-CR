import { Component, OnInit, OnDestroy } from '@angular/core';
import { resolve } from 'q';
import { AppareilService } from './services/appareil.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
 
  secondes : number;
  counterSubscription : Subscription;

  constructor(){}

  ngOnInit(){
    const counter = Observable.interval(1000);
    this.counterSubscription = counter.subscribe(
      (value : number)=>{
        this.secondes = value;
      }
    )
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }
   
}
