import type {ReactNode, MouseEventHandler} from 'react'
import './Button.css'

type ButtonProps = {
  children?: ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
}

function Button({children, onClick}: ButtonProps) {
  return (
    <button className="btn-style" onClick={onClick}>{children}</button>
  )
}

export default Button
