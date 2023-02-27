const container = document.querySelector(".breadcrumbs");

const url = "http://localhost:3000/barnesang";

async function getSongs (){
  

    const response = await fetch (url);
    const json = await response.json();

    console.log(json);

  
    
    json.forEach(function(item) {
      container.innerHTML += `<a href = "details.html?id=${item.id}" class="cards"><h1>${item.title}</h1> <img src = "${item.image}"/></a>`
    });
  }



getSongs ();


