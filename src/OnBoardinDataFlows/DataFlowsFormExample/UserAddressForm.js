import React from "react";
import { useState } from "react/cjs/react.development";

export const UserAddressForm = ({formData, goToNext, goToPrevious}) => {
    const [data,setData] = useState(formData.userAddress);
    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }
    return (
        <>
            <h1>USER ADDRESS DETAILS FORM</h1>
            <form onSubmit={(e)=> {
                formData.userAddress = {
                    ...formData.userAddress,
                    ...data
                };
                goToNext(formData);
                e.preventDefault();
            }}>
                <input name="country" type="text" value={data.country} onChange={handleInputChange}/>
                <input name="state" type="text" value={data.state} onChange={handleInputChange}/>
                <button onClick={() => goToPrevious(formData)}>Previous</button>
                <input type="submit" value="Next"/>
            </form>
        </>
    );
};