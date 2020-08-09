import App from '../App';
import Login from '../components/login';
import Contact from '../components/contact';
import About from '../components/about';
import Dashboard from '../components/dashboard';
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
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
								<PrivateRoute path='/' authed={this.state.authed}>									
									<Route component={About} path="/about" />
									<Route component={Contact} path="/contact" />
									<Route component={Dashboard} path="/home" />									
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
