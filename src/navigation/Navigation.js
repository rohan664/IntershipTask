import React from "react";
import {Routes , BrowserRouter, Route} from "react-router-dom"
import Layout from "../compoents/Layout/Layout";
import Home from "../compoents/Home/Home";
import Add from "../compoents/Add/Add";
import './Navigation.css'



function Navigation(){
    return(
        <>
            <BrowserRouter>
                <Layout>
                        <Routes>
                            <Route exact path="/" element={<Home/>} />
                            <Route path="/add" element={<Add/>}/>
                        </Routes>
                </Layout>
            </BrowserRouter>
        </>
    )
}

export default Navigation