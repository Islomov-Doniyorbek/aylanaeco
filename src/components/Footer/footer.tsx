import React from 'react'
import { FaFacebook, FaInstagram, FaTelegram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full relative px-8 py-10 bg-emerald-500'>
      <div className="grid grid-cols-2 relative">
        <div className="col px-4 w-full flex flex-col gap-6">
            <h2 className='text-3xl mb-2.5 font-semibold'>Aylana Eco</h2>
            <p className='pr-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio excepturi reprehenderit dolore quas ad, in illo aspernatur facere? Sit, ea vitae et, deleniti dolorum deserunt quia illum quisquam a ratione eligendi iste est eum repellendus eos numquam neque porro fuga enim ad. Quis magnam in recusandae sed optio ullam modi accusantium. Nam fuga cumque ullam blanditiis nihil, sunt soluta accusamus similique ipsum suscipit harum recusandae dolore. Similique veniam necessitatibus laborum animi reprehenderit harum magni suscipit rerum dicta delectus minus, pariatur aperiam quia quos voluptatem sapiente sint, perferendis accusantium, vitae numquam.</p>
        </div>
        <div className="col w-full flex flex-col gap-6">
            <h2 className='text-3xl mb-2.5 font-semibold'>Ijtimoiy tarmoqlarda kuzatib boring:</h2>
            <a href="#" className='flex items-center gap-3'><FaTelegram/> t.me/aylana_eco</a>
            <a href="#" className='flex items-center gap-3'><FaInstagram/> aylana.eco</a>
            <a href="#" className='flex items-center gap-3'><FaFacebook/> aylana.eco</a>
            <a href="#" className='flex items-center gap-3'><FaYoutube/> aylanaeco.youtube.com</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
