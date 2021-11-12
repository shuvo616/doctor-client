import { createContext, useState } from "react";
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import Appointment from "./components/Appointment/Appointment/Appointment";
import Home from './components/Home/Home/Home';
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/appointment">
          <Appointment></Appointment>
        </Route>
        <Route exact path="/login">
          <Login></Login>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
