import React from 'react'
import Rental from './Rental'


const Rentals = (props) =>{

    return (
        <div>
            {props.rentals.map(rental => 
            <div key={rental.id}><Rental rental={rental}/></div>)} 
        </div>
    )
}

export default Rentals