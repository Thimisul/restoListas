import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-ex3',
  templateUrl: './ex3.page.html',
  styleUrls: ['./ex3.page.scss'],
})
export class Ex3Page implements OnInit {
  barcode: any

  constructor(public barcodeScanner: BarcodeScanner
    ) { }
  ngOnInit() {
  }

  getScan(){
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.barcode = barcodeData.text
      }).catch(err => {
      console.log('Error', err);
      });
  }
}
