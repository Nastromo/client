import React, { Component } from 'react';
import { connect } from 'react-redux';
import RepsList from './RepsList';
import RepsSettings from './RepsSettings';




export class Main extends Component {


    render() {
        return (
            <div className="flex main-d">
                <RepsList />
                <RepsSettings />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
