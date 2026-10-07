importScripts('https://www.gstatic.com/firebasejs/12.7.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.7.0/firebase-messaging-compat.js');
firebase.initializeApp({apiKey:'AIzaSyB39EFDR5jPvbLBfzHhIEBe7f_pT-hQgqw',authDomain:'proyecto-vendedores.firebaseapp.com',projectId:'proyecto-vendedores',storageBucket:'proyecto-vendedores.firebasestorage.app',messagingSenderId:'611675657508',appId:'1:611675657508:web:47317eb63c92a4724b4fb1'});
const messaging=firebase.messaging();
messaging.onBackgroundMessage(payload=>{if(payload.notification)return;const title=payload.data?.title||'Gestión de Clientes';self.registration.showNotification(title,{body:payload.data?.body||'Tienes una nueva alerta.',icon:'./icons/icon-192.png',badge:'./icons/icon-192.png',data:{url:'./'}});});
self.addEventListener('notificationclick',event=>{event.notification.close();event.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(list=>{for(const c of list){if('focus'in c)return c.focus();}return clients.openWindow('./');}));});
