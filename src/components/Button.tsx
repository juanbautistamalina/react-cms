import { FormEvent, ReactNode } from "react"

type Props = {
    children: ReactNode,
    send?: boolean
    onClick: (e: FormEvent) => void
}

function Button({children, send, onClick}: Props) {
  return (
    <button onClick={onClick} 
            type="submit" 
            className={`btn btn-${send ? "primary" : "secondary"} me-md-3`}>{children}</button>
  )
}

export default Button