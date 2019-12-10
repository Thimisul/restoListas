import { Component, OnInit, Input } from '@angular/core';
import { TheGuardianService } from '../the-guardian.service';
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

  constructor(public guardianService: TheGuardianService,
              public modal: ModalController) { }

  ngOnInit() {
  }

  close(){
    this.modal.dismiss({
      retorno: false
    })
  }
}
