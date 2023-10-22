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
  {
    url: "https://www.youtube.com/watch?v=HekZLSZ2mpU",
  },
  {
    url: "https://www.youtube.com/watch?v=ugIuHWc6Nuc",
  }
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

  const anchor = document.createElement("a");
  const img = document.createElement("img");
  const idx = Math.floor(Math.random() * videos.length);
  img.src = getImageSrcFromURL(videos[idx].url);

  anchor.href = videos[idx].url;
  anchor.appendChild(img);

  while (div.firstChild) div.removeChild(div.firstChild);
  div.appendChild(anchor);
};

const changeVideo = () => {
  appendVideoToDiv();
};

appendVideoToDiv();
