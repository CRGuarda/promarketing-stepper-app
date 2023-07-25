import { Children } from 'react'

export const Stepper = ({ children }: { children: React.ReactNode }) => {
  const childrens = Children.count(children)
  console.log(childrens)

  return (
    <div className='w-full grid gap-10 grid-cols-[repeat(auto-fit,minmax(32px,1fr))] justify-items-center'>
      {children}
    </div>
  )
}
