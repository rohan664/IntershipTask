import React from "react";
import './Header.css'
import search from '../../assests/icons8-search.svg'
function Header(){
    return(
        <div className="header">
            <div className="header-leftside">
                <div>TO DO List</div>
            </div>
            <div className="header-righttside">
                <div className="serach">
                    <div className="serach-box">
                        <img src={search} alt="search"></img>
                        <input placeholder="Search Here..."></input>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header