import { NavLink } from "react-router-dom";

const Navbar = () => {

  return (<>
    <div className="navbar shadow-sm">
      <ul>
        <li>
          <NavLink to= '/' className={({isActive}) => `${isActive ? 'font-weight-bold': ''}`}>Home</NavLink>
        </li>
        <li>
        <NavLink to= '/about' className={({isActive}) => `${isActive ? 'font-weight-bold': ''}`}>About</NavLink>
        </li>
        <li>
        <NavLink to= '/github' className={({isActive}) => `${isActive ? 'font-weight-bold': ''}`}>Github</NavLink>
        </li>
      </ul>
    </div>
  </>)
}
export default Navbar;