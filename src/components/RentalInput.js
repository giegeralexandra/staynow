import React from 'react'
import {connect} from 'react-redux'
import {addRental} from '../actions/addRental'


class RentalInput extends React.Component {
    state= {
        name: '', 
        description: '', 
        price: '', 
        rental_type: '', 
        address: '' 
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
            //inside of brackets because it is an object and needs to locate a key 
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.addRental(this.state)
        this.setState({
            name: '', 
            description: '', 
            price: '', 
            rental_type: '', 
            address: '' 

        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label>Rental Name: </label>
                    <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/><br/>
                    
                    <label>Rental Description: </label>
                    <input type="text" placeholder="Description" name="description" value={this.state.description} onChange={this.handleChange}/><br/>
                    
                    <label>Rental Price: </label>
                    <input type="text" placeholder="Price" name="price" value={this.state.price} onChange={this.handleChange}/><br/>
                    
                    <label>Rental Type: </label>
                    <input type="text" placeholder="Rental Type" name="rental_type" value={this.state.rental_type} onChange={this.handleChange}/><br/>
                    
                    <label>Rental Address: </label>
                    <input type="text" placeholder="Address" name="address" value={this.state.address} onChange={this.handleChange}/><br/>

                    <label>Rental Owner: </label>
                    <input type="text" placeholder="Owner" name="owner_id" value={this.state.owner_id} onChange={this.handleChange}/><br/>

                    <input type="submit"/><br/><br/>
                </form>
            </div>
        )
    }
}

mapStateToProps = (state) => {
    console.log(state)
    return{
    reservations: reservations
    }
}

export default connect(null, {addRental})(RentalInput)