import React, {useState} from 'react';
import Nota from './Nota';
import Resultado from './Resultado';


export default function CalcNotas(){
    const [nota1,setNota1]=useState(0)
    const [nota2,setNota2]=useState(0)
    const [nota3,setNota3]=useState(0)
    const [nota4,setNota4]=useState(0)

 
   

    return (
        <>
            <Nota num={1} nota={nota1} mudarNota={setNota1}/>
            <Nota num={2} nota={nota2} mudarNota={setNota2}/>
            <Nota num={3} nota={nota3} mudarNota={setNota3}/>
            <Nota num={4} nota={nota4} mudarNota={setNota4}/>
            <Resultado somaNotas={(parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3)+parseFloat(nota4))/4} 
                 verific={10}
            />

        </>
    );
}