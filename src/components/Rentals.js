import React from 'react'
import {Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'

const Rentals = (props) => {
    // debugger
    // const [loading, setLoading] = useState(false)
    // let rentals = props.rentals[0]
    
    // if (!props.rentals[0]){
    //     return <p>Rentals loading</p>
    // }
    // debugger

    const rentalViews = props.rentals.length > 0 ?
         <div>
            <h1 className="text-3xl">Rentals </h1>
             {props.rentals.map((rental) => 
            <li key={rental.id}>
                <Link to={`/rentals/${rental.id}`}>
                    {rental.name}
                </Link>
            </li>)}
            <br>
            </br>
           
        </div> : null 

    return (
        console.log(props),
        rentalViews
        
    )
}

export default (Rentals)