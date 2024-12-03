import React from 'react'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
const Footnote = () => {
  return (
    <>
    <footer className='py-24 bg-black text-white'>
        <div className="container">
          <div className="md:grid grid-cols-[1fr,_1fr,_2fr,_2fr] ">
            <ul className='space-y-5'>
              <li>Privacy Policy</li>
              <li>Terms and Condition</li>
              <li>Cookie Plicy</li>
            </ul>

            <ul className='space-y-5'>
              <li>About</li>
              <li>Menu</li>
              <li>Delivery</li>
            </ul>

            <ul className='space-y-5'>
              <li>Gallery</li>
              <li>Contact</li>
            </ul>

            <div className='mt-10 md:mt-0'>
              <ul className='flex gap-5 mb-5'>
                <li><Facebook/></li>
                <li><Twitter/></li>
                <li><Instagram/></li>
                <li><Youtube/></li>
              </ul>
              <p className='mb-3'>0993 345 6755</p>
              <p >10 Ave Rizal San Pablo City, Laguna</p>
            </div>
          </div>
        </div>

      </footer>
    </>
  )
}

export default Footnote