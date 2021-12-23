import React from "react";

export const ControlledDataFlows = ({ children, formData, currentIndex, onNext, onPrevious, onFinish }) => {
  
    const goToNext = (stepdata) => {
        const nextIndex = currentIndex + 1;
        if(nextIndex < React.Children.toArray(children).length) {
            onNext(stepdata);
        } else {
            onFinish(stepdata);
        }
    }

    const goToPrevious = (stepdata) => {
        const prevIndex = currentIndex - 1;
        if(prevIndex > -1) {
            onPrevious(stepdata);
        }
    }
    const currentChild = React.Children.toArray(children)[currentIndex];
    if(React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, { formData, goToNext, goToPrevious });
    }
    return null;
};