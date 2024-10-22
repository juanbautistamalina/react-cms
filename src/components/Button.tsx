import { FormEvent, ReactNode } from "react"

type Props = {
    children: ReactNode,
    onClick: (e: FormEvent) => void
}

function Button({children, onClick}: Props) {
  return (
    <button onClick={onClick} type="submit" className="btn btn-primary">{children}</button>
  )
}

export default Button