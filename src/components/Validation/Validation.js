import React from "react"

const validation = (props) => {
    var validationMessage = '';
    const length = props.length
    if (length < 5)
    {
        validationMessage = 'Text too short';
    }
    
    if(length > 20)
    {
        validationMessage = 'Text long enough';
    }
    return (
        <div>
            <p>{props.length}</p>
            <p>{validationMessage }</p>
        </div>
    )
}

export default validation