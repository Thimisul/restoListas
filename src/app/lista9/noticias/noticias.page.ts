import { Component, OnInit } from '@angular/core';
import { TheGuardianService } from '../the-guardian.service'
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalNoticiaPage } from '../modal-noticia/modal-noticia.page';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {
  result;
  news;
  noticias = [];
  section;

  constructor( public guardianService: TheGuardianService, 
              private route: ActivatedRoute,
              public modal: ModalController) { 
    
  }

  ngOnInit() {
    let params = this.route
      .queryParams.subscribe(params =>{
        this.section = params
        console.log(this.section)
        if (this.section == ''){
          this.getteste('search?show-fields=all');
        }else{
          this.getteste('search?section=' + this.section.param + '&show-fields=all');
        }
      })
  }
  

  getteste(pag){
    this.noticias = [];
    this.guardianService.gets(pag).subscribe( sucesso=>{
      this.result = sucesso;
      console.log(this.result)
      this.news =  this.result.response.results;
      console.log(this.news)
      for (let i = 0; i < this.news.length; i++){
        if( this.news[i].fields.bodyText != null)
        this.noticias.push({
        titulo: this.news[i].webTitle,
        categoria: this.news[i].sectionName,
        texto: this.news[i].fields.bodyText,
        thumbmail: this.news[i].fields.thumbnail
        }) 
        
      }
      console.log(this.noticias)
    })
  }

  async openNoticia(title, bodyText, section, thumbmail){
    const pagina = await this.modal.create({
      component: ModalNoticiaPage,
      componentProps: {noticia: {title: title, bodyText: bodyText, section: section, thumbmail: thumbmail}}
    })
    await pagina.present();
  }
}