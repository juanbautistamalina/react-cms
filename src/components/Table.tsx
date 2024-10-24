type Contact = {
  name: string,
  lastname: string,
  email: string,
  tipo: string
};

type Props = {
  data: Contact[];
  onDelete: (i: number) => void
};

function Table({ data, onDelete }: Props) {
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Email</th>
          <th scope="col">Tipo</th>
        </tr>
      </thead>
      <tbody>
        {data.map((elemento, index) => (
          <tr onClick={() => onDelete(index)} key={index}>
            <td>{elemento.name}</td>
            <td>{elemento.lastname}</td>
            <td>{elemento.email}</td>
            <td>{elemento.tipo}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
