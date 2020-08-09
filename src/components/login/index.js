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
          <div className="container">
             <div className="row">
             <form>
               <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
               </div>
               <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
               </div>
               <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                  <label className="form-check-label" for="exampleCheck1">Check me out</label>
               </div>
               <button type="submit" className="btn btn-primary" onClick={this.onLogin}>Submit</button>
            </form>
             </div>
             {this.state.redirect && localStorage.getItem("name") === 'true' && <Redirect to={`/home`} />}
          </div>         
       )      
    }
 }
 export default connect(state => state)(Home);