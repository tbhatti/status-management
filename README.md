# Status management

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run create`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## `Setup webpack`
Create webpack.config.js at root folder and paste following contents for less, css etc.
```python
var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry : './src/index.js',
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'index_bundle.js'
    },
    module : {
        rules : [
            {test : /\.(js)$/, use:'babel-loader'},
            {test : /\.less$/, 
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'less-loader' }
                ]
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
              }
        ]
    },
    mode:'development',
    plugins : [
        new HtmlWebpackPlugin ({
            template : './public/index.html'
        })
    ]

}
```

## `Setup bable`
Create babel.config.js at root folder and paste following contents
```python
module.exports = {
    presets: [ "@babel/preset-env", "@babel/preset-react" ],
    plugins: [ "@babel/plugin-transform-arrow-functions", "@babel/plugin-proposal-class-properties" ]
}
```
## `Setup Routs`
Install following two packages
```python
"react-router": "^5.2.0",
 "react-router-dom": "^5.2.0"
 ```
Then create routes.js file and have following contents in the file
```python
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
```
    
