import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import './Layout.css'
import Header from "../Header/Header";
// import Dashboard from "../Dashboard/Dashboard";

function Layout({children}){
    return(
        <div className="main-div">
            <Sidebar/>
            <div className="dashboard">
                <Header/>
                <main className="info">{children}</main>  
            </div>    
        </div>
    );
}

export default Layout;