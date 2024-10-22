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

  // Referencias para el formulario
  const nameRef = useRef<HTMLInputElement>(null); 
  const lastnameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const [newContact, setNewContact] = useState(contacts);
  
  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault(); 
    
    
    // Creación de un nuevo usuario
    const user = { 
        name: String(nameRef.current?.value), 
        lastname: String(lastnameRef.current?.value),
        email: String(emailRef.current?.value)
    };

    setNewContact([...newContact, user]);
    console.log(newContact)
};


  return (
    <div className="container">
      <Form nameRef={nameRef} lastnameRef={lastnameRef} emailRef={emailRef} onSubmit={handleSubmit}/>
      <Button onClick={handleSubmit}>Nuevo</Button>
      <Table data={newContact}/>
    </div>
  );
}

export default App;
