import React from 'react';
import './App.css';
import HomePage from './page/HomePage/HomePage';
import ShopPage from './page/ShopPage/ShopPage';
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
      <Route exact path = '/shop' component = {ShopPage}/>
    </div>
  );
}

export default App;
