import { Component, OnInit } from '@angular/core';
import { SqlProvider } from 'ionic-query-interface';
import { Camera } from '@ionic-native/camera/ngx'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuarios = []

  public usuario = {
    id: '',
    nome: '',
    email: '',
    password: '',
    foto: '',
    logado: 0
  }
  constructor(public camera:Camera,
              public db:SqlProvider) { }

  ngOnInit() {
    this.db.open('lista9.db')
    this.definirTabela()
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
    this.usuarios.push({id, ...this.usuario})
  }

  async definirTabela(){
    await this.db.createTable('usuarios',{
      nome: 'text',
      email: 'text',
      password: 'text',
      foto: 'text',
      logado: 'integer'
    })
  }
}
