import React, { Fragment } from 'react'
import ReactDom from 'react-dom'
//import { ReactFragment } from 'react'
//import Header from './Components/Header'
//import Funcional from './Components/Funcional'
//import Class from './Components/Classe'
//import State from './Components/State'
//import Car from './Components/Car'
//import Contagem from './Components/Contagem'
//import UseState from './Components/UseState'
//import Clock from './Components/LifeCycle'
//import Toggle from './Components/Toggle'
//import Converter from './Components/Converter'
//import Pai from './Components/Pai'
//import Listas from './Components/Listas'
//import AddPersonForm from './Components/AddPersonForm'
//import PeopleList from './Components/PeopleList'
//import ContactManager from './Components/ContactManager'
//const contacts = ["James Smith", "Thomas Anderson", "Bruce Wayne"];
//import CalcNotas from './Components/CalcNotas';
import LoginControl from './Components/LoginControl';

ReactDom.render(
    
    <Fragment> 
    {/*<Header/>
    <Funcional nome="Thalio"/>
    <Class name="Toledo"/>
    <State/>
    <Car/>
    <Contagem/>
    <UseState/>
    <Clock/>
<Toggle/>
<Converter/>
<Pai link="pagina1" menuItem="pagina1"/>
<Listas valores={["A","B","C"]}/>
<ContactManager data={contacts} />
<CalcNotas/>
*/}     
     <LoginControl/>
    
     </Fragment>
    
    ,document.getElementById('root')
);
