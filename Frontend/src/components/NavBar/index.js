import { Link } from "react-router-dom";
import { MdHome, MdLogin } from "react-icons/md"
import {  FaUserEdit,FaStickyNote,FaCertificate,FaSignOutAlt,FaUser,FaUserPlus} from "react-icons/fa"
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router';
import { doLogOut } from '../../store/reducers/security/actions';
import './index.css';

const getSecurity = ({security})=>security;
const NavBar = ()=>{
  const {isLogged} = useSelector(getSecurity);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const menu = isLogged ?
    (<ul>
      <li><Link to="/notes"><FaStickyNote className="w-8 h-8" />Notas</Link></li>
      <li><Link to="/categories"><FaCertificate className="w-8 h-8"/>Categorías</Link></li>
      <li><Link to="/profile"><FaUserEdit className="w-8 h-8" />Perfil</Link></li>
      <li onClick={()=>{doLogOut(dispatch);navigate("/login")}}><FaSignOutAlt className="w-8 h-8"/>Salir</li>
    </ul>) :
    (<ul>
      <li className=" mr-4" ><Link to="/login"><FaUser className="w-8 h-8"/>Login</Link></li>
      <li><Link to="/signin"><FaUserPlus className="w-8 h-8"/>Crear</Link></li>
    </ul>);

  return (
    <nav>
     {menu}
    </nav>
  );
}

export default NavBar;
