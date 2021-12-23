import React, { useEffect, useState } from "react";

export const ControlledComponent = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [hairColor, setHairColor] = useState('');

    useEffect(() => {
        if(name.length < 2) {
            console.log("Name should be gretaer than 4 letter");
        }
    }, [name]);

    const handleSubmit = (e) => {
        console.log(name, age, hairColor);
        e.preventDefault();
    }

    return(
        <form>
            <input name="name" type="text" value={name} onChange={e => setName(e.target.value)}/>
            <input name="age" type="number" value={age} onChange={e => setAge(Number(e.target.value))}/>
            <input name="haircolor" type="text" value={hairColor} onChange={e => setHairColor(e.target.value)}/>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}