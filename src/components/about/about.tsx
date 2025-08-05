import React from 'react'
import Eco from '../../../public/digital-screen-with-environment-day.jpg'
import Image from 'next/image'
import Title from '../title'

const AboutUs = () => {
  return (
    <div className="relative">
      <Title title='Aylana'/>
      <div className='grid grid-cols-1 md:grid-cols-2 my-10'>
        <div className="col px-3.5 py-3 flex items-center justify-center">
          <Image src={Eco} alt="" className='lg: w-2xl' />
        </div>
        <div className="col px-3.5 py-3 ">
          <h2 className='font-bold text-3xl relative after:content-none after:absolute after:w-10 after:h-1.5 after:bg-emerald-600'>About</h2>
          <p className='text-lg mt-7.5'>
              O‘zbekistonda millionlab eski texnik qurilmalar uyda chang bosib yotibdi yoki noto‘g‘ri yo‘llar bilan tashlab yuborilmoqda. Bu – atrof-muhitga zarar yetkazadi, qimmatli resurslar (mis, litiy va boshqalar) isrof bo‘ladi. Raqamli, qulay va ishonchli yig‘ish tizimi mavjud emas. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus cum impedit voluptate sint pariatur delectus dignissimos earum perferendis mollitia natus, quas debitis distinctio iure et unde culpa tenetur totam eligendi voluptates! Eos ipsum inventore perspiciatis eum similique at earum alias optio, quaerat necessitatibus ea tenetur deserunt dolorum quo sint? Nisi cumque, cum aut pariatur aliquam magni expedita beatae ratione, quisquam assumenda molestias laborum dolores totam impedit quidem similique numquam voluptas. Pariatur, commodi. Illo obcaecati nam, quibusdam voluptate ducimus consectetur laboriosam fuga ipsum nemo? Asperiores voluptatibus porro saepe corporis itaque beatae nulla rerum in repudiandae soluta voluptate, ipsa ducimus at doloribus, sit praesentium ad perferendis animi dignissimos illo ratione incidunt dolorem? Vitae laboriosam corporis aut, perspiciatis sunt incidunt magni quam aperiam corrupti. Quia cumque tempore optio nisi.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
