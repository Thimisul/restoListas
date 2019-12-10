import { Component, OnInit } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx'
import { SqlProvider } from 'ionic-query-interface'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public usuario: {
    nome: string,
    email: string,
    password: string,
    foto: string
    logado: boolean
  }
  constructor(public camera:Camera,
              public db:SqlProvider) { }

  ngOnInit() {
  }

  async tirarFoto(){
    let opcoes = {
      quality: 95,
      detinationType: this.camera.DestinationType.DATA_URL,
      encodyngType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    let captura = await this.camera.getPicture(opcoes);
    this.usuario.foto = 'data:image/jpeg;base64,' + captura;
  }
}
