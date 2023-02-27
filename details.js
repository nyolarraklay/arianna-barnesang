


const container = document.querySelector(".barnesang");
const title = document.querySelector("title");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

console.log(params)

const id = params.get("id");

console.log(id);

const url = `http://localhost:3000/barnesang/${id}`;

async function getSong (){
  
    const response = await fetch (url);
    const song = await response.json();
    const lyrics = song.details;
   
    console.log(song);

    createHtml(lyrics)

}
getSong ();
 
  
  function createHtml(lyrics) {
  title.innerHTML = `${lyrics.title}`;
  container.innerHTML += `<h1>${lyrics.title}</h1>
  <div class="content-container">
  <img src="${lyrics.image}" alt="${lyrics.title}"/></div>
  <div class="description">
  <p>${lyrics.lyrics} </br> ${lyrics.lyricsTwo} </br> ${lyrics.lyrics3} </br> ${lyrics.lyrics4} </br> ${lyrics.lyrics5}</p>
  
  <audio
  autoplay
  src="${lyrics.audio}">
      <a href="${lyrics.audio}">
      </a>
  </audio>
  </div>
  </div>`
  }




