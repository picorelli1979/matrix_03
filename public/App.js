import React from "react";
import Luz from "./Luz";
import Energia from "./Energia";

function App (){
    
  return(
           <div>
               <h1>CRIANDO COMPONENTES CONSTRUTORES</h1>

               <Luz  Arco = "Projeto de Energia 1"/>

               <Energia Projeto ='ILUMINAÇÃO'/>
             
            </div>
            
    );
}

export default App

/////////////////////////////////////////////////////////////////////////////////
/*
function App (){

  const[ nome, setNome]=useState()

         const armazenar=(X,Z)=> {
     
                              localStorage.setItem(X,Z)
  } 

         const consultar=(X)=>{

                             alert(localStorage.getItem(X))
  }

         const apagar=(X)=>{

                             localStorage.removeItem(X)

   }
  
    return (

            <>
                  <label>DIGITE UM NOME</label>
                  <br/>
                  <input type = "text" value= {nome}  onChange={(e)=>setNome(e.target.value)}/>
                  <button onClick={()=>armazenar("ls_nome", nome)}> CARREGAR NOME </button> 
                  <button onClick={()=>consultar("ls_nome")}> CONSULTAR NOME </button>
                  <button onClick={()=>apagar("ls_nome")}> REMOVER NOME </button>
            </>                
    );

    }

export default App
*/

//////////////////////////////////////////////////////////////////////////////////////////////////
/*
function App () {

  const [form,setForm]=useState({nome:"",sobrenome:"",email:"",telefone:"",idade:""})  

  const handlFormChenge=(e)=> {
      if (e.target.getAttribute ('name')== "fnome")
      setForm({"nome": e.target.value,"sobrenome": form.sobrenome, "email": form.email, "telefone": form.telefone, "idade": form.idade})
      else if (e.target.getAttribute ('name')=="fsobrenome")
      {setForm ({"nome": form.nome,"sobrenome":e.target.value, "email": form.email, "telefone": form.telefone, "idade": form.idade})}
      else if (e.target.getAttribute ('name')=="femail")
      {setForm({"nome": form.nome,"sobrenome":form.sobrenome, "email":e.target.value, "telefone": form.telefone, "idade": form.idade})}
      else if (e.target.getAttribute ('name')=="ftelefone")
      {setForm({"nome": form.nome,"sobrenome":form.sobrenome, "email": form.email, "telefone":e.target.value, "idade": form.idade})}
      else if (e.target.getAttribute ('name')=="fidade")
      {setForm({"nome": form.nome,"sobrenome":form.sobrenome, "email": form.email, "telefone": form.telefone, "idade":e.target.value})}
  }

 return(
         <>
         <h1>CADASTRE-SE AGORA EM NOSSA PLATAFORMA</h1>
         <br/>
         <br/>
         <label>NOME</label>
         <input type="text" name= "fnome" width= '100px' height='100px' 
         value={form.nome}
         onChange={(e)=> handlFormChenge(e)}/>
         <br/>
         <label>SOBRENOME</label>
         <input type="text" name= "fsobrenome" width= '100px' height='100px' 
         value={form.sobrenome}
         onChange={(e)=>handlFormChenge(e)}/>
         <br/>
         <label>EMAIL</label>
         <input type="text" name= "femail" width= '100px' height='100px' 
         value={form.email}
         onChange={(e)=>handlFormChenge(e)}/>
         <br/>
         <label>TELEFONE</label>
         <input type="text" name= "ftelefone" width= '100px' height='100px' 
         value={form.telefone}
         onChange={(e)=>handlFormChenge(e)}/>
         <br/>
         <label>IDADE</label>
         <input type="text" name= "fidade" width= '100px' height='100px' 
         value={form.idade}
         onChange={(e)=>handlFormChenge(e)}/>

         <p> NOME: {form.nome} </p>
         <p> SOBRENOME : {form.sobrenome} </p>
         <p> EMAIL : {form.email} </p>
         <p> TELEFONE: {form.telefone} </p>
         <p> QUAL HÁ SUA IDADE: {form.idade} </p>
         
        </>         

 );
}

export default App
*/
///////////////////////////////////////////////////////////////////////////////
/*
function App () {

   const [nome,setNome] = useState('') 
   const [carro,setCarro] = useState ('BMW')

  return(
          <>
          <label>DIGITE SEU NOME</label>
          <br/>
          <br/>
          <input text="texto" id= "fnome" width= '100px' height='100px' 
          value={nome}
          onChange={(e)=>setNome(e.target.value)}/>

          <p> NOME DIGITADO:   {nome} </p>

          <br/>
          <br/>
          <label>SELECIONE UM VEICULO</label>
          
          <select  value= {carro} onChange={(e)=>setCarro(e.target.value)}>
             <option  value= "MERCEDEZ">MERCEDEZ</option>
             <option  value= "AUDI">AUDI</option>
             <option  value= "TUCSON">TUCSON</option>
             <option  value= "HYLUX">HYLUX</option>           
          </select>

          <p> CARRO SELECIONADO:   {carro} </p>

          </>

  );
}

export default App
*/
////////////////////////////////////////////////////////////////////////////
/*
function App () {

  const carros = [
    
    { MARCA: 'BMW', ANO: '2018', MODELO: 'ESPORTE', PREÇO: 'R$ 150.000,00'},
    { MARCA: 'PORSCHE', ANO: '2017', MODELO: 'ESPORTE', PREÇO: 'R$ 350.000,00'},
    { MARCA: 'ASX', ANO: '2015', MODELO: 'SUV',     PREÇO: 'R$ 50.000,00'},
    { MARCA: 'AMAROK', ANO: '2018', MODELO: 'UTILITARIO', PREÇO: 'R$ 98.000,00'},
    { MARCA: 'NEXCITY', ANO: '2019', MODELO: 'ESPORTE', PREÇO: 'R$ 80.000,00'},
    { MARCA: 'COROLLA', ANO: '2020', MODELO: 'ESPORTE', PREÇO: 'R$ 115.000,00'},
    { MARCA: 'TORO', ANO: '2016', MODELO: 'UTILITARIO', PREÇO: 'R$ 90.000,00'},
    { MARCA: 'IX35', ANO: '2015', MODELO: 'SUV', PREÇO: 'R$ 45.000,00'},

  ];

  const listaCarros = carros.map(
   (c)=>        
        <li>{c. MARCA} - {c.ANO} - {c.MODELO} - {c.PREÇO}</li>
  );

return (

     <>
     <h1> LISTA DE VEICULOS PARA VENDA</h1>
     <ul>{listaCarros}</ul> 
     </>

);

}
export default App 
*/
///////////////////////////////////////////////////////////////////
/*

function App () {

  const [cor,setcor]=useState(1)

  const vermelho={color:'red'}
  const laranja={color:'orange'}
  const azul={color:'blue'}
   
  const RetnCor =(c)=> {
   if (c==1) {
     return vermelho
    } else if (c==2){
      return laranja
    }
   else {return azul}
  }

  const MudarCor =()=>{
    setcor(cor + 1)
    if (cor > 2) {
     setcor(1)
    }  
  }

  return (

    <>
      <h1 style={RetnCor(cor)}>JAMILE ARAUJO CATEL PICORELLI</h1>
                  
      <button onClick={()=>MudarCor()}>MUDAR DE COR</button>
    </>
  );

} 
export default App
*/


/////////////////////////////////////////////////////////////////////
/*
function App() {

    const saudação =()=>{
    
      const hora = new Date().getHours()
        
      if (hora >=0 && hora < 13){
       return <p> BOM DIA !!!</p>
      } else if (hora > 13 && hora <18){
        return <p> BOA TARDE !!!</p>
      } else {
          return <p>BOA NOITE !!!</p>
      }
      
    }
     return (

        <h1>{saudação ()}</h1>

            );

}

export default App

*/
////////////////////////////////////////////////////////////////////
// EXERCICIO  DE LIGADO E DESLIGADO 

/*

import React,{useState} from "react";
import Led from "./componentes/Led";

function App (){

  const [ligado,setLigado]=useState(false)

 return (
   <>
      <Led/>  
   </>
 );

}

export default App
*/

/////////////////////////////////////////////////////////////

//EXERCIO DE SOMA DE NUMEROS //////////////////////

/*
import React, {useState} from "react";

function App () {

  const [num,setNum]=useState(10)

return (
  <>
  <h1> O VALOR DE UM NÚMERO: {num}</h1>
  <button onClick={()=>setNum(num+10)}>CLICAR PARA ADICIONAR</button>
  </>
  );
}

export default App;
*/