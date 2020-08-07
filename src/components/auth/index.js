import React, { cloneElement, Children } from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ children, authed, ...rest }) =>
  <Route
    {...rest}
    render={(props) => localStorage.getItem('name') === 'true' ? // Check value in local storage
      <div>
        {Children.map(children, child => cloneElement(child, { ...child.props }))}
      </div>
      :
      <Redirect to={{ pathname: '/', state: { from: props.location } }} />}
  />

export default PrivateRoute