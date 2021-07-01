import Home from "./pages/home/Home.jsx"
import Profile from "./pages/profile/Profile.jsx"
import Login from "./pages/login/Login.jsx"
import Register from "./pages/register/Register.jsx";
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext.jsx";


function App() {
  const {user} = useContext(AuthContext)
  return (
    <Router>
      <Switch>
        <Route exact path="/">
         {user ? <Home/> :<Register/>}
        </Route>
        <Route path="/login">
         {user ? <Redirect to="/"/> : <Login/>}
        </Route>
        <Route path="/register">
         {user ? <Redirect to="/"/> : <Register/>}
        </Route>
        <Route path="/profile/:username">
          <Profile/>
        </Route>
      </Switch>
    </Router>
    )
}

export default App;
