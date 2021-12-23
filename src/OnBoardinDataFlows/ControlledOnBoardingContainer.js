import { useState } from "react/cjs/react.development";
import { ControlledOnboardingDataFlows } from "./ControlledOnboardingDataFlows";

const Step1 = ({goToNext}) => {
    return (
      <>
        {"Step1"}
        <button onClick={() => { goToNext({name: 'arun' })}}>Next</button>
      </>
    );
  };
  
  const Step2 = ({goToNext}) => {
    return (
      <>
        {"Step2"}
        <button onClick={() => { goToNext({age: 28 })}}>Next</button>
      </>
    );
  };
  
  const Step3 = ({goToNext}) => {
    return (
      <>
        {"Step3"}
        <button onClick={() => { goToNext({hairColor: 'black' })}}>Next</button>
      </>
    );
  };

export const ControlledOnBoardingContainer = () => {
    const [onBoardingData, setOnboardingData] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);

    const onNext = (stepData) => {
        const nextIndex = currentIndex + 1;
        const updatedData = {
            ...onBoardingData,
            ...stepData
        };
        setCurrentIndex(currentIndex + 1);
        setOnboardingData(updatedData);
        console.log(updatedData);
    };
    console.log(onBoardingData);
 return (
    <>
    <ControlledOnboardingDataFlows onFinish={(data) =>{
      console.log(data);
      alert('Onboarded Succesfully');}
      }
      currentIndex={currentIndex}
      onNext={onNext}
      >
      <Step1 />
      <Step2 />
      <Step3 />
    </ControlledOnboardingDataFlows>
  </>
 )
};