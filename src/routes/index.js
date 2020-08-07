import App from '../App';
import Home from '../components/home';
import Contact from '../components/contact';
import About from '../components/about';
import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';

function Routes() {
    return (
		<BrowserRouter>
			<div>
				<Header />
				<hr/>
				<div className="flex-line">
					<div className="content"> 
						<Switch>				
							<Route exact path='/' component={App}/>			  
							<Route path='/home' component={Home}/>
							<Route path='/contact' component={Contact}/>
							<Route path='/about' component={About}/>
						</Switch> 
					</div>
				</div>   
				<Footer />
    		</div> 
	  	</BrowserRouter>
    )
}
export default Routes;