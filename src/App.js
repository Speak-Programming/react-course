import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useEffect,useState} from 'react';
import { isPolindrom } from './function/functions.ts';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function App() {

  const [textArrea, setTextArea] = useState("Valoare initiala ");
  const [chackResult,setCheckResult ] = useState(false)


 const chackIfWordIsPolindrom = ()=>{
  const result = isPolindrom(textArrea);

  if(result) {
    alert("Cuvantul introdus este polindrom");
  } else{
    alert("Cuvantul introdus nu este polindrom");
  }

 }

  return (
    <div className="App">
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Verifica daca cuvantul introdus este polindorm.</Form.Label>
        <Form.Control as="textarea" rows={2}
        onChange ={(e)=>{setTextArea(e.target.value)}}
        />
      </Form.Group>
    </Form>
    <Button variant="primary"
    onClick = {chackIfWordIsPolindrom}
    
    >Verifica</Button>{' '}
    </div>
  );
}

export default App;
