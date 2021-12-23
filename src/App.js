import { SplitScreen } from "./LayoutComponents/SplitScreen";
import { RegularList } from "./ListComponents/RegularList";
import { SmallPersonListComponent } from "./ListComponents/SmallPersonListComponent";
import { LargePersonListComponent } from "./ListComponents/LargePersonListComponent";
import { UnControlledModal } from "./ModalComponent/UnControlledModal";
import { UncontrolledComponent } from "./UncontrolledComponent";
import { ControlledComponent } from "./ControlledComponent";
import { ControlledModal } from "./ModalComponent/ControlledModal";
import { ControlledContainerModal } from "./ModalComponent/ControlledContainerModal";
import { OnBoardingContainer } from "./OnBoardinDataFlows/OnBoardingContainer";
import { ControlledOnBoardingContainer } from "./OnBoardinDataFlows/ControlledOnBoardingContainer";
import { DataFlowsContainer } from "./OnBoardinDataFlows/DataFlowsFormExample/DataFlowsContainer";
import { RecursiveComponent } from "./RecursiveComponent";
import { Button, GreenButton, DangerButton } from "./Composition";
import { AlertButton, SuccessButton  } from "./PartiallyApply";

const People = [
  {
    name: 'arun',
    age: 28,
    haircolor: 'black',
    hobbies: ['yoga', 'cricket', 'movies', 'trekking']
  },
  {
    name: 'Kurup',
    age: 23,
    haircolor: 'grey',
    hobbies: ['dancing', 'fooball', 'webseries', 'travelling']
  }
];

const Products = [
  {
    name: 'shirt',
    price: '$25',
    description: 'Casual Checked Shirt',
    rating: '4'
  },
  {
    name: 'kurti',
    price: '$45',
    description: 'Casual Kurti',
    rating: '4.6'
  },
  {
    name: 'jeans',
    price: '$75',
    description: 'Casual Jeans',
    rating: '4.3'
  }
]

// const Left = ({message}) => {
//   return (
//     <h1 style={{backgroundColor: 'red'}}>Left! {message}</h1>
//   );
// };

// const Right = ({name}) => {
//   return (
//     <p style={{backgroundColor: 'green'}}>Right!...{name}</p>
//   );
// };

// function App() {
//   return (
//     <SplitScreen leftWeight={1} rightWeight={3}>
//       <Left message={'This is message from Bond'}/>
//       <Right name={'James Bond 007'}/>
//     </SplitScreen>
//   );
// }

const nestedObj = {
  a:1,
  b: {
      b1:2,
      b2: {
          b21:3,
      },
      b3: {
          b31: 'Hello',
          b32: 'hey'
      }
  },
  c: {
      c1: {
          c11: 'kurup',
          c12: {
              c121: 'murali'
          }
      },
      c2: {
          c21: 'fate'
      }
  }
};



function App() {
  return (
    <>
      <Button size='large' color='red' text='Danger'/>
      <Button size='medium' color='green' text='Success'/>
      <GreenButton size='large' text='Success'/>
      <DangerButton text='Danger'/> 
      <AlertButton text='partialApply' size='medium'/>
      <SuccessButton text='partialApply'/>
    </>
  );
}

export default App;
