import Image, { StaticImageData } from 'next/image';
import React from 'react'
import Uzum from '../../../public/uzum.jpg'
import Uzinfocom from '../../../public/uzinfocom.jpg'
import ekovazir from '../../../public/ekovazir.png'
import zortv from '../../../public/zortv.png'
import Title from '../title';

interface hamkor {
    id: number;
    name: string;
    img: StaticImageData;

}
const Partner = () => {
    const partner: hamkor[] = [
        {
            id: 0,
            name: "Uzum",
            img: Uzum
        },
        {
            id: 1,
            name: "UzInfocom",
            img: Uzinfocom
        },
        {
            id: 2,
            name: "O'zbekiston Respublikasi Ekologiya vazirligi",
            img: ekovazir
        },
        {
            id: 3,
            name: "Zo'r TV",
            img: zortv
        },
    ]
  return (
    <div className=' w-full h-screen my-10 py-3 bg-emerald-50'>
        <Title title={"Hamkorlar"}/>
      <div className=" w-full wrapper h-9/12 grid grid-cols-4 items-center justify-center gap-8 px-5">
        {
            partner.map(item=>{
                return (
                    <div key={item.id} className="card flex items-center justify-center flex-col gap-12 p-10 shadow-2xl shadow-emerald-950 h-[380px] bg-white">
                        <div className="img w-32 h-32 flex justify-center items-center  relative overflow-hidden">
                            <Image src={item.img} alt="" />
                        </div>
                        <div className="name text-2xl font-semibold text-center">
                            {item.name}
                        </div>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Partner
