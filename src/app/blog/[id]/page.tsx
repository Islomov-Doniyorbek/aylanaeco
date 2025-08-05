'use client'
import Image, { StaticImageData } from 'next/image';
import Img1 from '../../../../public/digital-screen-with-environment-day.jpg';
import { notFound, useParams } from 'next/navigation';

interface Blog {
  id: number;
  title: string;
  banner: StaticImageData;
  desc: string;
  time: string;
}

// Bloglar ro'yxati
const blogs: Blog[] = [
  {
    id: 0,
    title: 'SG',
    banner: Img1,
    desc: 'SG haqida to‘liq tavsif...',
    time: '23.01.2023',
  },
  {
    id: 1,
    title: 'Eco',
    banner: Img1,
    desc: 'Eco haqida to‘liq tavsif...',
    time: '24.01.2023',
  },
];

// ✅ Next.js 13/14/15 `app` routerda `params`ni string deb qabul qiladi


// ✅ `async` qilish shart
const BlogDetails = () => {
  const params = useParams()
  const blog = blogs.find((item) => item.id === Number(params.id));

  if (!blog) {
    notFound(); // 404 sahifa chiqaradi
  }

  return (
    <div className="p-5">
      <h1 className="text-4xl font-bold mb-3">{blog.title}</h1>
      <div className="flex gap-5">
        <Image src={blog.banner} alt={`banner${blog.id}`} className="w-[200px] h-auto object-cover" />
        <p>{blog.desc}</p>
      </div>
      <p className="text-sm text-gray-500 mt-2">{blog.time}</p>
    </div>
  );
};

export default BlogDetails;
