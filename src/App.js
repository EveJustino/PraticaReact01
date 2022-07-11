// Crie uma class component 
// Guarde em um state as seguintes propriedades: nome, idade, comida favorita, e uma array com pelo menos 3 músicas.
// Renderize na tela:
// Seu nome em um h1
// Sua idade em um h2
// Sua comida favorita em um h3
// Suas músicas favoritas em uma lista (ul / ol)


//**Bônus
// Adicione uma imagem da sua fruta favorita via import

import React from "react";
import manga from './manga.webp'

export default class Things extends React.Component{
state={
  nome: 'Evelyn',
  idade: 27,
  comidaFavorita: 'nhoque',
  musicas: ['Mel', 'Bonita de costas', 'Azul'],
}  
  
  render(){
    return(
      <div>
        <h1>{this.state.nome}</h1>
        <h2>{this.state.idade}</h2>
        <h3>{this.state.comidaFavorita}</h3>
        <ol>
          <li>{this.state.musicas[0]}</li>
          <li>{this.state.musicas[1]}</li>
          <li>{this.state.musicas[2]}</li>
        </ol>
        <img src={manga} alt='fruta manga' />
      </div>  
    )
  }
}



