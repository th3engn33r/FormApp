import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Navbar from './Navbar';
import Home from './Home';
import PersonalForm from './Form';
import EduForm from './EduForm';
import ExpForm from './ExpForm';
import SkillForm from './SkillForm';
import Thankyou from './Thankyou';
import Store from './Store';


class App extends Component {

    componentDidMount(){
        Store.subscribe(() => this.forceUpdate());
    }

    render() {
        console.log(Store.getState().data);
        return (
        	<Router history={browserHistory}>
        		<Route path="/" component={Navbar} >
        			<IndexRoute component={Home} />
        			<Route path="p" component={PersonalForm}/>
        			<Route path="h" component={Home}/>
        			<Route path="e" component={EduForm} />
        			<Route path="ex" component={ExpForm} />
        			<Route path="s" component={SkillForm} />
        			<Route path="t" component={Thankyou} />
        		</Route>
        	</Router>
        );
    }
}

export default App;
