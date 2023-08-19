import { Injectable } from '@angular/core';
import OneSignal from 'onesignal-cordova-plugin';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  constructor() { }

  OneSignilInit(){
    //OneSignal.setLogLevel(6, 0);    
    OneSignal.setAppId('497bb354-c0cf-432b-82ac-eba4361c4f56');    
    OneSignal.setNotificationOpenedHandler( jsonData => {        
      console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    });     
    OneSignal.promptForPushNotificationsWithUserResponse( accepted => {        
      console.log('User accepted notifications: ' + accepted);    
    });     
    OneSignal.getDeviceState( resp => {      
    //this.storage.set('push_id', resp.userId);    
    });  
  }
}
