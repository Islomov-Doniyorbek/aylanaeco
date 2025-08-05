'use client'
import React from 'react'
import Img1 from '../../../public/factory-producing-co2-pollution.jpg'
import { StaticImageData } from 'next/image'

interface SliderItem {
  id: number
  name: string
  img: StaticImageData
}

const Slider = () => {
  const slider: SliderItem[] = [
    { id: 0, name: "Ecologiya", img: Img1 },
    { id: 1, name: "Tabiat", img: Img1 },
    { id: 2, name: "Havo sifati", img: Img1 }
  ]

  return (
    <div className="slider w-full overflow-hidden relative">
      <div
        className="innerSlider flex transition-all duration-500 relative"
        style={{ width: `${slider.length * 100}vw`}}
      >
        {slider.map(item => (
          <div
            key={item.id}
            className="card w-[100vw] relative h-[700px] bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${item.img.src})` }}
          >
            <h1 className="text-white text-4xl">{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slider
