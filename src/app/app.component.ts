import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TheguardianserviceService } from './services/lista6/theguardianservice.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  result;
  news;
  sections = []

  public appPages = [
    {
      title: 'Login',
      url: '/lista9/login',
      icon: 'home'
    },
    {
      title: 'Lista 8 ex2',
      url: '/lista8/ex2',
      icon: 'list'
    },
    {
      title: 'Lista 8 ex3',
      url: '/lista8/ex3',
      icon: 'list'
    },
    { title: 'Lista 9',
      url: '/lista9/ex1',
      icon: 'list',
      subPages: this.sections},
    {
      title: 'Lista 10 ex1',
      url: '/lista10/ex1',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private guardianService: TheguardianserviceService
  ) {
    this.initializeApp();
    this.guardianService.gets('sections?').subscribe( sucesso=>{
      this.result = sucesso;
      console.log(this.result)
      this.news =  this.result.response.results;
      console.log(this.news)
      for (let i = 0; i < this.news.length; i++){
        this.sections.push({
        title: this.news[i].webTitle,
        url: "/lista9/ex1",
        id: this.news[i].id
        }) 
      }
    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
