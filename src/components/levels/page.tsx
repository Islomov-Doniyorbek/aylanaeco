import React from 'react'
import { FaRecycle } from 'react-icons/fa';
import Title from '../title';

interface propsL {
    id: number;
    title: string;
    ico: React.ReactNode;
    desc: string;
    bgClr: string;
}
const Level = () => {
    const levels: propsL[] = [
        {
            id: 0,
            title: "Bronze",
            ico: <FaRecycle/>,
            desc: "Bronza daraja",
            bgClr: "#b08d57",
            
        },
        {
            id: 1,
            title: "Silver",
            ico: <FaRecycle/>,
            desc: "Silver daraja",
            bgClr: "silver"
        },
        {
            id: 2,
            title: "Gold",
            ico: <FaRecycle/>,
            desc: "Bronza daraja",
            bgClr: "gold"
        },
    ]
  return (
    <div className="relative">
        <Title title={"Darajalar"} />
        <div className='flex px-5 py-3 my-8 gap-10 justify-center items-center flex-col'>
        {levels.map(item=>{
            return (
                <div key={item.id} className="card spets w-3xl max-w-3xl relative py-6 px-5 overflow-hidden flex items-center gap-5" style={
                    {
                        
                        background: item.bgClr,
                        boxShadow: `0 4px 30px 4px rgba(0,0,0,.4),
                                    0 4px 20px 6px ${item.bgClr}`
                    }
                }>
                    <div className="ico text-5xl text-lime-600">
                        {
                            item.ico
                        }
                    </div>
                    <div className="title">
                        <p className='text-4xl font-bold'>{item.title}</p>
                        <p className='text-xl mt-3.5'>
                            {item.desc}
                        </p>
                    </div>
                    <div className="lenta absolute w-40 h-5 right-[-35px] rotate-45 top-10 bg-green-500"></div>
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default Level
