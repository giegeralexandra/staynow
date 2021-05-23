import React from 'react'

const Rentals = ({rentals}) =>{

    return (
        <div>
            {rentals.map(rental => <li key={rental.id}>{rental.name} - {rental.address} - {rental.description} - {rental.price} - {rental.owner.name}</li>)} 
        </div>
    )
}

export default Rentals