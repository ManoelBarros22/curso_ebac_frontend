class Titulo {
    constructor (nome, genero, classificacao, anoDeLancamento) {
    this.nome = nome;
    this.genero = genero;
    this.classificacao = classificacao;
    this.anoDeLancamento = anoDeLancamento;
    }
}

class Filme extends Titulo{
    constructor (nome, genero, classificacao, anoDeLancamento, duracao, diretor) {
        super(nome, genero, classificacao, anoDeLancamento);
        this.duracao = duracao;
        this.diretor = diretor;
    }
}

class Serie extends Titulo{
    constructor (nome, genero, classificacao, anoDeLancamento, temporadas, numeroDeEpisodios){
        super(nome, genero, classificacao, anoDeLancamento)
        this.temporadas = temporadas;
        this.numeroDeEpisodios = numeroDeEpisodios;
    }
}

const reiLeao = new Filme ("Rei Leão", "Infantil", "Livre", 2019,120, "Jon Favreau");
const todaVelocidade = new Filme ("A Toda Velocidade", "Drama/Esporte", "+12", 1996,86, "Gael Morel");
const oAlpinista = new Serie ("O Alpinista", "Documentários", "+16",2021 , 4, 60);

console.log(reiLeao);
console.log(todaVelocidade);
console.log(oAlpinista);