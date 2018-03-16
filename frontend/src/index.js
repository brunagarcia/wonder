import React from 'react';
import ReactDOM from 'react-dom';
import './Assets/css/style.css';
import App from './Components/App/App';
import { BrowserRouter as Router } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
										<Router>
											<App />
										</Router>,  
document.getElementById('root'));
registerServiceWorker();
