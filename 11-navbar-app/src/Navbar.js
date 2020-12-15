import React,{useState,useRef,useEffect} from 'react';
import {FaBars,FaTwitter} from 'react-icons/fa';
import {links,social} from './data';
import logo from './logo.svg';

const Navbar = () => {
  const [showlink,setShowlink] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() =>{
    const linksHeight = linksRef.current.getBoundingClientRect();
    if(showlink){
      linksContainerRef.current.style.height = `${linksHeight.height}px`
    }
    else{
      linksContainerRef.current.style.height = '0px'
    }
  },[showlink]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo"/>
          <button className="nav-toggle" onClick={() => setShowlink(!showlink)}>
            <FaBars/>
          </button>
        </div>
        {/* </div><div className={`${showlink?"links-container show-container":"links-container "}`}>*/}
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const {id,url,text} = link;
              return <li key={id}><a href={url}>{text}</a></li>
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((s) => {
            const {id,url,icon} = s;
            return <li key={id}><a href={url}>{icon}</a></li>
          })}
        </ul>
      </div>
    </nav>
  )
};

export default Navbar;