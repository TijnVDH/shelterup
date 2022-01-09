const staticCacheName = 'site-static-v2';
const dynamicCacheName = 'site-dynamic-v1';
const assets = [
  '/',
  '/Landing.html',
  '/js/app.js',
  '/Landing.css',
  '/Landing.png',
  'https://fonts.googleapis.com/css2?family=Montserrat&display=swap',
  'https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459WRhyzbi.woff2',
  '/following1/fallback.html',
  '/following1/style2.css',
]
////
// cache size limit function
const limitCacheSize = (name, size) => {
  caches.open(name).then(cache => {
    cache.keys().then(keys => {
      if(keys.length > size){
        cache.delete(keys[0]).then(limitCacheSize(name, size));
      }
    });
  });
};
////
// install event
self.addEventListener('install', evt => {
  //console.log('service worker installed');
  evt.waitUntil(
  caches.open(staticCacheName).then((cache) => {
    console.log('caching shell assets')
    cache.addAll(assets);
  })
  );
});

// activate event
self.addEventListener('activate', evt => {
  //console.log('service worker activated');
  evt.waitUntil(
    caches.keys().then(keys => {
      //console.log(keys);
      return Promise.all(keys
        .filter(key => key !== staticCacheName && key !== dynamicCacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});
 //
//fetch
self.addEventListener('fetch', evt => {
  //console.log('fetch event', evt);
  
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request).then(fetchRes => {
        return caches.open(dynamicCacheName).then(cache => {
          cache.put(evt.request.url, fetchRes.clone())
           // check cached items size
           limitCacheSize(dynamicCacheName, 15);
           return fetchRes;
        })
      }) //
    }).catch(() => {
      if(evt.request.url.indexOf('.html') > -1){
        return caches.match('/pages/fallback.html');
      } 
    })
  )
  
});


//Asking for permission with the Notification API
if(typeof Notification!==typeof undefined){ //First check if the API is available in the browser
	Notification.requestPermission().then(function(result){ 
		//If accepted, then save subscriberinfo in database
		if(result==="granted"){
			console.log("Browser: User accepted receiving notifications, save as subscriber data!");
			navigator.serviceWorker.ready.then(function(serviceworker){ //When the Service Worker is ready, generate the subscription with our Serice Worker's pushManager and save it to our list
				const VAPIDPublicKey="BF1FQNlFAylTnN-TUajzFGqMtpwtBcg86pkqLkNBMgC0BmA_k6f8nE0l8pZ3mkZJithpjdVx1tzHq6fCB6RnHTc"; // Fill in your VAPID publicKey here
				const options={applicationServerKey:VAPIDPublicKey,userVisibleOnly:true} //Option userVisibleOnly is neccesary for Chrome
				serviceworker.pushManager.subscribe(options).then((subscription)=>{
          //POST the generated subscription to our saving script (this needs to happen server-side, (client-side) JavaScript can't write files or databases)
					let subscriberFormData=new FormData();
					subscriberFormData.append("json",JSON.stringify(subscription));
					fetch("data/saveSubscription.php",{method:"POST",body:subscriberFormData});

          if(REPLACEWITHYOURPUSHEVENTVARIABLE.data){
            pushdata=JSON.parse(REPLACEWITHYOURPUSHEVENTVARIABLE.data.text());		
            console.log("Service Worker: I received this:",pushdata);
            if((pushdata["title"]!="")&&(pushdata["message"]!="")){			
              const options={ body:pushdata["message"] }
              self.registration.showNotification(pushdata["title"],options);
              console.log("Service Worker: I made a notification for the user");
            } else {
              console.log("Service Worker: I didn't make a notification for the user, not all the info was there :(");			
            }
          }
          
				});
			});
		}
	}).catch((error)=>{
		console.log(error);
	});
}
 