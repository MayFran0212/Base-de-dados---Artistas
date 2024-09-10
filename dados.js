let dados = [
    {
      titulo: "Claude Monet",
      descricao: "Pioneiro do Impressionismo, Monet era conhecido por suas paisagens e cenas ao ar livre, capturando a luz natural e as cores vibrantes.",
      link: "https://arteeartistas.com.br/biografia-de-claude-monet/",
      estiloArtistico: "Impressionismo",
      //obrasFamosas não é uma string! É um array, ou seja, não é um "texto" mas sim uma lista de "textos"
      obrasFamosas: ["Nenúfares", "Impressão, sol nascente"],
      nacionalidade: "Francês",
      dataNascimento: "1840-11-26",
      dataMorte: "1926-12-05",
      tags: "água agua frança"
    },
    {
      titulo: "Vincent Van Gogh",
      descricao: "Pintor pós-impressionista holandês, conhecido por suas pinceladas vibrantes e cores intensas, explorando temas como a natureza e a emoção humana.",
      link: "https://arteeartistas.com.br/biografia-de-vincent-van-gogh/", // Adapte o link se necessário
      estiloArtistico: "Pós-Impressionismo",
      obrasFamosas: ["A Noite Estrelada", "Os Girassóis"],
      nacionalidade: "Holandês",
      dataNascimento: "1853-03-30",
      dataMorte: "1890-07-29",
      tags: "holanda"
    },
    {
      titulo: "Michelangelo Buonarroti",
      descricao: "Artista renascentista italiano, mestre da escultura, pintura e arquitetura, conhecido por obras como a estátua de David e o teto da Capela Sistina.",
      link: "https://arteeartistas.com.br/biografia-de-michelangelo-buonarroti/", // Adapte o link se necessário
      estiloArtistico: "Renascimento",
      obrasFamosas: ["David", "Teto da Capela Sistina"],
      nacionalidade: "Italiano",
      dataNascimento: "1475-03-06",
      dataMorte: "1564-02-18",
      tags: "escultor itália italia"
    },
    {
        titulo: "Pablo Picasso",
        descricao: "Artista espanhol que revolucionou a arte do século XX com suas diversas fases e estilos, como o Cubismo e o Surrealismo.",
        link: "https://arteeartistas.com.br/biografia-de-pablo-picasso/",
        estiloArtistico: "Cubismo, Surrealismo",
        obrasFamosas: ["Guernica", "Les Demoiselles d'Avignon"],
        nacionalidade: "Espanhol",
        dataNascimento: "1881-10-25",
        dataMorte: "1973-04-08",
        tags: "espanha"
    },
    {
        titulo: "William Turner",
        descricao: "Pintor paisagista inglês, conhecido por suas paisagens marinhas e céus dramáticos, utilizando cores vibrantes e pinceladas soltas.",
        link: "https://arteeartistas.com.br/biografia-de-william-turner/", // Adapte o link se necessário
        estiloArtistico: "Romantismo",
        obrasFamosas: ["A Tempestade", "O Navio Negreiro"],
        nacionalidade: "Inglês",
        dataNascimento: "1775-04-23",
        dataMorte: "1851-12-19",
        tags: "mar agua água britânco britanico inglaterra"
    },
    {
        titulo: "Eugène Delacroix",
        descricao: "Pintor francês, um dos principais expoentes do Romantismo, conhecido por suas obras históricas e cenas dramáticas, com cores vibrantes e pinceladas expressivas.",
        link: "https://arteeartistas.com.br/biografia-de-eugene-delacroix/", // Adapte o link se necessário
        estiloArtistico: "Romantismo",
        obrasFamosas: "A Liberdade Guiando o Povo",
        nacionalidade: "Francês",
        dataNascimento: "1798-04-26",
        dataMorte: "1863-08-13",
        tags: "frança"
    },
    {
    titulo: "Gustave Courbet",
    descricao: "Pintor realista francês, conhecido por suas representações realistas da vida cotidiana e da natureza, desafiando as convenções artísticas da época.",
    link: "https://arteeartistas.com.br/biografia-de-gustave-courbet/", // Adapte o link se necessário
    estiloArtistico: "Realismo",
    obrasFamosas: ["O Adeus", "Um enterro em Ornans"],
    nacionalidade: "Francês",
    dataNascimento: "1819-06-10",
    dataMorte: "1877-12-31",
    tags: "frança"
  },
  {
    titulo: "Caspar David Friedrich",
    descricao: "Pintor romântico alemão, conhecido por suas paisagens melancólicas e introspectivas, explorando a relação entre o homem e a natureza.",
    link: "https://arteeartistas.com.br/biografia-de-caspar-david-friedrich/", // Adapte o link se necessário
    estiloArtistico: "Romantismo",
    obrasFamosas: "O Viajante acima do Mar de Névoa",
    nacionalidade: "Alemão",
    dataNascimento: "1774-09-05",
    dataMorte: "1840-07-07",
    tags: "alemanha"
  },
  {
    titulo: "Jean-Honoré Fragonard",
    descricao: "Pintor rococó francês, conhecido por suas pinturas leves e alegres, retratando cenas da vida aristocrática e temas amorosos.",
    link: "https://arteeartistas.com.br/biografia-de-jean-honore-fragonard/", // Adapte o link se necessário
    estiloArtistico: "Rococó",
    obrasFamosas: "O Balanço",
    nacionalidade: "Francês",
    dataNascimento: "1732-04-05",
    dataMorte: "1806-08-22",
    tags: "frança"
  },
  {
    titulo: "Jean-François Millet",
    descricao: "Pintor realista francês, conhecido por suas cenas da vida rural, retratando o trabalho dos camponeses e a beleza da natureza.",
    link: "https://arteeartistas.com.br/biografia-de-jean-francois-millet/", // Adapte o link se necessário
    estiloArtistico: "Realismo",
    obrasFamosas: "Os Espigadores",
    nacionalidade: "Francês",
    dataNascimento: "1814-10-04",
    dataMorte: "1875-01-20",
    tags: "frança"
  },
  {
    titulo: "Jean-Honoré Fragonard",
    descricao: "Pintor rococó francês, conhecido por suas pinturas leves e alegres, retratando cenas da vida aristocrática e temas amorosos.",
    link: "https://arteeartistas.com.br/biografia-de-jean-honore-fragonard/", // Adapte o link se necessário
    estiloArtistico: "Rococó",
    obrasFamosas: "O Balanço",

    nacionalidade: "Francês",
    dataNascimento: "1732-04-05",
    dataMorte: "1806-08-22",
    tags: "frança"
  },
  {
    titulo: "Jean-François Millet",
    descricao: "Pintor realista francês, conhecido por suas cenas da vida rural, retratando o trabalho dos camponeses e a beleza da natureza.",
    link: "https://arteeartistas.com.br/biografia-de-jean-francois-millet/", // Adapte o link se necessário
    estiloArtistico: "Realismo",
    obrasFamosas: "Os Espigadores",
    nacionalidade: "Francês",
    dataNascimento: "1814-10-04",
    dataMorte: "1875-01-20",
    tags: "frança"
  },
  {
    titulo: "Wassily Kandinsky",
    descricao: "Pioneiro da arte abstrata, Kandinsky explorou a cor e a forma para criar composições não figurativas, influenciado pela música.",
    link: "https://arteeartistas.com.br/biografia-de-wassily-kandinsky/", // Adapte o link se necessário
    estiloArtistico: "Abstracionismo",
    obrasFamosas: ["Composição VII", "Improvisação 28"],
    nacionalidade: "Russo",
    dataNascimento: "1866-12-04",
    dataMorte: "1944-12-13",
    tags: "russia rússia"
  },
  {
    titulo: "Paul Signac",
    descricao: "Pintor neo-impressionista francês, conhecido por suas pinturas pontilhistas, utilizando pequenas pinceladas de cores puras para criar a imagem.",
    link: "https://arteeartistas.com.br/biografia-de-paul-signac/", // Adapte o link se necessário
    estiloArtistico: "Neo-Impressionismo",
    obrasFamosas: "Porto em Saint-Tropez",
    nacionalidade: "Francês",
    dataNascimento: "1863-11-11",
    dataMorte: "1935-08-15",
    tags: "frança"
  },
  {
    titulo: "Candido Portinari",
    descricao: "Pintor brasileiro conhecido por suas obras que retratam a realidade social do Brasil, com destaque para a vida no campo e a luta dos trabalhadores.",
    link: "https://arteeartistas.com.br/biografia-de-candido-portinari/",
    estiloArtistico: "Realismo social",
    obrasFamosas: ["Guerra e Paz", "Mãe", "Retirantes"],
    nacionalidade: "Brasileiro",
    dataNascimento: "1903-12-31",
    dataMorte: "1962-06-06",
    tags: "brasil"
  },
  {
    titulo: "Sandro Botticelli",
    descricao: "Pintor renascentista italiano, conhecido por suas obras de beleza idealizada e mitológica, como a Vênus.",
    link: "https://arteeartistas.com.br/biografia-de-sandro-botticelli/", // Adapte o link se necessário
    estiloArtistico: "Renascimento",
    obrasFamosas: "O Nascimento de Vênus",
    nacionalidade: "Italiano",
    dataNascimento: "1445-05-01",
    dataMorte: "1510",
    tags: "italia itália"
  },
  {
    titulo: "Pieter Bruegel",
    descricao: "Pintor renascentista flamengo, conhecido por suas paisagens detalhadas e cenas da vida rural, com um toque de humor e sátira.",
    link: "https://arteeartistas.com.br/biografia-de-pieter-bruegel/", // Adapte o link se necessário
    estiloArtistico: "Renascimento",
    obrasFamosas: "A Torre de Babel",
    nacionalidade: "Flemish",
    dataNascimento: "1525-1530",
    dataMorte: "1569",
    tags: "holandês holandes holanda"
  }, 
  {
    titulo: "Caravaggio",
    descricao: "Pintor barroco italiano, conhecido por suas obras com forte realismo e contraste de luz e sombra, retratando cenas bíblicas e mitológicas.",
    link: "https://arteeartistas.com.br/biografia-de-caravaggio/", // Adapte o link se necessário
    estiloArtistico: "Barroco",
    obrasFamosas: ["A Vocação de São Mateus", "Judith e Holofernes"],
    nacionalidade: "Italiano",
    dataNascimento: "1571-1573",
    dataMorte: "1610-07-18",
    tags: "italia itália"
  },
  {
    titulo: "Paul Cézanne",
    descricao: "Pintor pós-impressionista francês, conhecido por suas paisagens e naturezas mortas, explorando a estrutura geométrica das formas.",
    link: "https://arteeartistas.com.br/biografia-de-paul-cezanne/", // Adapte o link se necessário
    estiloArtistico: "Pós-Impressionismo",
    obrasFamosas: "As Grandes Banhistas",
    nacionalidade: "Francês",
    dataNascimento: "1839-01-19",
    dataMorte: "1906-10-22",
    tags: "frança"
  },
  {
    titulo: "Johannes Vermeer",
    descricao: "Pintor holandês do século XVII, conhecido por suas cenas de gênero interior, com uma luz suave e cores delicadas.",
    link: "https://arteeartistas.com.br/biografia-de-johannes-vermeer/", // Adapte o link se necessário
    estiloArtistico: "Barroco",
    obrasFamosas: "Moça com Brinco de Pérola",
    nacionalidade: "Holandês",
    dataNascimento: "1632",
    dataMorte: "1675",
    tags: "holanda holandes"
  },
  {
    titulo: "Edgar Degas",
    descricao: "Pintor impressionista francês, conhecido por suas pinturas de bailarinas, cenas da vida parisiense e retratos.",
    link: "https://arteeartistas.com.br/biografia-de-edgar-degas/", // Adapte o link se necessário
    estiloArtistico: "Impressionismo",
    obrasFamosas: "A Classe de Dança",
    nacionalidade: "Francês",
    dataNascimento: "1834-07-19",
    dataMorte: "1917-09-27",
    tags: "frança"
  },
  {
    titulo: "René Magritte",
    descricao: "Pintor surrealista belga, conhecido por suas obras com imagens irreais e enigmáticas, desafiando a percepção e a lógica.",
    link: "https://arteeartistas.com.br/biografia-de-rene-magritte/", // Adapte o link se necessário
    estiloArtistico: "Surrealismo",
    obrasFamosas: "O Filho do Homem",
    nacionalidade: "Belga",
    dataNascimento: "1898-11-21",
    dataMorte: "1967-08-15",
    tags: "belgica bélgica"
  },
  {
    titulo: "Rafael Sanzio",
    descricao: "Pintor renascentista italiano, conhecido por suas Madonas e frescos nas Estâncias de Rafael no Vaticano.",
    link: "https://arteeartistas.com.br/biografia-de-rafael-sanzio/",
    estiloArtistico: "Renascimento",
    obrasFamosas: ["A Escola de Atenas", "A Transfiguração"],
    nacionalidade: "Italiano",
    dataNascimento: "1483-03-06",
    dataMorte: "1520-04-06",
    tags: "itália italia"
  },
  {
    titulo: "Rembrandt van Rijn",
    descricao: "Pintor barroco holandês, conhecido por seus autorretratos e por dominar a técnica do claro-escuro.",
    link: "https://arteeartistas.com.br/biografia-de-rembrandt-van-rijn/",
    estiloArtistico: "Barroco",
    obrasFamosas: "A Ronda Noturna",
    nacionalidade: "Holandês",
    dataNascimento: "1606-07-15",
    dataMorte: "1669-10-04",
    tags: "holanda"
  },
  {
    titulo: "Toulouse-Lautrec",
    descricao: "Pintor pós-impressionista francês, conhecido por seus cartazes e pinturas de cenas da vida noturna parisiense.",
    link: "https://arteeartistas.com.br/biografia-de-toulouse-lautrec/",
    estiloArtistico: "Pós-Impressionismo",
    obrasFamosas: "O Moulin Rouge",
    nacionalidade: "Francês",
    dataNascimento: "1864-11-24",
    dataMorte: "1901-09-09",
    tags: "frança"
  },
  {
    titulo: "Auguste Renoir",
    descricao: "Pintor impressionista francês, conhecido por suas pinturas de figuras humanas em ambientes ao ar livre, com cores vibrantes e pinceladas soltas.",
    link: "https://arteeartistas.com.br/biografia-de-auguste-renoir/",
    estiloArtistico: "Impressionismo",
    obrasFamosas: "Almoço no Bateau-Lavoir",
    nacionalidade: "Francês",
    dataNascimento: "1841-02-25",
    dataMorte: "1919-12-03",
    tags: "frança"
  },
  {
    titulo: "Berthe Morisot",
    descricao: "Pioneira impressionista, Morisot era conhecida por suas pinturas delicadas, retratando cenas da vida cotidiana e retratos.",
    link: "https://arteeartistas.com.br/biografia-de-berthe-morisot/",
    estiloArtistico: "Impressionismo",
    obrasFamosas: "Mulher com Buquê",
    nacionalidade: "Francesa",
    dataNascimento: "1841-01-14",
    dataMorte: "1895-02-02",
    tags: "frança"
  },
  {
    titulo: "Leonardo da Vinci",
    descricao: "Gênio do Renascimento, Leonardo era conhecido por suas pinturas, esculturas, invenções e estudos científicos.",
    link: "https://arteeartistas.com.br/biografia-de-leonardo-da-vinci/",
    estiloArtistico: "Renascimento",
    obrasFamosas: "Mona Lisa",
    nacionalidade: "Italiano",
    dataNascimento: "1452-04-15",
    dataMorte: "1519-05-02",
    tags: "itália italia"
  },
  {
    titulo: "Salvador Dalí",
    descricao: "Pintor surrealista espanhol, conhecido por suas imagens oníricas e distorcidas, explorando o subconsciente.",
    link: "https://arteeartistas.com.br/biografia-de-salvador-dali/",
    estiloArtistico: "Surrealismo",
    obrasFamosas: "A Persistência da Memória",
    nacionalidade: "Espanhol",
    dataNascimento: "1904-05-11",
    dataMorte: "1989-01-23",
    tags: "espanha"
  },
  {
    titulo: "Gustav Klimt",
    descricao: "Pintor simbolista austríaco, conhecido por suas pinturas exuberantes e cheias de ornamentos, explorando temas como a sexualidade e a morte.",
    link: "https://arteeartistas.com.br/biografia-de-gustav-klimt/",
    estiloArtistico: "Simbolismo",
    obrasFamosas: "O Beijo",
    nacionalidade: "Austríaco",
    dataNascimento: "1862-07-14",
    dataMorte: "1918-06-06",
    tags: "austria áustria"
  },
  {
    titulo: "Frida Kahlo",
    descricao: "Pintora mexicana, conhecida por seus autorretratos intensos e pela exploração de temas como a identidade, a dor e a política.",
    link: "https://arteeartistas.com.br/biografia-de-frida-kahlo/",
    estiloArtistico: "Surrealismo",
    obrasFamosas: "As Duas Fridas",
    nacionalidade: "Mexicana",
    dataNascimento: "1907-07-06",
    dataMorte: "1954-07-13",
    tags: "méxico mexico"
  }
  ];