"use client"
import { createContext, useContext , useState,useEffect } from 'react';

// Create the context
const AppContext = createContext();

// Create a context provider

export const mycontext = ()=> useContext(AppContext);
export const AppProvider = ({ children }) => {
  const [mobileMenu, setMobileMenu] = useState(false)
    const [show, setShow] = useState('translate-y-0')
    const [lastScrollY, setLastScrollY] = useState(0)

    const controlNavbar =()=>{
        if (window.scrollY > 200) {
          if (window.scrollY > lastScrollY) {
          setShow('-translate-y-[80px]')
        }else{
          
          setShow('shadow-sm')
          }
        }else{
          setShow('translate-y-0')
        }
        setLastScrollY(window.scrollY)
      }
    
      useEffect(() => {
        window.addEventListener('scroll',controlNavbar)
        return ()=>{
          window.removeEventListener('scroll',controlNavbar)
        };
      }, [lastScrollY]);

  return (

    <AppContext.Provider value={{show , mobileMenu , setMobileMenu}}>
      {children}
    </AppContext.Provider>
  );
};

