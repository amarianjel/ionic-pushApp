<div align="center">

#  [PUSH APP](https://ionicframework.com/) &middot; [<img src="https://i.postimg.cc/wT4x8tWS/codepenblanco.png" alt="LinkedIn" class="footer-nav__link-image" height="30px" />](https://codepen.io/amarianjel/)   [<img src="https://i.postimg.cc/5NBMxTJX/github.png" alt="GitHub" class="footer-nav__link-image" height="30px" />](https://github.com/amarianjel)   [<img src="https://i.postimg.cc/1Xj3mL3G/github-Pages-blanco.png" alt="GitHub" class="footer-nav__link-image" height="70px" style="margin-bottom: -20px;"/>](https://amarianjel.github.io/Portfolio/)  [<img src="https://i.postimg.cc/J7BLFtdc/linkedin.png" alt="LinkedIn" class="footer-nav__link-image" height="30px" />](https://www.linkedin.com/in/amarianjel/)   [<img src="https://i.postimg.cc/1zqYRTyp/facebook.png" alt="LinkedIn" class="footer-nav__link-image" height="30px" />](https://www.facebook.com/Abraham13071993/)   [<img src="https://i.postimg.cc/sfJtqS4W/instagram.png" alt="Instagram" class="footer-nav__link-image" height="30px" />](https://www.instagram.com/abr_marianjel/)
[![forthebadge](https://img.shields.io/badge/Made%20with-Ionic-blue.svg)](https://ionicframework.com/)
![Quicktype](https://img.shields.io/badge/Quicktype-%E2%9A%99%EF%B8%8F-orange)
[![forthebadge](https://img.shields.io/badge/Angular-%F0%9F%8C%8D-red.svg)](https://angular.io/)
![Android](https://img.shields.io/badge/Android-%F0%9F%93%B1-brightgreen)
![InAppBrowser](https://img.shields.io/badge/InAppBrowser-%F0%9F%8C%8F%F0%9F%93%B6-yellow)
![Capacitor](https://img.shields.io/badge/Capacitor-%F0%9F%94%8C-blueviolet)
![Social Sharing Plugin](https://img.shields.io/badge/Social%20Sharing%20Plugin-%E2%86%95%EF%B8%8F%F0%9F%94%BD-lightgrey)


</div>

<div align="center">
  <p align="center">
    <img src="https://i.postimg.cc/wMRkmnnQ/ionic.png" alt="Logo Ionic">
  </p>
</div>

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

# Plugins

## Codova

### One Signal
La [documentación de One Signal](https://documentation.onesignal.com/docs/ionic-sdk-setup) solo es importante en los pasos a seguir, para realizar el código es importante ver el video del push a continuación.
Realizar un push y serciosarse de los pasos en la [Documentación para One Signal y generar un push](https://onesignal.com/videos/add-push-notifications-to-ionic-react-apps-with-onesignal).
Los mensajes se envian desde el [perfil](https://dashboard.onesignal.com/apps/497bb354-c0cf-432b-82ac-eba4361c4f56/notifications/0b7d9ed6-7351-4a3a-b4b9-7ca017349fcf#outcomes=os__click__count) y debe siempre estar conectado el celular con internet para estar subscrito.

```npm install onesignal-cordova-plugin```
```npx cap sync```

*Recordar que la implementación de la configuración debe estar en **app.component.ts**, sino representará errores*

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

# Capacitor
```ionic build --prod --service-worker```
## Desplegar en Capacitor
Generar carpeta www
```ionic build```
Para las instalaciones en capacitor: 
Si se desea hacer sin el build
```ionic capacitor add android```

Si ya esta hecho el build
```npx cap add android```
```ionic capacitor build android```

Para correr: Este genera un build nuevo
```npx cap run android```

### Live Reload
```ionic cap run android -l --external```