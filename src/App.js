import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Notification from './components/Notification';



export class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Notification />
                    <Switch>
                        <Route path="/account" component={PrivateRoute} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(App)


