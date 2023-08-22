import { Component } from '@angular/core';
import { PushService } from '../services/push.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  mensajes: [] = [];
  userId = '';

  constructor( public pushService: PushService ) {}

  
  async ionViewWillEnter() {

    console.log('Will Enter - Cargar mensajes');
    // this.userId = await this.pushService.getUserIdOneSignal();

    // this.mensajes = await this.pushService.getMensajes();

  }

  async borrarMensajes() {
    // await this.pushService.borrarMensajes();
    this.mensajes = [];

    console.log(this.mensajes);
  }

}
