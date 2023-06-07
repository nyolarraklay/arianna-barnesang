const container = document.querySelector(".barnesang");

const queryString = document.location.search;

console.log(queryString);
const params = new URLSearchParams(queryString);

console.log(params);

let id = params.get("id");

console.log(id);

let barneSang = {
  1: [
    {
      id: 1,
      title: "Alle Fugler Små Det Er",
      image: "/pictures/alleFugler.jpeg",
      lyrics:
        "Alle fugler små de er kommet nå tilbake! Gjøk og sisik, trost og stær synger alle dage. Ler ka jubler høyt i sky, ringer våren inn på ny. Frost og snø de måtte fly, her er sol og glede!",
      audio: "/music/fugler.m4a",
    },
  ],
  2: [
    {
      id: 2,
      title: "Lille Petter Edderkopp",
      image: "pictures/lillePetterEdderkopp.jpg",
      lyrics:
        "Lille Petter Edderkopp han klatret på min hatt. Så begynte det å regne og Petter ned han datt. Så kom solen og skinte på min hatt. Da ble det liv i Petterkopp som klatret på min hatt.",
      audio: "/music/edderkopp.m4a",
    },
  ],
  3: [
    {
      id: 3,
      title: "Finger Familie",
      image: "/pictures/fingerFamily.jpeg",
      lyrics:
        "Tommelfinger, tommelfinger, hvor er du? Her er jeg, her er jeg! God dag, god dag god dag!, Pekefinger, pekefinger, hvor er du? Her er jeg, her er jeg! God dag, god dag god dag! Langefinger, langefinger, hvor er du? Her er jeg, her er jeg! God dag, god dag god dag! Ringefinger, ringefinger, hvor er du? Her er jeg, her er jeg! God dag, god dag god dag! Lillefinger, lillefinger, hvor er du? Her er jeg, her er jeg! God dag, god dag god dag! Hele handen, hele handen, hvor er du? Her er jeg, her er jeg! God dag, god dag god dag!",

      audio: "/music/fingersang.m4a",
    },
  ],
  4: [
    {
      id: 4,
      title: "Små Rumpetroll",
      image: "/pictures/småRumpetroll.jpeg",
      lyrics:
        "Sma rumpetroll, små rumpetroll er morsomme å se, Sma rumpetroll, små rumpetroll er morsomme å se",
      lyricsTwo:
        " Små froskene, små froskene de hopper fort av sted, Små froskene, små froskene de hopper fort av sted",
      lyrics3:
        " Men øre, men øre får ingen frosker ha, Men øre, men øre får ingen frosker ha,",
      lyrics4:
        " Å rompene, å rompene, dem vokser de i fra. Å rompene, å rompene, dem vokser de i fra.",
      lyrics5:
        " Ko-ak-ak-ak, Ko-ak-ak-ak, Ko-ak-ak-ak, Ko-ak-ak-ak, Ko-ak-ak-ak, Ko-ak-ak-ak,",
      audio: "/music/rumpetroll.m4a",
    },
  ],
  5: [
    {
      id: 5,
      title: "Bæ Bæ Lille Lam",
      image: "/pictures/bæBæLilleLam.jpeg",
      lyrics:
        "Bæ Bæ lille lam, har du noe ull? Ja, ja, kjære barn, jeg har kroppen full. Søndagsklær til mor, og to par strømper til bitte lille bror.",
      lyricsTwo: " ",
      lyrics3: " ",
      lyrics4: " ",
      lyrics5: " ",
      audio: "/music/lillelam.m4a",
    },
  ],
  6: [
    {
      id: 6,
      title: "Alle killebukkenne",
      image: "pictures/alleKillebukkene.jpeg",
      lyrics:
        "Alle killebukkene på haugen sprang,  Spurte om Frida var hjemme. Mamma'n til Frida svarte nei, Og alle Killebukkene de ble så lei. De løp inn i skogen og gjemte seg",
      lyricsTwo:
        " Alle killebukkene på haugen sprang, Spurte om Jonas var hjemme. Mamma'n til Jonas svarte ja, Og alle Killebukkene de ble så glad. De klappet seg på rumpa og sa ha ha ha",
      lyrics3: " ",
      lyrics4: " ",
      lyrics5: " ",
      audio: "/music/killebukkene.m4a",
    },
  ],
  7: [
    {
      id: 7,
      title: "Ride Ride Ranke",
      image: "/pictures/rideRideRanke.jpeg",
      lyrics:
        "Ride, ride ranke! Si meg hvor skal veien gå? Bestefar besøk skal få. Ride, ride ranke!",
      lyricsTwo:
        " Ride, ride ranke! Og når så vi  stiger av,sier vi Goddag, goddag! Ride, ride ranke!",
      lyrics3:
        " Ride, ride ranke!Bestemor, hun er så snill. Vi får leke som vi vil. Ride, ride ranke!",
      lyrics4:
        " Ride, ride ranke! Nå til onkel i galopp. Er han hjemme? Ja! Så stopp! Ride, ride ranke!",
      lyrics5:
        " Ride, ride ranke! Nå er hesten ornt`lig trett. Rytteren er god og mett. Ride, ride ranke!",
      audio: "/music/rideranke.m4a",
    },
  ],
  8: [
    {
      id: 8,
      title: "Hokus Pokus",
      image: "/pictures/hokusPokus.jpeg",
      lyrics: "Hokus og Pokus, Hei filiokus. Troll ned i esken, Sover du?",
      lyricsTwo:
        " Nå skal vi trolle, Kaffe og bolle. Hei filiokus kom fram,  Tjohei",
      lyrics3: " ",
      lyrics4: " ",
      lyrics5: " ",
      audio: "/music/hokus.m4a",
    },
  ],
  9: [
    {
      id: 9,
      title: "Jeg gikk en Tur på Stien",
      image: "pictures/tur.jpg",
      lyrics:
        "Jeg gikk en tur på stien, Og søkte skogens r.  Da hørte jeg fra lien, En gjøk som gol ko ko, koko koko koKo ko ko ko koko",
      lyricsTwo:
        " Jeg spurte den hvor mange, Hvor mange år ennå. Den svarte meg med lange Og klagende ko koko koko koKo ko ko ko koko",
      lyrics3:
        " Jeg spurte om dens make, Og om dens eget bo. Den satt der oppå grenen, Og kikket ned og lo. koko koko koKo ko ko ko koko",
      lyrics4:
        " Vi bygger ikke rede, Vi har hjem vi to. Fru spurv er mor til barna, Vi galer kun ko koKo. koko koko koKo ko ko ko koko",
      lyrics5: " ",
      audio: "/music/kokoko.m4a",
    },
  ],
  10: [
    {
      id: 10,
      title: "Bake Bake Kake",
      image: "/pictures/bakeBakeKake.jpeg",
      lyrics:
        " Bake kake søte, dyppe den i fløte,først i fløte, så i vann, så kommer det en gammel mann, som ville kaka prikke med ei lita gullstikke.",
      lyricsTwo: " ",
      lyrics3: " ",
      lyrics4: " ",
      lyrics5: " ",
      audio: "/music/kake.m4a",
    },
  ],
};
console.log(barneSang);

const music = barneSang[id];
console.log(music);

const kids = music[0];
console.log(kids);

const cardContainer = document.createElement("div");
cardContainer.classList.add("cardContainer");
const cards = document.createElement("div");
cards.classList.add("cards");
const songTitle = document.createElement("h3");
songTitle.innerText = kids.title;
const songImage = document.createElement("img");
songImage.src = kids.image;
const cardContent = document.createElement("div");
cardContent.classList.add("cardContent");
const lyrics = document.createElement("p");
lyrics.innerText = kids.lyrics;
const audio = document.createElement("audio");
audio.classList.add("audio");
audio.autoplay = true;
audio.src = kids.audio;
cardContent.append(songTitle, lyrics, audio);
cards.append(songImage, cardContent);
cardContainer.append(cards);
container.append(cardContainer);

window.addEventListener("touchstart", () => {
  document.querySelector(".audio").muted = false;
  document.querySelector(".audio").play();
});
