import { NavLink } from 'react-router-dom'

const NavBar = (props) => {
return (
    <div className="Nav">
        <NavLink exact to='/rentals'>Rentals    </NavLink>
        <NavLink exact to='/reservations'>My Reservations    </NavLink>
        <NavLink exact to='/trips'>My Trips   </NavLink>
        <NavLink exact to='/logout'>Logout   </NavLink>

    </div>
)
}

export default NavBar