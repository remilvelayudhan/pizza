import React from 'react'
import './order.css'

export const Order = ({closedHour,openHour}) => {
  return (
    <div className="order">
    <p>
      We are open from {openHour}:00 to {closedHour}:00. Come and visit us or order online
    </p>
    <button className="btn">Order</button>
  </div>
  );
}
