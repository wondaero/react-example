import { memo, type ReactNode } from 'react'

type HeaderProps = {
  children?: ReactNode
  title?: ReactNode
  left?: ReactNode
  right?: ReactNode
}

function Header({children, title, left, right}: HeaderProps) {
  return (
    <header>
      {children ?? (
          <>
            <div>{left}</div>
            <h1>{title}</h1>
            <div>{right}</div>
          </>
        )
      }
    </header>
  )
}

export default memo(Header)
