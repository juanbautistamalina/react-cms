import { useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";
import Button from "./components/Button";

function App() {
  const initialContacts = [
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
    },
  ];


  // Variable para limpiar campos
  const userClear = {
    name: "",
    lastname: "",
    email: "",
  };

  
  // Variables de estado del usuario (Formulario)
  const [user, setUser] = useState(userClear);

  // Variables de estado del contacto (Tabla)
  const [contacts, setContacts] = useState(initialContacts);



  // Función que se ejecuta al presionar el botón de Enviar
  const handleSubmit = () => {
    setContacts([user, ...contacts]); // Agregar el nuevo usuario
  };

  // Función que se ejecuta al presionar sobre los elementos de la lista (borrar items)
  const handleDelete = (index: number) => {
    const newContact = [...contacts]; // Creo una copia de la variable de estado
    newContact.splice(index, 1); // Elimino el elemento presionado del array 
    setContacts(newContact); // Actualizo la variable de estado (contacts)
  };

  return (
    <div className="container">
      <Form user={user} setUser={setUser} />
      <Button onClick={handleSubmit} send={true}>Enviar</Button>
      <Button onClick={() => setUser(userClear)}>Limpiar</Button>
      <Table data={contacts} onDelete={handleDelete}/>
    </div>
  );
}

export default App;
