import React from "react" 

import "./UserOutput.css"

const userOutputs = (props) => {
    return (
        <div className="UserOutput">
            <p>This is {props.username} 1</p>
            <p>This is {props.username} 2</p>
        </div>
    )
}


export default userOutputs;