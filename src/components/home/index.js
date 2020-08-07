import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {setStatus} from '../../redux/actions/status';
import { NavLink } from "react-router-dom";

class Home extends React.Component {
   constructor (props) {
		super(props)
		this.state = {
            redirect: false
		}
		
    }
   onSubmit = () => {
      console.log('CLICKKKEDDDDDDDDDDDDDDDDDDDDDDD');
        //this.setState({redirect: true})
        this.props.dispatch(setStatus({name:'Hello Status'})) 
    
   }
    render() {
       return (
          <div>
          <button onClick={this.onSubmit}>Login</button>
          <NavLink className="nav-link" exact activeClassName="active" to="/about">
            about
         </NavLink>
          </div>
       )
      
    }
 }
 export default connect(state => state)(Home);