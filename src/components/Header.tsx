'use client';
import { headerMenuList } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import {IoCloseSharp} from "react-icons/io5";
import {motion} from "framer-motion";

export default function Header() {
  const [active, setActive] = useState('');
  const pathName = usePathname();
  useEffect(() => {
    setActive(pathName);
  }, [pathName]);

  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="">
      <div className="w-full h-20 border-b-[1px] border-gray-500 px-2 bg-white">
        <div className="h-full max-w-screen-2xl mx-auto flex items-center justify-between">
          <Link href={'/'} className=" relative group overflow-hidden">
            <p className=" text-2xl font-bold">Creative Studio</p>
            <span className=" absolute w-full bottom-0 h-[2px] inline-block bg-primeColor -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-700"></span>
          </Link>

          {/*Sm device Menu Icon*/}
          <div onClick={()=> setShowMenu(true)} className="w-7 h-5 group lg:hidden flex flex-col justify-between overflow-hidden cursor-pointer" >
            <span className="w-full h-[3px] bg-gray-500 group-hover:bg-primeColor -translate-x-1 group-hover:translate-x-0 transition-transform duration-500"></span>
            <span className="w-full h-[3px] bg-gray-500 group-hover:bg-primeColor -translate-x-[40%] group-hover:translate-x-0 transition-transform duration-500"></span>
            <span className="w-full h-[3px] bg-gray-500 group-hover:bg-primeColor"></span>
          </div>
          {/*SM menu list*/}
          {
            showMenu && (
                <div className="w-full h-screen fixed lg:hidden top-0 left-0 bg-darkGreen bg-opacity-90 z-50">
                  <motion.div initial={{x:-40, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:0.2}} className="w-[70%] h-full bg-darkGreen p-4 relative">
                    <span onClick={e=>setShowMenu(false)} className="absolute right-2 top-8 text-white cursor-pointer text-3xl hover:text-red-600   duration-500"><IoCloseSharp/></span>

                    <Link href={"/"} onClick={e=>setShowMenu(false)}>
                      <p className=" text-2xl font-bold text-white mb-4">Creative Studio</p>
                    </Link>
                    <ul className="flex flex-col text-gray-300 uppercase text-sm font-semibold gap-3">
                      {headerMenuList.map(item => (
                          <Link href={item.link} key={item._id}>
                            <li
                                onClick={()=> setShowMenu(false)}
                                className="hover:text-white cursor-pointer duration-300"
                            >
                              {item.title}

                            </li>
                          </Link>
                      ))}
                    </ul>
                  </motion.div>
              </div>
            )
          }

          {/*Header List*/}
          <div className="hidden lg:inline-flex items-center gap-8 text-sm uppercase font-semibold tracking-wide">
            <ul className="flex gap-8">
              {headerMenuList.map(item => (
                <Link href={item.link} key={item._id}>
                  <li
                    className={`${
                      active === item.link && 'text-primeColor'
                    } text-gray-600 hover:text-primeColor cursor-pointer duration-300 group relative`}
                  >
                    {item.title}
                    <span
                      className={`${
                        active == item.link && 'scale-100'
                      } absolute w-full scale-0 group-hover:scale-100 bg-primeColor h-[2px] -bottom-[1px] left-0  duration-500`}
                    ></span>
                  </li>
                </Link>
              ))}
            </ul>
            <button className="w-36 bg-darkGreen h-10 text-white uppercase rounded-md hover:bg-primeColor duration-300 tracking-wide">
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
