


const container = document.querySelector(".barnesang");
const title = document.querySelector("title");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

console.log(params)

const id = params.get("id");

console.log(id);

const url = `https://nyolarraklay.github.io/songsforKlay/barnesang.json?${id}`;

async function getSong (){
  
    const response = await fetch (url);
    const json = await response.json();
    const songs = json.barnesang;
    
   
    console.log(json);
console.log(songs);

    createHtml(json)

}
getSong ();
 
  
  function createHtml(songs) {
  title.innerHTML = `${songs.title}`;
  container.innerHTML += `<h1>${songs.title}</h1>
  <div class="content-container">
  <img src="${songs.image}" alt="${songs.title}"/></div>
  <div class="description">
  <p>${songs.details} </br> ${songs.detailsTwo} </br> ${songs.details3} </br> ${songs.details4} </br> ${songs.details5}</p>
  
  <audio
  autoplay
  src="${songs.audio}">
      <a href="${songs.audio}">
      </a>
  </audio>
  </div>
  </div>`
  }




