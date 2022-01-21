import React,{useState} from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import "./toggle.css";

const Menu = () => (

  
  <>
    <p>Home</p>
    <p>News</p>
    <p>What if</p>
    <p>Sign in</p>
    <p>Contact</p>
  </>
);

function Toggle() {
  const [toggle, setToggle] =useState(false)

  return <div className="container">
    <div className="lg">
    <Menu/>
    </div>
    <div className="toggle">
    {toggle ? (
    <RiCloseLine
    color="#fff"
    size={27}
    onClick={()=>setToggle(false)}
    />):(
      <RiMenu3Line
      color="#fff"
      size={27}
      onClick={() => setToggle(true)}
      />
    )}
    {toggle && (
      <div clasName="menu-pop scale-up-center">
        <div className="links-pop">
          <Menu/>
        </div>
      </div>
    )}
    </div>
  </div>;
}

export default Toggle;
