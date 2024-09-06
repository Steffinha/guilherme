function pesquisar() {
// Obtém a seção onde os resultados da pesquisa serão exibidos
let section = document.getElementById("resultados-pesquisa");
    
let campoPesquisa = document.getElementById("campo-pesquisa").value ;
    
 if(!campoPesquisa){
     section.innerHTML = "<p>PESQUISE ALGUMA COISA, PORRA. Tente novamente!</p>"
     return 
    }

campoPesquisa = campoPesquisa.toLowerCase()

// Inicializa uma string vazia para armazenar os resultados
let resultados = "";
let titulo = "";
let descricao = "";
let tags = "";
    
 // Itera sobre os dados da pesquisa
 for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
     if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
     // cria um novo elemento
     // Cria uma div para cada resultado
     resultados += `
         <div class="item-resultado">
        <h2>
            <a href="#" target="_blank">${dado.titulo}</a> </h2>
         <p class="descricao-meta">${dado.descricao}</p> <a href=${dado.link} target="_blank">Clique AQUI</a> </div>
         `;
     }
}
    
if(!resultados){
    resultados = "<p>Só temos as opções Careco e Cabeludo. Procure novamente!</p>"
    }

// Atribui os resultados à seção HTML
 section.innerHTML = resultados; 
}