import React, { ReactNode } from 'react'

interface ContainerProps {
    children: ReactNode
}
const Container = ({children}: ContainerProps) => {
  return (
    <div className='relative max-w-[1900px] mx-auto'>
        {children}
    </div>
  )
}

export default Container
