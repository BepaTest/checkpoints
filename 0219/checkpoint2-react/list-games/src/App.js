import React from 'react';
import './App.css';
import GameList from './GameList';
import GameDetail from './GameDetail';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
// import GameDetail from './GameDetail';
import { Navbar, Button, Alignment } from '@blueprintjs/core';




// const App = () => {
//   return ( <div>
//     <BrowserRouter>
//       <Switch>
//         <Route exact path='/' component={GameList2} />
//         <Route path='/jeu/promo/:id' component={GameDetail2}/>
//       </Switch>
//     </BrowserRouter>
    
//     </div> );
// }
 















function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar>
          <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>List Games</Navbar.Heading>
            <Navbar.Divider />
            <Link to='/'><Button className="bp3-minimal" icon="home" text="Home" /></Link>
          </Navbar.Group>
        </Navbar>
        <Switch>
          <Route exact path='/' component={GameList} />
          <Route path='/jeu/promo/:id' component={GameDetail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
