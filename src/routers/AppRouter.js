import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { Router, Route, Switch } from 'react-router-dom';
import Index from '../components/Index';
import Truck from '../components/truck/Truck';
import Quote from '../components/quote/Quote';
import Blog from '../components/blog/Blog';
import Contact from '../components/contact/Contact';

const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
           <Switch>
                <Route path='/' component={Index} exact={true}/>
                <Route path='/contact' component={Contact} exact={true}/>
                <Route path='/quote' component={Quote} exact={true}/>
                <Route path='/truck' component={Truck} exact={true}/>
                <Route path='/blog' component={Blog} exact={true}/>
           </Switch> 
        </div>
    </Router>
)

export default AppRouter;