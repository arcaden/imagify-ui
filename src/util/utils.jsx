import {
  Route,
  Redirect,
} from "react-router-dom";


export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => {
    if(localStorage.getItem('token')) {
      return (<Component {...props} />)
    } else {
      return (<Redirect to='/login' />)
    }
  }} />
)

export const renderRedirect = (user) => {
  console.log(user)
  if (user.id != '') {
    return (<Redirect to='/' />)
  }
}

