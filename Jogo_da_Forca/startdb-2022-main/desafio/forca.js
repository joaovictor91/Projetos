class Forca {
  
  palavracerta="abacaxi";
  palavra=[];
  verifica=false;
  vidas=6;
  letrasChutadas=[];
  
  chutar(letra) {
    if (letra.length != 1) {
      console.log('Informe apenas uma letra \n');
      console.log('Aqui foi informado ',letra,'e possui ',letra.length,'letras \n');
      return;
    }
    

    //Adicionando a letra na posiçãoe adicionar a letra
      for (let i=0; i<this.palavracerta.length; i++)
      {
        if (letra == this.palavracerta[i]){
          
          this.verifica=true;
        }
      }
      //Condição para vida se vai perder ou manter
      if (this.verifica==true){
        //Condição se a letra estiver repetida
        if (this.palavra.includes(letra) == true){
          console.log('Essa letra já foi utilizada  \n');
          this.verifica=false;
          return;
        }
        //Condição se a letra não estiver reptida
        else{
          
          for (let i=0; i<this.palavracerta.length; i++)
          {
            if (letra == this.palavracerta[i]){
              this.palavra[i]=letra;
              
            }
          }
          
          this.verifica=false;
        }
        
        return this.verifica;
      }
      else
      {
        //Condição se a letra estiver repetida
        if (this.letrasChutadas.includes(letra) == true){
          console.log('Essa letra já foi utilizada  \n');
          
          return;
        }
        //Condição se a letra não estiver reptida
        else {
          
          this.vidas=this.vidas-1;
          this.letrasChutadas.push(letra);
        }
        
        return this.vidas;
        
      }
    
    
  }

  buscarEstado() { 
    //Adicionando as condições para a palavra
    if (this.palavra.length != this.palavracerta.length)
    {
      for (let i=0; i<this.palavracerta.length; i++)
        {
          this.palavra.push('_');
        }

    }
    ///Condição de perdeu 
    if (this.vidas == 0){
      return "perdeu";
    }
    ///Condição de venceu
    else if (this.palavracerta == this.palavra.toString().replaceAll(",","")) {
      return "ganhou";
    }
    
} // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
      return {
          
          letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
          vidas: this.vidas, // Quantidade de vidas restantes
          palavra: this.palavra, // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
          
      }
  }
}

module.exports = Forca;
