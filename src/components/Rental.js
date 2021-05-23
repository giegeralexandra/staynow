import React from 'react'

const Rental = (props) => {

    console.log(props)
    let rental = props.rentals[props.match.params.id - 1]

    return(
        <li>
            { rental ? rental.name : null} - {rental ? rental.description : null} - { rental ? rental.rental_type : null} - { rental ? rental.price : null} - { rental ? rental.owner.name : null}
        </li>
    )

}

export default Rental 