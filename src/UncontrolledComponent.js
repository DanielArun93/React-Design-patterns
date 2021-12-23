import React from "react";
import { useEffect } from "react";

export const UncontrolledComponent = () => {
    const nameRef = React.createRef();
    const ageRef = React.createRef();
    const hairColorRef = React.createRef();
    
    const handleSubmit = (e) => {
        console.log(nameRef.current.value);
        console.log(ageRef.current.value);
        console.log(hairColorRef.current.value);
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input name="username" type="text" ref={nameRef}/>
            <input name="age" type="number" ref={ageRef}/>
            <input name="hairColor" type="text" ref={hairColorRef}/>
            <input type="submit" value="Submit"/>
        </form>
    );
};