import React from "react"  


const userInputs = (props) => {
    const inputStyle = {
      borderBottom: '2px solid #c8ccd4'
    };
    return (
        <div>
            <input type="text" onChange={props.changed} onFocus={props.focused} style={inputStyle}/>
            <p>{props.value.length}</p>
        </div>
    )
}


export default userInputs;