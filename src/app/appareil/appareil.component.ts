import { Component, Input ,OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';


@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName : string;
  @Input() appareilStatus : string;
  @Input() index : number;
  @Input() id : number;
  

  isAuth = false;
  constructor(private AppareilService: AppareilService) { 
    
  }


  getStatus(){
    return this.appareilStatus;
  }
  getColor(){
    if(this.appareilStatus === 'éteint'){
      return 'red';
    }else if(this.appareilStatus === 'allumé'){
      return 'green';
    }
  }
  onSwitchOn(){
    this.AppareilService.SwitchOnOne(this.index);
  }
  onSwitchOff(){
    this.AppareilService.SwitchOffOne(this.index);
  }
  ngOnInit() {
  }

}
