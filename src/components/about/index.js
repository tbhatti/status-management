import React from 'react';
import store from '../../redux/store'
import Header from '../header';
class About extends React.Component {
  
   componentDidMount = () => {
      console.log('Status in Store',store.getState().statusReducer.status);
 }
    render() {
       return (
          <div>
              <Header />
				   <hr/>
             <h1>About...</h1>
          </div>
       )
    }
 }
 export default About;