import React from "react";
import home from '../../assests/icons8-home.svg'
import edit from '../../assests/icons8-edit.svg'
import add from '../../assests/icons8-add-30.svg'
import task from '../../assests/icons8-task-50.svg'
import './Sidebar.css'
import {  NavLink } from "react-router-dom";

function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebar-items">
                <NavLink to='/' activeClassName="active">
                    <div className="items-container">
                        <img src={home} alt="home"/>
                    </div>    
                </NavLink> 
            </div>
            <div className="sidebar-items">
                <NavLink to='/edit' activeClassName="active">
                    <div className="items-container">
                        <img src={edit} alt="edit"></img>
                    </div>
                    
                </NavLink>  
            </div>
            <div className="sidebar-items">
                <NavLink to='/add' activeClassName="active">
                    <div className="items-container">
                        <img src={add} alt="add"></img>
                    </div>                    
                </NavLink>    
            </div>
            <div className="sidebar-items">
                <NavLink to='/task' activeClassName="active">  
                    <div className="items-container">
                        <img src={task} alt="task"></img>
                    </div>                 
                </NavLink>

            </div>
        </div>
    )
}

export default Sidebar