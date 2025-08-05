import Image, { StaticImageData } from 'next/image';
import Img1 from '../../../public/digital-screen-with-environment-day.jpg'
import React from 'react'
import Link from 'next/link';
import Title from '@/components/title';

interface blog {
    id: number;
    title: string;
    banner: StaticImageData;
    time: string;

}
const Blog = () => {
  const blogs: blog[] = [
    {
        id: 0,
        title: "SG",
        banner: Img1,
        time: "23.01.2023"
    },
    {
        id: 1,
        title: "Eco",
        banner: Img1,
        time: "24.01.2023"
    },
    {
        id: 2,
        title: "Yangi Mobil tizim",
        banner: Img1,
        time: "02.08.2025"
    },
    {
        id: 3,
        title: "SG - Aylana loyihasini ishga tushirdi!",
        banner: Img1,
        time: "03.08.2025"
    },
    {
        id: 5,
        title: "Alyuminiy, Litiy uvol ketmoqda",
        banner: Img1,
        time: "03.08.2025"
    },
    {
        id: 6,
        title: "Aylana - Ekologiyaning raqamli yechimi",
        banner: Img1,
        time: "03.08.2025"
    },
    {
        id: 7,
        title: "SG - Aylana",
        banner: Img1,
        time: "03.08.2025"
    },
    {
        id: 8,
        title: "\"Aylana\" loyihasi rasman Davlat ro'yxatidan o'tkazildi.",
        banner: Img1,
        time: "03.08.2025"
    },
  ]

  const lastNews = blogs.slice(-4).reverse()
  const news = blogs.slice(0, 8)
  return (
    <div className='min-h-screen'>
      <Title title='Aylana News' />
      <div className="wrapper grid grid-cols-4 gap-4 py-5 px-4">
        <div className="col-span-4 lg:col-span-3 h-full flex flex-wrap py-2.5 gap-5">
            {news.map(item=>{
                return (
                    <div key={item.id} className="card w-64 h-[400px] flex flex-col gap-2 bg-white border-2 border-emerald-600 rounded-2xl overflow-hidden">
                        <div className="img relative w-full overflow-hidden">
                            <Image loading='lazy' className=' hover:scale-110' src={item.banner} alt={`banner${item.id}`} />
                        </div>
                        <div className="content relative p-5">
                            <b className='my-2.5 text-gray-700 text-sm'>{item.time}</b>
                            <Link href={`/blog/${item.title}`}><h2 className="title text-xl hover:text-emerald-600">{item.title}</h2></Link>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className="hidden lg:block px-5">
          <h2 className='text-3xl font-extrabold'>So`nggi yangiliklar</h2>
          <ul>
            {lastNews.map(item=>{
              return (
                <li key={item.id} className='flex gap-5 my-2.5 border-b-2 border-b-emerald-100'>
                      <div className="content relative py-5">
                          <Link href={`/blog/${item.id}`}><h2 className="title text-2xl hover:text-emerald-600">{item.title}</h2></Link>
                          <b className='my-2.5 text-gray-400 text-sm'>{item.time}</b>
                      </div>
                </li>
              ) 
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Blog
