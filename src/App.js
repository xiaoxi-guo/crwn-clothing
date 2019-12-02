import React from 'react';
import './App.css';
import {HomePage} from './page/HomePage/HomePage';
import {Route} from 'react-router-dom';

// const HatPage = (props) => {
//   console.log(props);

//   return(
//     <div>
//       <h1>Hat Page </h1>
//     </div>
//   )

// };



function App() {
  return (
    <div > 
      <Route exact path = '/' component = {HomePage}/>
      {/* <Route exact path = '/hat' component = {HatPage}/> */}
    </div>
  );
}

export default App;
