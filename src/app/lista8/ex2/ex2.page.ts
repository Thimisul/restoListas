import { Component, OnInit } from '@angular/core';
import { Brightness } from '@ionic-native/brightness/ngx';
import { AlertController } from '@ionic/angular';
import { BatteryStatus } from '@ionic-native/battery-status/ngx';

@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.page.html',
  styleUrls: ['./ex2.page.scss'],
})
export class Ex2Page implements OnInit {

  value: any

  constructor(public brightness: Brightness,
    public alertController: AlertController,
    private batteryStatus: BatteryStatus) { }

    ngOnInit() {
      this.getValue()
      this.bateryStatus()
    }
  
    bateryStatus(){
      const subscription = this.batteryStatus.onChange().subscribe(status => {
        console.log(status.level, status.isPlugged);
        if(status.level < 40){
          this.presentAlert("Sua Bateria")
        }
      })
    }
  
    getValue(){
      this.value = this.brightness.getBrightness().then(sucesso =>{
        this.value = sucesso
        console.log(sucesso)
        if(this.value < 0.4){
          this.presentAlert("Seu Brilho")
        }
      }, error =>
      console.log(error))
    }
  
    setValue(){
      this.value = this.value / 10
      this.value = this.brightness.setBrightness(this.value)
      console.log(this.value)
    }
  
    async presentAlert(tipo) {
      const alert = await this.alertController.create({
        header: 'Alert',
        subHeader: tipo,
        message: tipo + ' esta abaixo de 40%',
        buttons: ['OK']
      });
    
      await alert.present();
    }
  }
  