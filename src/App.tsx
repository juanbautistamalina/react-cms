import { FormEvent, useRef, useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";
import Button from "./components/Button";

function App() {
  const contacts = [
    {
      name: "Juan Bautista",
      lastname: "Malina",
      email: "malinajuanbautista@gmail.com",
    },
    {
      name: "Simón",
      lastname: "Malina",
      email: "simonmalina@gmail.com",
    },
    {
      name: "David",
      lastname: "Goggins",
      email: "davidgoggins@gmail.com",
    }
  ];

  const [user, setUser] = useState({
    name: "nombre",
    lastname: "apellido",
    email: "email@ejemplo.com"
  });

  const userClear = {
    name: "",
    lastname: "",
    email: ""
  }

  const [newContact, setNewContact] = useState(contacts);
  
  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault(); 
    
    setNewContact([...newContact, user]);
    console.log(newContact)
};


  return (
    <div className="container">
      <Form user={user} onSubmit={handleSubmit} setUser={setUser}/>
      <Button onClick={handleSubmit} send={true} >Enviar</Button>
      <Button onClick={() => setUser(userClear)}>Limpiar</Button>
      <Table data={newContact}/>
    </div>
  );
}

export default App;
