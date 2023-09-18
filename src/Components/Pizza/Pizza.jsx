import React from 'react'

export const Pizza = ({item}) => {
 console.log(item.PhotoName);
  return (
    <li className={`pizza ${item.soldOut && 'soldOut'}`}>
    <img src={item.PhotoName} alt={item.name}/>
    <div>
     <h3>
       {item.name}
     </h3>
     <p>{item.ingredients}</p>
     <span>{item.soldOut ? 'SOlD OUT' : item.price}</span>
    </div>
   </li>
  )
}
