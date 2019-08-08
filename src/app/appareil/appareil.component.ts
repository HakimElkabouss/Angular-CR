import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  AppareilName = "machine à laver";
  Status = "éteint";
  isAuth = false;
  constructor() { 
    setTimeout(
      () => {
        this.isAuth = true;
      }, 2000
    );
  }

  getStatus(){
    return this.Status;
  }

  ngOnInit() {
  }

}
