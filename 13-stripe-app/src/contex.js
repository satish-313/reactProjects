import React , {useState,useContext} from 'react';
import sublinks from './data';

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
  const [isSidebarOpen,setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen,setIsSubmenuOpen] = useState(false);
  const [location,setLocation] = useState({});
  const [pages,setPages] = useState({page:'',links:[]})

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }
  const openSubmenu = (text,coordinates) => {
    const p = sublinks.find((link) => link.page === text)
    setPages(p)
    setLocation(coordinates)
    setIsSubmenuOpen(true)
  }
  const closeSubmenu = () => {
    setIsSubmenuOpen(false)
  }

  return <AppContext.Provider value={{
    isSubmenuOpen,isSidebarOpen,openSidebar,closeSidebar,
    openSubmenu,closeSubmenu,location,pages
  }}>
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
