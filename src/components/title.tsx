import React from 'react'

type TitleProps = {
    title: string;
}

const Title:React.FC<TitleProps> = ({title}) => {
  return (
    <div className='h-32 py-5 px-10 bg-green-800 flex items-center'>
      <h1 className='text-xl md:text-5xl text-emerald-100'>{title}</h1>
    </div>
  )
}

export default Title
