import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

@Component({
  selector: 'page-hello',
  templateUrl: 'hello.html',
})
export class Hello {

  constructor(public navCtrl: NavController) {
  }

}
