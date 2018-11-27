import React from "react"

const validation = (props) => {
    var tip = '';
    const length = props.length
    if (length < 5)
    {
        tip = 'Text too short';
    }
    
    if(length > 20)
    {
        tip = 'Text long enough';
    }
    return (
        <div>
            <p>{props.length}</p>
            <p>{tip}</p>
        </div>
    )
}

export default validation