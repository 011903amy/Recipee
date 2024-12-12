
import { imgPath } from '@/components/helpers/functions-general'
import { Gauge, HandPlatter, LayoutDashboard, Megaphone, MousePointerClick, UtensilsCrossed } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import Category from '../category/Category'

const SideNavigation = ({menu}) => {
  const links =[
    {
      title:"Dashboard",
      slug: "/admin/dashboard",
      icon:<LayoutDashboard size={16} />
    },
    {
      title:"Recipe",
      slug: "/admin/recipe",
      icon:<UtensilsCrossed size={16}/>
    },
    {
      title:"Category",
      slug: "/admin/category",
      icon:<HandPlatter size={16}/>
    },
    {
      title:"Level",
      slug: "/admin/level",
      icon:<Gauge size={16}/>
    },

  ]
  return (
    <>
     <aside className='p-4 border-r border-line'>
     <img src={`${imgPath}/logo-recipe.png`} alt="" className='w-[60%] mx-auto mt-2' />
        <nav>
          <ul className='mt-10'>
            {links.map((item,key)=>(
            <li className={`${menu === item.slug.replaceAll("/admin/" , "") ? "border-accent bg-accent  text-white opacity-100": ""} p-2 py-2 mb-2 rounded-md border border-transparent opacity-60 hover:opacity-100`}key ={key}><NavLink to={`${item.slug}`} className="flex gap-2 items-center">{item.icon}{item.title}</NavLink></li>  
            ))}
            
           
          </ul>
        </nav>
        </aside>
    </>
  )
}

export default SideNavigation