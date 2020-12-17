import React,{useEffect,useRef,useState} from 'react';

import {useGlobalContext} from './contex'

const Submenu = () => {
  const [col,setCol] = useState('col-2')
  const {isSubmenuOpen,location,pages} = useGlobalContext();
  const container = useRef(null)
  const {page,links} = pages;
  useEffect(() => {
    setCol('col-2')
    const submenu = container.current
    const {center,bottom} = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`
    if(links.length === 3){
      setCol('col-3')
    }
    if(links.length > 3){
      setCol('col-4')
    }
  },[location,links])
  return(
    <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`} ref={container}>
      <h4>{page}</h4>
      <div className={`submenu-center ${col}`}>
        {links.map((link,index) => {
          const {label,url,icon} = link
          return <a href={url} key={index}>
            {icon}
            {label}
          </a>
        })}
      </div>
    </aside>
  )
}

export default Submenu;