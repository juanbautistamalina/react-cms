type User = {
  name: string,
  lastname: string,
  email: string
}

type Props = {
  user: User
  setUser: (user: User) => void
};

function Form({user, setUser}: Props) {
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
    </form>
  );
}

export default Form;