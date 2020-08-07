import React from 'react';
import {Redirect} from 'react-router-dom';

class Home extends React.Component {
   constructor (props) {
		super(props)
		this.state = {
            redirect: false
		}
		
    }
   onSubmit = () => {
      console.log('CLICKKKEDDDDDDDDDDDDDDDDDDDDDDD');
        this.setState({redirect: true})
    
   }
    render() {
       return (
          <div>
          <button onClick={this.onSubmit}>Login</button>
          {this.state.redirect && <Redirect to="/contact" />}
          </div>
       )
      
    }
 }
 export default Home;