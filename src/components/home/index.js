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
    onLogin = () => {     
        this.setState({redirect: true})
        this.props.dispatch(setStatus({name:'Hello Status'}))
        localStorage.setItem("name", true);    
   }
    render() {
       return (
          <div>
          <button onClick={this.onLogin}>Login</button>
         {this.state.redirect && localStorage.getItem("name") === 'true' && <Redirect to={`/about`} />}
          </div>          
       )      
    }
 }
 export default connect(state => state)(Home);