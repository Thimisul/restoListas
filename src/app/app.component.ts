import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
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
    {
      title: 'Lista 9 ex1',
      url: '/lista9/ex1',
      icon: 'list'
    },
    {
      title: 'Lista 10 ex1',
      url: '/lista10/ex1',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
