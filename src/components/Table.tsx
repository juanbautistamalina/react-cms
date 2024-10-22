import { useState } from "react";

type Contact = {
  name: string,
  lastname: string,
  email: string
};

type Props = {
  data: Contact[];
};

function Table({ data }: Props) {
  
  const [contact, setContact] = useState(data);
  const [ index, setIndex ] = useState(-1);

  const deleteItem = (i: number) => {
    setIndex(i); // Seteo el índice del elemento que se presiona
    const newContact = [...contact]; // Creo una copia de la variable de estado
    newContact.splice(i, 1); // Elimino el elemento presionado del array (copia de variable de estado)
    const newContacts = [...newContact];
    setContact(newContacts);
  };


  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        {contact.map((elemento, index) => (
          <tr onClick={() => deleteItem(index)} key={index}>
            <td>{elemento.name}</td>
            <td>{elemento.lastname}</td>
            <td>{elemento.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
