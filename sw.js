self.addEventListener("install", e => {
    e.waitUntil(
        catches.open("static").then(cache => {
            return cache.addAll(["./", "./src/master.css", "./images/food_img1"]);
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        catches.match(e.request).then(respose => {
            return respose || fetch(e.request);
        })
    );
});