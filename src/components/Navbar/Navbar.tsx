import React, { useEffect, useState } from 'react'
import { ICONS } from '../../assets'
import ReapLogo from "../../assets/icons/ReapLogo.png"
const Navbar = () => {
    const [isOpen,setIsOpen]=useState(false)
    const [NavAnime,setNavAnime]=useState(false)


    useEffect(()=>{
      if(isOpen){
        setNavAnime(true)
      }else{
        setNavAnime(false)
      }
    })
  return (
     <div className='fixed top-0 left-0 w-full bg-transparent z-50'> 
        <div className=' max-w-7xl mx-auto  flex flex-row justify-between  items-center py-6 lg:py-5 lg:4 lg:px-24  md:px-20 px-7 '  >
            <div >
                <img className='w-32 md:w-32 ' src={ReapLogo} alt="" />
            </div>

            <div className='hidden md:flex bg-amber-50 border-4 border-white rounded-xl'>
                <ul className='flex flex-row item-center border-white  gap-6  py-3  px-12 font-medium text-gray-800 '>
                    <li>
                        <a className="hover:text-green-600" href="">About</a> 
                   </li>
                    <li>
                        <a className="hover:text-green-600" href="">Team</a>
                     </li>
                    <li>
                        <a className="hover:text-green-600" href="">Contact</a>
                        </li>
                </ul>
            </div>

              {/* mobileHamburger */}
              <div className='md:hidden'>
                <button
                className='flex flex-col gap-1.5 focus:outline-none'
                 onClick={()=>setIsOpen(!isOpen)}>
<span className={`w-6 h-0.5   bg-white rounded transition-all duration-300 ${isOpen?"rotate-45 translate-y-1.5":""}`}></span>
<span className={`w-6 h-0.5   bg-white rounded transition-all mt-1 duration-300 ${isOpen?"-rotate-45 -translate-y-1.5":""}`}></span>

                </button>
              </div>
              {isOpen && (
            <div className='md:hidden absolute top-23  w-89 sm:w-2xl bg-amber-50 border-sm grey-200 rounded-xl shadow  '> 
                 <ul className='flex flex-col items-center gap-5 py-6 
                  px-5 font-medium text-gray-800   '>
                    <li>
                        <a onClick={()=>setIsOpen(false)} className="hover:text-green-600" href="">About</a>
                   </li>
                    <li>
                        <a  onClick={()=>setIsOpen(false)}  className="hover:text-green-600" href="">Team</a>
                     </li>
                    <li>
                        <a  onClick={()=>setIsOpen(false)}  className="hover:text-green-600" href="">Contact</a>
                        </li>
                </ul>
            </div>
              )}
        </div>
    </div>
  )
}

export default Navbar