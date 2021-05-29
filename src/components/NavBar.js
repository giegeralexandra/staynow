import { NavLink } from 'react-router-dom'
import Logout from './Logout'
const NavBar = (props) => {
return (
    <div className="Nav">
        <NavLink className='navli' exact to='/rentals'>Rentals </NavLink>
        <NavLink className='navli' exact to='/reservations'>My Reservations    </NavLink>
        <NavLink className='navli' exact to='/trips'>My Trips   </NavLink>
        <NavLink className='navli' exact to='/logout' component={Logout}>Logout   </NavLink>
    </div>
    
)
}

export default NavBar