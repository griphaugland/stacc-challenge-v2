"use client";
import { useEffect } from 'react';

const Validate = () => {
  useEffect(() => {
    if(!localStorage.getItem('account')) {
      if(window.location.pathname === '/'){
        return;
      }else {
        window.location.href = '/';}
    }
     else {
      if(window.location.pathname === '/impuls-appen'){
        return;}
      else{
        window.location.href = '/impuls-appen';
        }
    }
  }, [])
};
export default Validate;




