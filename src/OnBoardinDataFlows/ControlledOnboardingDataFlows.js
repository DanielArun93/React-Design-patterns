import React, { useState } from "react";

export const ControlledOnboardingDataFlows = ({ children, currentIndex, onNext, onFinish }) => {
    
    const goToNext = (stepdata) => {
            onNext(stepdata);
    };
    const currentChild = React.Children.toArray(children)[currentIndex];

    if(React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, { goToNext });
    }

    return null;
}