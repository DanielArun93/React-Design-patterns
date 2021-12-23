import React, { useState} from "react";
import { ControlledDataFlows } from "./ControlledDataFlows";
import { UserFormDetails } from "./UserDetailsForm";
import { UserAddressForm } from "./UserAddressForm";
import { UserBankDetailsForm } from "./UserBankDetailsForm";

export const DataFlowsContainer = () => {
    const [formData, setFormData] = useState({
        userDetails: {
            name: '',
            age: ''
        },
        userAddress: {
            country: '',
            state: ''
        },
        userBankDetails: {
            bankAccNo: '',
            IFSC: ''
        }
    });

    const [currentIndex,setCurrentIndex] = useState(0);

    const onNext = (stepData) => {
        const updatedData = {
            ...formData,
            ...stepData
        };

        setFormData(updatedData);
        setCurrentIndex(currentIndex + 1);
    };

    const onPrevious = (stepData) => {
        setCurrentIndex(currentIndex - 1);
    }

    const onFinish = (data) => {
        console.log("Data Submitted Successfully");
        alert("Data Submitted Successfully");
    };
    console.log("formData", formData);
  return (
      <>
        <ControlledDataFlows
            currentIndex={currentIndex}
            formData={formData}
            onNext={onNext}
            onPrevious={onPrevious}
            onFinish={onFinish}
        >
            <UserFormDetails />
            <UserAddressForm />
            <UserBankDetailsForm />
        </ControlledDataFlows>
      </>
  )
};