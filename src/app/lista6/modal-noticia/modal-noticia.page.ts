import { Component, OnInit, Input } from '@angular/core';
import { TheguardianserviceService } from 'src/app/services/lista6/theguardianservice.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-noticia',
  templateUrl: './modal-noticia.page.html',
  styleUrls: ['./modal-noticia.page.scss'],
})
export class ModalNoticiaPage implements OnInit {


  @Input() noticia: {
    title: "",
    section: "",
    bodyText: "",
    thumbmail: ""
  }

  constructor(public guardianService: TheguardianserviceService,
              public modal: ModalController) { }

  ngOnInit() {
  }

  close(){
    this.modal.dismiss({
      retorno: false
    })
  }

}
