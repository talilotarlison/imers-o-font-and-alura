const resultPlaylists = document.getElementById('result-playlists');
const resultArtist = document.getElementById('result-artist');
const searchTerm = document.getElementById('search-input');

// CONSUMO DA API
function loadingAPI(searchTerm) {
    var proxy = 'https://cors-anywhere.herokuapp.com/';
    const URL = `https://pastebin.com/raw/nCuRUpAh`;

    fetch(proxy + URL, {
        method: "GET"
    })
        .then(result => result.json())
        .then(artists => showScreen(artists, searchTerm))
        .catch(err => console.log(err))
        .finally(() => console.log('Concluido com Sucesso!'))

}

// FUNÇÃO MOSTRAR NA DADOS NA TELA
function showScreen(artists, searchTerm) {
    //console.log(searchTerm,artists);
    var filterSearch = []

    artists.artists.map(artist => {
        if (artist.name.toLowerCase().includes(searchTerm)) {
            filterSearch.push(artist);
        }
    })
   // console.log(filterSearch)

   resultArtist.innerHTML = '';
    componeteArtists(filterSearch);
}

// COMPONENTE MOSTRAR NA TELA
function componeteArtists(filterSearch){
    filterSearch.forEach((artist)=>{
    
    resultArtist.innerHTML += ` <div class="artist__card">
                                    <a href="#" class="card_artist">
                                        <img src="${artist.urlImg}">
                                        <p class="artist__name">${artist.name}</p>
                                        <p class="artist__genre">${artist.genre}</p>
                                        <span class='material-symbols-outlined'>play_circle</span>
                                    </a>
                                </div>`

    })
}

//EVENTO DE CLICK DO BOTAO
searchTerm.addEventListener("keydown", () => {
    if(searchTerm.value === ""){
      
        resultArtist.classList.remove('hidden-artists');  
        resultArtist.classList.add('result-artist');

        resultPlaylists.classList.remove('hidden-playlists');  
        resultPlaylists.classList.add('result-playlists'); 
        
        
    }else{
        resultPlaylists.classList.add('hidden-playlists');  

        resultArtist.classList.add('hidden-artists'); 
    }

    loadingAPI(searchTerm.value.toLowerCase())
});


/* CONSUMO DE API FATCH COM FUNÇÃO ASYNC
*/

/*
const carregarArtistas = async () => {
    const resultado = await fetch(proxy + URL, {
        method: "GET"
    });
    var artistas = resultado.json();
    console.log(artistas);
}

carregarArtistas()

*/


/* 
TESTE DE CODIGO   

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.includes('des'));

console.log(result);

// Expected output: Array ["destruction"]

*/