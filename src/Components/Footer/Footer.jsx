import React from 'react'
import './footer.css'
import { Order } from '../Order/Order';

export const Footer = () => {
  
    const currentHour = new Date().getHours();
    const operHour =11;
    const closedHour=23;
    const isOpen = currentHour >= operHour && currentHour < closedHour;


  return (
    <Footer className='footer'>
        <p>Copyright &copy; 2022 Pizza App</p>
        <p>{isOpen ? <Order closedHour={closedHour} openHour={operHour}/> : 'We are closed'}</p>
        </Footer>
  )
}
