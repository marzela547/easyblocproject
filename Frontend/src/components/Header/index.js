import { Link } from "react-router-dom";
import { MdHome, MdLogin } from "react-icons/md"
import { FaAngleLeft } from "react-icons/fa";
import { useSelector } from "react-redux";
import logo from '../imgs/Easy_Bloc.svg'
const NavBar = ()=>{
  const getSecurity = ({security})=>security;
  const {isLogged} = useSelector(getSecurity);
  const {user} = useSelector(getSecurity);
  const menu = isLogged ?
    (
    <div className="bg-green-700  text-white flex justify-center w-full h-16 align-middle" >
    <div className="my-auto w-1/4" ><FaAngleLeft className="ml-4 h-8 w-8" /></div>
    <div className="my-auto w-1/2"><img className="h-12 w-12 rounded-3xl mx-auto" src={logo} /></div>
    <div className="my-auto w-max"><h2 className="rounded-3xl text-center font-bold">{user.nombre_usu+" "+user.apellido_usu}</h2></div>
  </div>
    ) :
    (<div className="bg-green-700  text-white flex justify-center w-full h-16 align-middle" >
    <div className="my-auto w-1/4" ><FaAngleLeft className="ml-4 h-8 w-8" /></div>
    <div className="my-auto w-1/2"><img className="h-12 w-12 rounded-3xl mx-auto" src={logo} /></div>
    <div className="my-auto w-1/4"><h2 className="rounded-3xl text-center font-bold">John Doe</h2></div>
    </div>);

  return (
    <nav>
     {menu}
    </nav>
  );
}

export default NavBar;
