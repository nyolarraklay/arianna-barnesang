const container = document.querySelector(".barnesang");

const queryString = document.location.search;

console.log(queryString);
const params = new URLSearchParams(queryString);

console.log(params);

const id = params.get("id");

console.log(id);

import data from "./database/barnesang-id.json" assert { type: "json" };
const barneSang = data[id];

const music = barneSang[0];
console.log(music);

const cardContainer = document.createElement("div");
cardContainer.classList.add("cardContainer");
const cards = document.createElement("div");
cards.classList.add("cards");
const songTitle = document.createElement("h3");
songTitle.innerText = music.title;
const songImage = document.createElement("img");
songImage.src = music.image;
const cardContent = document.createElement("div");
cardContent.classList.add("cardContent");
const lyrics = document.createElement("p");
lyrics.innerText = music.lyrics;
const audio = document.createElement("audio");
audio.autoplay = true;
audio.src = music.audio;
cardContent.append(songTitle, lyrics, audio);
cards.append(songImage, cardContent);
cardContainer.append(cards);
container.append(cardContainer);
