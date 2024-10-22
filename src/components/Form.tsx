import { FormEvent, RefObject, useRef } from "react";

type Props = {
  nameRef: RefObject<HTMLInputElement>,
  lastnameRef: RefObject<HTMLInputElement>,
  emailRef: RefObject<HTMLInputElement>,
  onSubmit: (e: FormEvent) => void
};

function Form({nameRef, lastnameRef, emailRef, onSubmit}: Props) {
  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Nombre</label>
        <input ref={nameRef} type="text" className="form-control" id="name"/>
      </div>
      <div className="mb-3">
        <label htmlFor="lastname" className="form-label">Apellido</label>
        <input ref={lastnameRef} type="text" className="form-control" id="lastname"/>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Correo</label>
        <input ref={emailRef} type="email" className="form-control" id="email"/>
      </div>
      <button type="submit" className="btn btn-primary">Enviar</button>
    </form>
  );
}

export default Form;
