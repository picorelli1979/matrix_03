import React from 'react';
import Pokemon from './componentes/imagens/Pokémon_GO_logo.jpg';
import Bulbasaur from './componentes/imagens/Bulbasaur001.png'
import Ivysaur from './componentes/imagens/Ivysaur002.png'
import Venusaur from './componentes/imagens/Venusaur003.png'
import Charmander from './componentes/imagens/Charmander004.png'
import Charmeleon from './componentes/imagens/Charmeleon005.jpg'
import Charizard from './componentes/imagens/Charizard006.png'


function Header(){

  return(

  <div>
          
    <img class = 'BOX' src ={Bulbasaur}  alt = '001' width = '200px'  height = '200px'/>
    <img class = 'BOX' src ={Ivysaur}  alt = '002' width = '200px'  height = '200px'/>
    <img class = 'BOX' src ={Venusaur}  alt = '003' width = '200px'  height = '200px'/>
    <img class = 'BOX' src ={Charmander} alt = '004' width = '200px'  height = '200px'/>
    <img class = 'BOX' src ={Charmeleon}  alt = '005' width = '200px'  height = '200px'/>
    <img class = 'BOX' src ={Charizard}  alt = '006' width = '200px'  height = '200px'/>
      <hr/><hr/>
          
      <h1>
      <img src= {Pokemon} alt='Figura'  width = '500px' height = '200px'/>                   
      </h1>

  </div>

  );

}

export default Header