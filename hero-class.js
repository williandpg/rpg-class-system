class heroi{
  constructor(nome, idade, tipo)
  {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  ataque(){
    if (this.tipo == "mago")
    {
      return "magia";
    } else if (this.tipo == "guerreiro")
    {
      return "espada";
    } else if (this.tipo == "monge")
    {
      return "artes marciais";
    } else if (this.tipo == "ninja")
    {
      return "shuriken";
    } else
    {
      return "não tem ataque";
    }
  }

}

const meuHeroi = new heroi("Gandalf", 1000, "mago");
const meuHeroi2 = new heroi("Aragorn", 87, "guerreiro");
const meuHeroi3 = new heroi("Goku", 30, "monge");
const meuHeroi4 = new heroi("Naruto", 16, "ninja");

console.log(`O ${meuHeroi.tipo} atacou usando ${meuHeroi.ataque()}`);
console.log(`O ${meuHeroi2.tipo} atacou usando ${meuHeroi2.ataque()}`);
console.log(`O ${meuHeroi3.tipo} atacou usando ${meuHeroi3.ataque()}`);
console.log(`O ${meuHeroi4.tipo} atacou usando ${meuHeroi4.ataque()}`);