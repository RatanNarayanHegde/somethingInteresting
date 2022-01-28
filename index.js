console.log("javascript working")

const videos = [
    {
        "url" : "https://www.youtube.com/watch?v=I2O7blSSzpI",
        "photo": "photos/cicada.jpg"
    },
    {
        "url": "https://www.youtube.com/watch?v=3fq83qbjPCM",
        "photo": "photos/julianAssange.jpg"
    },
    {
        "url": "https://www.youtube.com/watch?v=oGVhOWqsBWM",
        "photo": "photos/novaEffect.jpg"
    }
]

const div = document.querySelector("#content");

const img = document.createElement("img");
const idx = Math.floor(Math.random()* videos.length);
img.src = videos[idx].photo;


div.appendChild(img);