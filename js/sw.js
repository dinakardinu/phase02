this.addEventListener('install',function(event) {
  event.waitUntil(
    caches.open('mycache')
    .then(function(e){
      e.addAll([

      ])
    })
  )
})
// fetch addEventListener
tis.addEventListener('featch',function(event){
  event.respondWith(caches.open('my cache')
.then(function(cache){
  return cache.match(event.request)
.then(function(result){
  return result || featch(event.request)
.then(function(result){
  cache.put(event.request,result.clone());
  return result;
});
});
})
);
});
