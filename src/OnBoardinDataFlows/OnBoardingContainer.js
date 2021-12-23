import { UnControlledOnboardingDataFlows } from "./UncontrolledOnboardingDataFlows";

const Step1 = ({onNext}) => {
    return (
      <>
        {"Step1"}
        <button onClick={() => { onNext({name: 'arun' })}}>Next</button>
      </>
    );
  };
  
  const Step2 = ({onNext}) => {
    return (
      <>
        {"Step2"}
        <button onClick={() => { onNext({age: 28 })}}>Next</button>
      </>
    );
  };
  
  const Step3 = ({onNext}) => {
    return (
      <>
        {"Step3"}
        <button onClick={() => { onNext({hairColor: 'black' })}}>Next</button>
      </>
    );
  };

export const OnBoardingContainer = () => {
 return (
    <>
    <UnControlledOnboardingDataFlows onFinish={(data) =>{
      console.log(data);
      alert('Onboarded Succesfully');}
      }>
      <Step1 />
      <Step2 />
      <Step3 />
    </UnControlledOnboardingDataFlows>
  </>
 )
};