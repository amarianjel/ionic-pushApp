import { EventEmitter, Injectable } from '@angular/core';
import OneSignal from 'onesignal-cordova-plugin';
import { OpenedEvent } from 'onesignal-cordova-plugin/dist/models/NotificationOpened';
import { Storage } from '@ionic/storage-angular';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  mensajes: any[] = [
    // {
    //   title: 'Titulo de la push',
    //   body: 'Este es el body de la push',
    //   date: new Date()
    // }
  ];

  userId: string | any;

  pushListener = new EventEmitter<any>(); //+ Observable

  constructor( private storage: Storage ) {
    this.cargarMensajes();
  }

  async configuracionInicial(){
    // TODO: Carga de OneSignal
    OneSignal.setAppId( environment.oneSignalAppId );

    OneSignal.promptForPushNotificationsWithUserResponse( accepted => {        
      console.log('Notificación abierta: ', accepted); 
    });     

    OneSignal.getDeviceState( resp => {
      this.storage.set('push_id', resp.userId);
      console.log(resp.userId) 
    });

    // README: Es cuando se abre la notificación
    OneSignal.setNotificationOpenedHandler( async( jsonData: OpenedEvent ) => {        
      //console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
      console.log('setNotificationOpenedHandler: ', jsonData)
      await this.notificacionRecibida( jsonData )
    });
  }

  async notificacionRecibida( noti: OpenedEvent ){

    await this.cargarMensajes();
    
    const notification = noti.notification;
    const existePush = this.mensajes.find( mensaje => mensaje.notificationID === notification.notificationId );

    if( existePush ){
      return;
    }
    this.mensajes.unshift( notification );
    this.pushListener.emit( notification );  // lo envio a home

    await this.guardarMensajes();
  }

  guardarMensajes() {
    this.storage.set('mensajes', this.mensajes );
  }

  async cargarMensajes() {
  
    // README: Funcion que da problemas cuando inicia la app, pero se soluciono con un try catch
    try{
      await this.storage.create();
      this.mensajes =  await this.storage.get('mensajes') || [];
      // return this.mensajes;
    }catch( err ){
      console.error('Error al cargar datos desde el almacenamiento:', err);
      this.mensajes = [];
    }
  }

  async getMensajes() {
    await this.cargarMensajes();
    return [...this.mensajes];
  }


}