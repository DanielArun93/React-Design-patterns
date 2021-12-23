import React from "react";
import { useState } from "react/cjs/react.development";

export const UserFormDetails = ({formData, goToNext, goToPrevious}) => {
    const [data,setData] = useState(formData.userDetails);
    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }
    return (
        <>
            <h1>USER DETAILS FORM</h1>
            <form onSubmit={(e)=> {
                console.log(e);
                formData.userDetails = {
                    ...formData.userDetails,
                    ...data
                };
                goToNext(formData);
                e.preventDefault();
            }}>
                <input name="name" type="text" value={data.name} onChange={handleInputChange}/>
                <input name="age" type="number" value={data.age} onChange={handleInputChange}/>
                <input type="submit" value="Next"/>
            </form>
        </>
    );
};