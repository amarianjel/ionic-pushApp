import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { PushService } from './services/push.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor( private platform: Platform, private pushService: PushService ) {
    this.platform.ready().then (()=>{
      if (this.platform.is ('capacitor')) {
        this.pushService.configuracionInicial();
        console.log('Es CAPACITOR')
      } else {
        console.log ('ERROR: No es Capacitor');
        
      }
    })
  }
}
