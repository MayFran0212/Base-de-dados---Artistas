// aqui na function vai fazer 1 vez só, diferente do for que repete
function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    //escrever os nomes assimDesseJeito chama Camel Case
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    //se campoPesquisa for uma string sem nada
    // usamos apenas um sinal = para atribuir valor a variáveis, para verificar e comparar valores utilizamos dois sinais de ==
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar algo para pesquisar!</p>"
        // o return finaliza a apliação, ou seja, o código pasra por ai, nem chega a ler o resto
        return
    };

    if (campoPesquisa == " ") {
        section.innerHTML = "<p>Ops, acho que você esbarrou na barra de espaço sem querer! Digite algo para pesquisar.</p>"
        return
    };

    campoPesquisa = campoPesquisa.toLowerCase()

    // deixamos o resultados vazio para pdoer encher ele mais tarde com a estrutura HTML que queriamos
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let estiloArtistico = "";
    let nacionalidade = "";
    let tags = "";
  
    // para cada dado dentro da lista de dados, o for vai repetir essa estrutura até acabar a lista
    // Itera sobre cada objeto (artista) no array 'dados'
    for (let dado of dados) {

        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        estiloArtistico = dado.estiloArtistico.toLowerCase()
        nacionalidade = dado.nacionalidade.toLowerCase()
        tags = dado.tags.toLowerCase()


        //se no titulo incluides campoPesquisa então faça....
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || estiloArtistico.includes(campoPesquisa) || nacionalidade.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // Constrói  HTML para cada resultado, formatando os dados do artista
        resultados += `
        <div class="item-resultado">
            <h2> 
            <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <p class="descricao-meta">Seu estilo artístico era ${dado.estiloArtistico}.</p>
            <p class="descricao-meta">Suas obras mais famosas foram ${dado.obrasFamosas}.</p> 
            <p class="descricao-meta">Sua nacionalidade era ${dado.nacionalidade}.</p>
            <p class="descricao-meta">Seu nascimento foi em ${dado.dataNascimento} e sua morte foi em ${dado.dataMorte}.</p>
            <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
        `;
        }
    }
    // esse ! na frente dos resultados quer dizer: "se não houver nada" ou "se estiver vazio" então entraremos no if e faremos a ação
    if (!resultados) {
        resultados = "<p>Nada foi encontrado. Por enquanto, não há nada sobre isso nessa base de dados!</p>"
    }
  
    // Insere o HTML gerado na seção de resultados
    section.innerHTML = resultados;
  };

