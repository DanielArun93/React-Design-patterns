import React from "react";
import { useState } from "react/cjs/react.development";

export const UserBankDetailsForm = ({formData, goToNext, goToPrevious}) => {
    const [data,setData] = useState(formData.userBankDetails);
    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }
    return (
        <>
            <h1>USER BANK DETAILS FORM</h1>
            <form onSubmit={(e)=> {
                formData.userBankDetails = {
                    ...formData.userBankDetails,
                    ...data
                };
                goToNext(formData);
                e.preventDefault();
            }}>
                <input name="bankAccNo" type="text" value={data.bankAccNo} onChange={handleInputChange}/>
                <input name="IFSC" type="number" value={data.IFSC} onChange={handleInputChange}/>
                <button onClick={() => goToPrevious(formData)}>Previous</button>
                <input type="submit" value="Next"/>
            </form>
        </>
    );
};