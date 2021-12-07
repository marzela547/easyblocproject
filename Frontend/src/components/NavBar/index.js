import { Link } from "react-router-dom";
import { MdHome, MdLogin } from "react-icons/md"
import {  FaUserEdit,FaStickyNote,FaCertificate,FaSignOutAlt,FaUser,FaUserPlus} from "react-icons/fa"
import { useSelector } from "react-redux";

import './index.css';
const NavBar = ()=>{
  const {isLogged} = useSelector(({security})=>security);
  const menu = isLogged ?
    (<ul>
      <li><Link to="/nota"><FaStickyNote className="w-8 h-8" />Notas</Link></li>
      <li><Link to="/categoria"><FaCertificate className="w-8 h-8"/>Categorías</Link></li>
      <li><Link to="/profile"><FaUserEdit className="w-8 h-8" />Mi Perfil</Link></li>
      <li><Link to="/salir"><FaSignOutAlt className="w-8 h-8"/>Salir</Link></li>
    </ul>) :
    (<ul>
      <li className=" mr-4" ><Link to="/login"><FaUser className="w-8 h-8"/>Login</Link></li>
      <li><Link to="/newuser"><FaUserPlus className="w-8 h-8"/>Crear</Link></li>
    </ul>);

  return (
    <nav>
     {menu}
    </nav>
  );
}

export default NavBar;
