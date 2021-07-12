import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Notification from './pages/Notification';
import Notify from './pages/Notify';
import Orders from './pages/Orders';
import Login from './pages/Login';
import Register from './pages/SignUp';
import Test from './pages/test';


function App() {

  
  return (
    
    
    <>
      
      <Router>
          <Switch>
            <>
              <Navbar/>
              <Route path = '/55' exact component = {Test}/>
              <Route path = '/' exact component = {Login}/>
              <Route path = '/register' component = {Register} />
              <Route path = '/dashboard'  component = {Dashboard}/>
              <Route path = '/notifications' component = {Notification}/>
              <Route path = '/notify' component = {Notify}/>
              <Route path = '/orders' component = {Orders}/>
            </>
          </Switch>
      </Router>
      
    </>
    
  );
}

export default App;
