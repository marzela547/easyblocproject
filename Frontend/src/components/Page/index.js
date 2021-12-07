import {Fragment} from 'react';
import {  FaAngleLeft} from "react-icons/fa"
import NavBar from '../NavBar';
import Header from '../Header';
import './index.css';
//import logo from '../../imgs/Easy_Bloc.svg';
const Page = ({children, className, showHeader, showNavBar, title})=>{
  let classNames = ["", className];
  let header = null;
  let navBar = null;
  if (showHeader) {
    header = (<Header/>);
  }
  if (showNavBar) {
    navBar = (<div className="bg-green-700  text-white flex justify-center w-full absolute bottom-0 ">
      <NavBar/>
      </div>);

  }
  return (
    <div className="w-full h-5/6">
      {header}
      <section className="h-full overflow-auto">
        {children}
      </section>
      {navBar}
    </div>
  );
}

export default Page;

