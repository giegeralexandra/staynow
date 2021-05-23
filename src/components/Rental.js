import React from 'react'

const Rental = (props) => {

    return(
        <li>
            {props.rental.name} - {props.rental.address} - {props.rental.description} - {props.rental.price} - {props.rental.owner.name}
        </li>
    )

}

export default Rental 