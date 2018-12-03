import React from "react" 
import classes from "./Cockpit.css";

const cockpit = (props) => {
    let btnClass ='';
    if (props.showPerson){
        btnClass = classes.Red;
    }

    let assignedClasses = [];
    if(props.length <=2){
      assignedClasses.push(classes.red);
    }
    if(props.length<=1){
      assignedClasses.push( classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
          <p className={assignedClasses.join(' ')}>I'm a react APP</p>
          <button className={btnClass}
            onClick={props.clicked}>Toggle Name</button>
        </div>
    );
}


export default cockpit