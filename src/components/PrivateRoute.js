import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import LineSpinner from './LineSpinner';
import Main from './Main';
import Groups from './Groups';
import Clients from './Clients';
import Physitians from './Physitians';
import Navigation from './Navigation';
import Locs from './Locs';





export class PrivateRoute extends Component {


    render() {
        if (this.props.isLoading) return <LineSpinner />

        return (
            <div>
                <Navigation />
                <Switch>
                    <Route exact path="/account/main" component={Main} />
                    <Route exact path="/account/groups" component={Groups} />
                    <Route exact path="/account/clients" component={Clients} />
                    <Route exact path="/account/physitians" component={Physitians} />
                    <Route exact path="/account/locs" component={Locs} />
                    
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PrivateRoute))

