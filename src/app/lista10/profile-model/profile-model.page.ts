import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-profile-model',
  templateUrl: './profile-model.page.html',
  styleUrls: ['./profile-model.page.scss'],
})
export class ProfileModelPage implements OnInit {

  @Input() profile: { name: { title: string,
                              firs: string,
                              last: string},
                      email: string,
                      phone: string,
                      picture: { large: string},
                      gender: string,
                      dob: {age: number} }

  constructor(public modal: ModalController) { }

  ngOnInit() {
  }

  close(){
    this.modal.dismiss({
      retorno: false
    })
  }

}
