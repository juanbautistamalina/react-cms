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
      tipo: "Familiar"
    },
    {
      name: "Simón",
      lastname: "Malina",
      email: "simonmalina@gmail.com",
      tipo: "Familiar"
    },
    {
      name: "David",
      lastname: "Goggins",
      email: "davidgoggins@gmail.com",
      tipo: "Amigo"
    },
  ];

  // Opciones del input select
  const options = [" -- Seleccionar tipo --", "Familiar", "Trabajo", "Amigo", "Otros"]


  // Variable para limpiar campos
  const userClear = {
    name: "",
    lastname: "",
    email: "",
    tipo: ""
  };

  
  // Variables de estado del usuario (Formulario)
  const [user, setUser] = useState(userClear);

  // Variables de estado del contacto (Tabla)
  const [contacts, setContacts] = useState(initialContacts);



  // Función que se ejecuta al presionar el botón de Enviar
  const handleSubmit = () => {
    setContacts([user, ...contacts]); // Agregar el nuevo usuario
    console.log(user);
    console.log("Tipo: ", user.tipo);
  };

  // Función que se ejecuta al presionar sobre los elementos de la lista (borrar items)
  const handleDelete = (index: number) => {
    const newContact = [...contacts]; // Creo una copia de la variable de estado
    newContact.splice(index, 1); // Elimino el elemento presionado del array 
    setContacts(newContact); // Actualizo la variable de estado (contacts)
  };

  return (
    <div className="container">
      <Form user={user} setUser={setUser} options={options} />
      <Button onClick={handleSubmit} send={true}>Enviar</Button>
      <Button onClick={() => setUser(userClear)}>Limpiar</Button>
      <Table data={contacts} onDelete={handleDelete}/>
    </div>
  );
}

export default App;
