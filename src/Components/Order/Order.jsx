import React from 'react'
import './order.css'

export const Order = ({ closedHour, openHour }) => {
  return (
    <div className="order">
     
        We are open from {openHour}:00 to {closedHour}:00. Come and visit us or order online
     
      <button className="btn">Order</button>
    </div>
  );
}
