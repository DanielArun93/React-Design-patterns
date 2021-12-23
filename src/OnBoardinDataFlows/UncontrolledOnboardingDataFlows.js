import React, { useState } from "react";

export const UnControlledOnboardingDataFlows = ({ children, onFinish }) => {
    const [onBoardingData, setOnboardingData] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);

    const currentChild = React.Children.toArray(children)[currentIndex];

    const onNext = (stepData) => {
        const nextIndex = currentIndex + 1;
        const updatedData = {
            ...onBoardingData,
            ...stepData
        };
        if(nextIndex < children.length) {
            setCurrentIndex(currentIndex + 1);
        } else {
            onFinish(updatedData);
        }
        setOnboardingData(updatedData);
    };
    console.log(onBoardingData);
    if(React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, { onNext });
    }

    return null;
}