import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import logo from './logoijo1.svg';
import Login from './Group 10.svg'

function Header() {
  return (
    <div className="mx-2 my-8 flex flex-wrap justify-between">
    <div className="flex justify-start ...">
      <img className="pl-36 h-14" src={logo} alt= "logo"/>
      </div>

  <div className="flex justify-end ...">
      <a className="pl-56 pr-16 text-gray-900" href="Home">Home</a>
      </div>
      <div className="flex justify-end ...">
      <a className="pl-20 pr-16 text-gray-900" href="About">About</a>
      </div>
      <div className="flex justify-end ...">
      <a className="ml-32 pr-16 text-gray-900" href="FAQ">FAQ</a>
      <img className="h-10 ml-32 mr-32" src ={Login} alt ="login"></img>
  </div>
  </div>

      // <nav className="bg-white">
      //   <div className="max-w-7xl mx-auto ">
      //     <div className="flex justify-between">
      //       <div className="flex">
      //     <div className="mx-2 my-8 flex space-x-4 ...">
      //         <div className="pt-16 pl-20"><img className="h-14" src={logo} alt= "logo"/></div>
      //       </div>
      //       <div>
      //       </div>
      //         <div className=" ml-80 flex space-x-4...">
      //       <a className="pr-16 text-gray-900" href="Home">Home</a>
      //       <a className="pr-16 text-gray-900" href="About">About</a>
      //       <a className="pr-16 text-gray-900" href="FAQ">FAQ</a>
      //     <img className="h-10" src ={Login} alt ="login"></img>
      //     </div>
      //       </div>
      //     </div>
      //   </div>
      // </nav>
  );
}
export default Header;
