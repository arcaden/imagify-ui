import './App.css';
import { ToastContainer } from 'react-toastify';
import ImagesList from './Components/ImagesList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import Register from './Components/Register';
import {PrivateRoute} from './util/utils';
import 'react-toastify/dist/ReactToastify.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <div>
          <Switch>
            <Route path="/signup">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/" component={ImagesList}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
