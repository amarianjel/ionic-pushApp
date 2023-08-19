#  [PUSH APP](https://ionicframework.com/) &middot; [<img src="https://i.postimg.cc/wT4x8tWS/codepenblanco.png" alt="LinkedIn" class="footer-nav__link-image" height="30px" />](https://codepen.io/amarianjel/)   [<img src="https://i.postimg.cc/5NBMxTJX/github.png" alt="GitHub" class="footer-nav__link-image" height="30px" />](https://github.com/amarianjel)   [<img src="https://i.postimg.cc/1Xj3mL3G/github-Pages-blanco.png" alt="GitHub" class="footer-nav__link-image" height="70px" style="margin-bottom: -20px;"/>](https://amarianjel.github.io/Portfolio/)  [<img src="https://i.postimg.cc/J7BLFtdc/linkedin.png" alt="LinkedIn" class="footer-nav__link-image" height="30px" />](https://www.linkedin.com/in/amarianjel/)   [<img src="https://i.postimg.cc/1zqYRTyp/facebook.png" alt="LinkedIn" class="footer-nav__link-image" height="30px" />](https://www.facebook.com/Abraham13071993/)   [<img src="https://i.postimg.cc/sfJtqS4W/instagram.png" alt="Instagram" class="footer-nav__link-image" height="30px" />](https://www.instagram.com/abr_marianjel/)
[![forthebadge](https://img.shields.io/badge/Made%20with-Ionic-blue.svg)](https://ionicframework.com/)
![Quicktype](https://img.shields.io/badge/Quicktype-%E2%9A%99%EF%B8%8F-orange)
[![forthebadge](https://img.shields.io/badge/Angular-%F0%9F%8C%8D-red.svg)](https://angular.io/)
![Android](https://img.shields.io/badge/Android-%F0%9F%93%B1-brightgreen)
![InAppBrowser](https://img.shields.io/badge/InAppBrowser-%F0%9F%8C%8F%F0%9F%93%B6-yellow)
![Capacitor](https://img.shields.io/badge/Capacitor-%F0%9F%94%8C-blueviolet)
![Social Sharing Plugin](https://img.shields.io/badge/Social%20Sharing%20Plugin-%E2%86%95%EF%B8%8F%F0%9F%94%BD-lightgrey)


</div>


<p align="center">
  <img src="https://i.postimg.cc/wMRkmnnQ/ionic.png" alt="Logo Ionic">
</p>

# Plugins

## Codova
Realizar un push y serciosarse de los pasos en la [Documentación para One Signal y generar un push](https://onesignal.com/videos/add-push-notifications-to-ionic-react-apps-with-onesignal)

```npm install onesignal-cordova-plugin```
```npx cap sync```

## Capacitor

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