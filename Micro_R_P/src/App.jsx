/* eslint-disable no-unused-vars */
import './App.css';
import axios from "axios";
import { useState, useEffect } from 'react';

function App() {
  const [body, setBody] = useState('')
// aqui possuem o servidor de solicitação para solicitar valido para o back também
  useEffect ( () => {
    axios
       .get("http://localhost:7777/get_data")
       .then( (response) => {
           const data = response.data;
           setBody(data['body'])
       })
       .catch( (_e) => {
           console.log("Solicitação Invalida !!!");
       })
  }, [])

  return (
    <>
   <div>
    {body}
   </div>
    </>
  )
}

export default App
