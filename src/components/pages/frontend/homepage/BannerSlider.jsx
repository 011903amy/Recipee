import { imgPath } from '@/components/helpers/functions-general'
import { ArrowRight, ChartBarStacked, Clock, HandPlatter, Utensils } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <section>
      <Slider {...settings}>
        {Array.from(Array(4).keys()).map((key)=> (
      <div className='w-full h-[calc(100vh-83px)] relative' key={key}>
        <img src={`${imgPath}/pasta.jpg`} alt="" className='w-full object-cover h-[110%]' />

        <div className="tint w-full h-[110%] bg-black bg-opacity-60 absolute top-0 left-0"></div>
        <div className='absolute top-1/2 md:left-[calc((100vw-1200px)/2)] p-4 text-white max-w-[500px] -translate-y-1/2'>
        <h2 className='md:text-5xl'>
          Pasta with white particles
        </h2>
        <ul className='flex gap-5 mb-5'>
          <li className='flex gap-2 items-center'><Clock/>30 mins</li>
          <li className='flex gap-2 items-center'><Utensils/>4 Serving</li>
          <li className='flex gap-2 items-center'><HandPlatter/>Pasta</li>
        </ul>

        <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora consequatur iste rerum consectetur ratione obcaecati dignissimos deserunt voluptates natus ipsum, vel voluptatum aut veritatis soluta et reiciendis sed sit possimus.</p>


        <Link to="/" className='flex items-center gap-3 group hover:text-accent transition-all font-bold'>View Full Recipe <ArrowRight size={18} className='opacity-0 -translate-x-3 transition-all group-hover:opacity-100 group-hover:translate-x-0 stroke-accent '/></Link>
          </div>
      </div>
    ))}
      </Slider>
    </section>
  )
}

export default BannerSlider