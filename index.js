console.log("javascript working");

const videos = [
  {
    url: "https://www.youtube.com/watch?v=I2O7blSSzpI",
  },
  {
    url: "https://www.youtube.com/watch?v=3fq83qbjPCM",
  },
  {
    url: "https://www.youtube.com/watch?v=oGVhOWqsBWM",
  },
  {
    url: "https://www.youtube.com/watch?v=SSdsncLXLYs",
  },
  {
    url: "https://www.youtube.com/watch?v=EFkyxzJtiv4",
  },
];

const getVideoIdFromURL = (url) => {
  const videoId = url.substring(32);

  return videoId;
};

const getImageSrcFromURL = (url) => {
  const videoId = getVideoIdFromURL(url);

  const imgSrc = "https://img.youtube.com/vi/" + videoId + "/maxresdefault.jpg";

  return imgSrc;
};

const appendVideoToDiv = () => {
  const div = document.querySelector("#content");

  const img = document.createElement("img");
  const idx = Math.floor(Math.random() * videos.length);
  img.src = getImageSrcFromURL(videos[idx].url);

  while (div.firstChild) div.removeChild(div.firstChild);
  div.appendChild(img);
};

const changeVideo = () => {
  appendVideoToDiv();
};

appendVideoToDiv();
