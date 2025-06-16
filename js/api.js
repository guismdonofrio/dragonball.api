//  variavel
//let = numeros e letras
let url = 'https://dragonball-api.com/api/characters?limit=100';

//console.log(url); = escrever no console da pagina
//alert(url); = mostra caixa de mensagem na tela

//comando para ler uma pagina json (API)
let personagens;
let request = new XMLHttpRequest();
request.open('GET', url);
request.responseType = 'json';
request.send();

//função anonima para executar após o retorno da API
request.onload = function()
{
    //guardar o retorno da pagina na variavel
    let dados = request.response;
    personagens = dados["items"];
    //console.log(personagens);
    //console.log(personagens["items"][0]["name"]);

    let total = dados["meta"]["itemCount"];
    //console.log(total);


    //api
    let html = '';
    for(let i=0; i<total; i++)
    {
    html += `<div class="col">`;
    html += `<div class="card h-100">`;
    html += `<img src="${personagens[i]["image"]}" class="card-img-fluid mt-2 mx-auto" style="max-height: 300px; max-width:95%" alt="">`;
    html += `<div class="card-body pb-1">`;
    html += `<h1>${personagens[i]["name"]}</h1>`;
    html += `<p><strong>Ki: </strong>${personagens[i]["ki"]}</br>`;
    html += `<p><strong>Raça: </strong>${personagens[i]["race"]}</br>`;
    html += `<p><strong>Genero: </strong>${personagens[i]["gender"]}`;
    html += `</p>`;
    html += `</div>`;
    html += `<div class="card-footer bg-white border-top-0 text-center mb-0">`;
    html += `<button type="button" onclick="mostrar(${i});" class="btn btn-outline-dark w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">`;
    html += `Leia mais... </button>`;
    html += `</div>`;
    html += `</div>`;
    html += `</div>`;        
    }

    document.getElementById("personagens").innerHTML = html;
    
}

function mostrar(i)
{
    document.getElementById("exampleModalLabel").innerHTML = personagens[i]["name"];
}


