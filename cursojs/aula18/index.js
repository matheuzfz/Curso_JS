const pessoa1 = {
    nome: 'Matheus',
    sobrenome: 'Santos',
    idade: 27,
  
    fala() {
      console.log(`A minha idade atual é ${this.idade}.`);
    },
  
    incrementaIdade() {
      this.idade++;
    }
  };
  
  pessoa1.fala();
  pessoa1.incrementaIdade();
  pessoa1.fala();
  pessoa1.incrementaIdade();
  pessoa1.fala();
  pessoa1.incrementaIdade();
  pessoa1.fala();