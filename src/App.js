import React from 'react';
import './App.css';
import HomePage from './page/HomePage/HomePage';
import ShopPage from './page/ShopPage/ShopPage';
import {Route, Switch} from 'react-router-dom';
import Header from './component/Header/Header';

// const HatPage = (props) => {
//   console.log(props);

//   return(
//     <div>
//       <h1>Hat Page </h1>
//       <button onClick={()=>props.history.push('/shop')}>Click </button>
//     </div>
//   )

// };



function App() {
  return (
    <div > 
      <Header/>
      <Switch>
        <Route exact path = '/' component = {HomePage}/>
        <Route exact path = '/shop' component = {ShopPage}/>
        {/* <Route exact path = '/hatpage' component = {HatPage}/> */}
      </Switch>
    </div>
  );
}

export default App;
