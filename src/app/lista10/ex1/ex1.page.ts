import { Component, OnInit, ViewChild } from '@angular/core';
import { Platform, ModalController } from '@ionic/angular';
import { GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment, 
  Geocoder,
  GeocoderRequest,
  GeocoderResult} from '@ionic-native/google-maps/ngx'
import { HttpClient } from '@angular/common/http';
import { ProfileModelPage } from '../profile-model/profile-model.page';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.page.html',
  styleUrls: ['./ex1.page.scss'],
})
export class Ex1Page implements OnInit {

  map: GoogleMap
  marker: Marker
  profile: any = {}
  search_address = ''

  constructor(private platform: Platform,
              public http: HttpClient,
              public modal: ModalController) { }

  async ngOnInit() {
    await this.platform.ready();
    await this.loadMap(-25.29825, -51.14398);
    this.getRandomProfile()
  }

async loadMap(lat, lng){
  Environment.setEnv({
    'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyA4y6tlWS_3IQNXgRl8mUQuRh1i9RGKc3c',
    'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyA4y6tlWS_3IQNXgRl8mUQuRh1i9RGKc3c'
  })
  const mapOptions = {
    mapType: 'MAP_TYPE_NORMAL',
    camera: {
      target: {
        lat: lat,
        lng: lng
      },
      zoom: 5
    },
  }
  this.map = GoogleMaps.create('map_canvas', mapOptions);
}

async localizar(lat, lng, fotoUrl){
  const options: MarkerOptions = {
    icon: {
      url: fotoUrl,
      size: {
        width: 64,
        height: 64,
      }
    },
    animation: 'DROP',
    position: {
      lat: lat,
      lng: lng
    }
  }

  this.marker = await this.map.addMarkerSync(options)
  this.marker.showInfoWindow()
  this.marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe( _ =>{
  this.marker.setAnimation('BOUNCE')
  this.openProfile()
   })
}

getRandomProfile(){
  this.http.get('https://randomuser.me/api/?nat=BR').subscribe(result => {
    this.profile = result
    console.log(result);
    console.log(this.profile.results[0])
    this.localizar(this.profile.results[0].location.coordinates.latitude, 
                   this.profile.results[0].location.coordinates.longetude,
                   this.profile.results[0].picture.thumbnail)
  })
}

getUtfpr(){
  this.localizar(-25.050919, -50.1325014, 'http://portal.utfpr.edu.br/icones/cabecalho/logo-utfpr/@@images/image.png')
  this.map.setOptions( {   mapType: 'MAP_TYPE_NORMAL',
  camera: {
    target: {
      lat: -25.050919,
      lng: -50.1325014
    },
    zoom: 16
  }})
}


async openProfile(){
    
  const pagina = await this.modal.create({
    component: ProfileModelPage,
    componentProps: {profile: this.profile.results[0]}
  })
  await pagina.present();

}

geocoding(){
  Geocoder.geocode({
    "address": this.search_address
  }).then((results:GeocoderResult[]) => {
    console.log(results);

    return this.map.addMarker({
      'position': results[0].position,
      'title': JSON.stringify(results[0].position)
    })
  })
}

}
