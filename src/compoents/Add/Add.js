import React from "react";
import './Add.css'

function Add(){
    return(
        <div className="container">
            <div className="add-headline">
                    <div>Add Task</div>   
            </div>
            <hr/>
            <div className="add-container">
                <div className="form">
                    <div className="form-headline">Fill Details Mentioned Below</div>
                    <div className="title">
                        <div>Title</div>
                        <input className="input"></input>
                    </div>
                    <div className="title">
                        <div>Description</div>
                        <textarea className="input"></textarea>
                    </div>
                    <div className="title">
                        <div>Status</div>
                        <select name="status" id="status" className="dropdown">
                            <option value="pending">Pending</option>
                            <option value="done">Done</option>
                            <option value="InProgress">InProgress</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add