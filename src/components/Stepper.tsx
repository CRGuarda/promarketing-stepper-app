import { Children } from 'react'

export const Stepper = ({ children }: { children: React.ReactNode }) => {
  const childrens = Children.count(children)
  console.log(childrens)

  return <div>{children}</div>
}
