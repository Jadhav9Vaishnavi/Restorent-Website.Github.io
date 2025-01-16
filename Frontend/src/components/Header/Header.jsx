import React from "react";
import './Header.css';
import { assets } from "../../assests/assets";
function Header(){
    return(<>
        <div className="header">
            <div className="header-contents">
                <h2>Order Your <br/> favorite food here</h2>
                <button><a href="#explore-menu">View Menu</a></button>
            </div>
            <div>
                <img src={assets.header_img} alt=""/>
            </div>
        </div>
    </>)
}
export default Header;