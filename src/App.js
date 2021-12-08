import React,{useState,useEffect} from 'react';
import axios from 'axios'
import Header from './Header';
import './App.css';
import Pokemon from './componentes/imagens/Pokémon_GO_logo.jpg';
import Bulbasaur from './componentes/imagens/Bulbasaur001.png'
import Ivysaur from './componentes/imagens/Ivysaur002.png'
import Venusaur from './componentes/imagens/Venusaur003.png'
import Charmander from './componentes/imagens/Charmander004.png'
import Charmeleon from './componentes/imagens/Charmeleon005.jpg'
import Charizard from './componentes/imagens/Charizard006.png'
import Butoes from './Butoes';
import Footer from './Footer';


function App () {

const [dados, setDados] = useState([])

useEffect (()=> {
   
axios.get('https://pokeapi.co/api/v2/pokemon/?limit=25')
.then ((response)=> {setDados(response.data.results)})

.catch(()=>{console.log('DEU ERRADO') }) }, [])

return(
    <div> 
        <Header/>
        {dados.map((dado,key) => {
           
        return(
           <div key={key}>
                <h2>       
                    <ul>{dado.name}</ul>
                     <p>{dado.url}</p>
                </h2> 
           </div>
                 );           
             })
            }
             <Butoes/>   
             <Footer/>   
        </div>

     )
}     

export default App