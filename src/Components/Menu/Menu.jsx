import React from 'react'
import './menu.css'
import { Pizza } from '../Pizza/Pizza';


export const Menu = ({ PizzaData }) => {
    let pizzas = PizzaData;
    // pizzas =[];

    return (
        <div className='menu'>
            <h2>Our Menu</h2>


            {
                pizzas.length > 0 ? (
                    <>
                        <p>Please select the Pizza from the List</p>
                        <ul className='pizzas'>
                            {
                                pizzas?.map((pizza) => {
                                    
                                    return <Pizza item={pizza} key={pizza.name} />
                                })
                            }
                        </ul>
                    </>
                ) : null
            }

        </div>
    );

}
