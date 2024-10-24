type User = {
  name: string,
  lastname: string,
  email: string,
  tipo: string
}

type Props = {
  user: User
  setUser: (user: User) => void,
  options: string[]
};

function Form({user, setUser, options}: Props) {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Nombre</label>
        <input value={user.name} onChange={e => setUser({...user, name: e.target.value})}  type="text" className="form-control" id="name"/>
      </div>
      <div className="mb-3">
        <label htmlFor="lastname" className="form-label">Apellido</label>
        <input value={user.lastname} onChange={e => setUser({...user, lastname: e.target.value})} type="text" className="form-control" id="lastname"/>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Correo</label>
        <input value={user.email} onChange={e => setUser({...user, email: e.target.value})} type="email" className="form-control" id="email"/>
      </div>
      <div className="mb-3">
        <select onChange={e => setUser({...user, tipo: e.target.value})} className="form-select">
          <option> -- Selecciona tipo -- </option>
          <option value={options[1]}>Familiar</option>
          <option value={options[2]}>Trabajo</option>
          <option value={options[3]}>Amigo</option>
          <option value={options[4]}>Otros</option>
        </select>
      </div>
      
    </form>
  );
}

export default Form;