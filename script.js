import { barneSanger } from "./import.js";

const container = document.querySelector(".breadcrumbs");

barneSanger.forEach((song) => {
  console.log(song);
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("cardContainer");
  const cards = document.createElement("a");
  cards.classList.add("cards");
  cards.href = `details.html?id=${song.id}`;
  const songTitle = document.createElement("h3");
  songTitle.innerText = song.title;
  const songImage = document.createElement("img");
  songImage.src = song.image;
  cards.append(songImage, songTitle);
  cardContainer.append(cards);
  container.append(cardContainer);
});
