import React from 'react'
import { Link } from 'react-router-dom'
import { imgPath } from '@/components/helpers/functions-general'
const TopRating = () => {
  return (
    <>
     <section className='py-24 bg-dark'>
      <div className="container">
        <h2 className='text-white'>Top Rated Recipe</h2>


        <div className="grid grid-container-top gap-2">
        {Array.from(Array(6).keys()).map((key)=> (
          <div className={`grid-item relative h-full w-full bg-black group grid-name-top-${key} overflow-hidden`} key={key}>
            <img src={`${imgPath}/pasta.jpg`} alt="" className='object-cover group-hover:opacity-70 transition-all group-hover:scale-[1.5] group-hover:rotate-[10deg] h-full w-full' />
            <div className='absolute -bottom-24 left-5 text-white opacity-0 group-hover:bottom-5 group-hover:opacity-100 transition-all'>
              
              <ul className='text-sm flex gap-4 items-center'>
                <li>30 mins</li>
                <li>4 servings</li>
              </ul>
              <h4 className='mb-2'>Pasta</h4>
              <Link to="/" className='font-light'>View Recipe</Link>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default TopRating