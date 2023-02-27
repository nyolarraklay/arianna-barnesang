const container = document.querySelector(".breadcrumbs");

const url = "https://nyolarraklay.github.io/songsforKlay/barnesang.json";

async function getSongs (){
  

    const response = await fetch (url);
    const json = await response.json();

    console.log(json);

    const songs = json.barnesang;

  console.log(songs)
    
    songs.forEach(function(item) {
      container.innerHTML += `<a href = "details.html?id=${item.id}" class="cards"><h1>${item.title}</h1> <img src = "${item.image}"/></a>`
    });
  }



getSongs ();


