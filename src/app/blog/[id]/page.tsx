import Image, { StaticImageData } from 'next/image';
import Img1 from '../../../../public/digital-screen-with-environment-day.jpg';
import React from 'react';

interface Blog {
  id: number;
  title: string;
  banner: StaticImageData;
  desc: string;
  time: string;
}

// Simulyatsiya qilingan blog ro'yxati
const blogs: Blog[] = [
  {
    id: 0,
    title: 'SG',
    banner: Img1,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt laudantium soluta quidem deserunt veniam inventore voluptatem magnam, veritatis officia voluptate! Iste distinctio doloremque expedita nisi quam magni officia dignissimos odit eaque, laborum obcaecati iure! Magni qui doloremque ratione modi porro sunt, consequatur nobis tempora voluptatum, quos deleniti hic laborum explicabo ab recusandae doloribus suscipit voluptates adipisci laudantium beatae cumque! Voluptatem, obcaecati. Corporis ratione laborum dolore. Ducimus earum atque saepe architecto nesciunt. Perspiciatis, a saepe, necessitatibus quisquam, odio esse laboriosam at aperiam maxime ipsum minima? Odit dignissimos explicabo aut doloremque, dolorem officiis, modi sunt ipsa aspernatur cupiditate provident quasi unde quibusdam? Voluptas, cumque consequatur doloribus doloremque eaque sequi in odio neque quasi totam veniam quaerat illum numquam repudiandae molestiae consequuntur, recusandae quod. Laboriosam dolorem enim assumenda eveniet. Quidem ratione quasi obcaecati vel? Impedit, accusantium. Voluptatibus aspernatur expedita, iure modi est quae a illum quam impedit harum earum eos porro. Voluptates soluta iste quasi assumenda asperiores officiis, inventore doloremque debitis minus beatae?",
    time: '23.01.2023',
  },
  {
    id: 1,
    title: 'Eco',
    banner: Img1,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt laudantium soluta quidem deserunt veniam inventore voluptatem magnam, veritatis officia voluptate! Iste distinctio doloremque expedita nisi quam magni officia dignissimos odit eaque, laborum obcaecati iure! Magni qui doloremque ratione modi porro sunt, consequatur nobis tempora voluptatum, quos deleniti hic laborum explicabo ab recusandae doloribus suscipit voluptates adipisci laudantium beatae cumque! Voluptatem, obcaecati. Corporis ratione laborum dolore. Ducimus earum atque saepe architecto nesciunt. Perspiciatis, a saepe, necessitatibus quisquam, odio esse laboriosam at aperiam maxime ipsum minima? Odit dignissimos explicabo aut doloremque, dolorem officiis, modi sunt ipsa aspernatur cupiditate provident quasi unde quibusdam? Voluptas, cumque consequatur doloribus doloremque eaque sequi in odio neque quasi totam veniam quaerat illum numquam repudiandae molestiae consequuntur, recusandae quod. Laboriosam dolorem enim assumenda eveniet. Quidem ratione quasi obcaecati vel? Impedit, accusantium. Voluptatibus aspernatur expedita, iure modi est quae a illum quam impedit harum earum eos porro. Voluptates soluta iste quasi assumenda asperiores officiis, inventore doloremque debitis minus beatae?",
    time: '24.01.2023',
  },
];
interface BlogDetailsProps {
  params: {
    id: string; // 
  };
}

const BlogDetails = ({ params }: BlogDetailsProps) => {
  const blog = blogs.find((item) => item.id === Number(params.id)); 

  if (!blog) {
    return <div className="p-5">Blog topilmadi</div>;
  }
  return (
    <div className="p-5">
      <h1 className="text-4xl font-bold mb-3">{blog.title}</h1>
      <p className='flex gap-2.5'><Image src={blog.banner} alt={`banner${blog.id}`} className="w-xs" /> {blog.desc}</p>
      <p className="text-sm text-gray-500 mt-2">{blog.time}</p>
    </div>
  );
};

export default BlogDetails;
