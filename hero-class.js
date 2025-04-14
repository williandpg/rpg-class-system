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

console.log(`O ${meuHeroi.tipo} atacou usando ${meuHeroi.ataque()}`);