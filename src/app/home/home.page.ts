import { Component } from '@angular/core';
import { Brightness } from '@ionic-native/brightness/ngx'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(public brightness: Brightness) {}

}
