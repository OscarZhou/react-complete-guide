import React from "react"  


const userInputs = (props) => {
    const inputStyle = {
      height: '48px',
      borderBottom: '2px solid #c8ccd4'
    };
    return (
        <div>
            <input type="text" onChange={props.changed} onFocus={props.focused} style={inputStyle}/>
        </div>
    )
}


export default userInputs;