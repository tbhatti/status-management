import App from '../App';
import Home from '../components/home';
import Contact from '../components/contact';
import About from '../components/about';
import React from 'react';
import { HashRouter, Navigation, BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import PrivateRoute from '../components/auth';


class Routes extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
            authed: localStorage.getItem('name')
		}		
    }
	render () {
		return (
			<HashRouter>
				<div>
					<div className="flex-line">
						<div className="content"> 
							<Switch>				
								<Route exact path='/' component={App}/>			  
								<Route path='/home' component={Home}/>
								<PrivateRoute path='/' authed={this.state.authed}>									
									<Route component={About} path="/about" />
									<Route component={Contact} path="/contact" />									
								</PrivateRoute>
							</Switch> 
						</div>
					</div>   
					<Footer />
				</div> 
			</HashRouter>
		)
	}
}
export default Routes;
