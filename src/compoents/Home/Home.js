import React from "react";
import './Home.css'
import Card from "../Card/Card";

function Home(){
    return(
            <div className="container">
                <div className="todo-task">
                    <div>TO DO Task</div>
                    <div className="todo-card">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>   
                    </div>
                    
                </div> 
                <div className="doing-task">
                    <div>Doing Task</div>
                </div>
                <div className="done-task">
                    <div>DoneTask</div>
                </div>
            </div>
        
    )
}

export default Home