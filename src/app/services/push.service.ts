import { Injectable } from '@angular/core';
import OneSignal from 'onesignal-cordova-plugin';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  constructor() { }

  async configuracionInicial(){
    //OneSignal.setLogLevel(6, 0);    
    OneSignal.setAppId( environment.oneSignalAppId );    
    OneSignal.setNotificationOpenedHandler( jsonData => {        
      //console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
      console.log(jsonData)
    });     
    OneSignal.promptForPushNotificationsWithUserResponse( accepted => {        
      console.log('User accepted notifications: ' + accepted);
      console.log("Aceptada")    
    });     
    OneSignal.getDeviceState( resp => {
      console.log('DeviceState: ' + resp)      
    //this.storage.set('push_id', resp.userId); 
    });  
  }
}