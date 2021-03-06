import { Component, OnInit } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx'
import { SqlProvider } from 'ionic-query-interface'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuarios = []

  isLogado = false

  public usuario = {
    nome: '',
    email: '',
    password: '',
    foto: ''
  }
  constructor(public camera:Camera,
              public db:SqlProvider) { 
              }

  async ngOnInit() {
    await this.db.open('usuarios.db')
    //await this.definirTabela()
  }

  async getFoto(){
    let opcoes = {
      quality: 95,
      detinationType: this.camera.DestinationType.DATA_URL,
      encodyngType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    let captura = await this.camera.getPicture(opcoes);
    this.usuario.foto = 'data:image/jpeg;base64,' + captura;
    
  }

  async registrar(){
    const id = await this.db.table('usuarios').insert(this.usuario);
   
  }

  async definirTabela(){
    await this.db.createTable('usuario',{
      nome: 'text',
      email: 'text',
      password: 'text',
      foto: 'text',
    })
  }

  
}
