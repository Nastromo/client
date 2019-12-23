import React, { Component } from 'react';
import { connect } from 'react-redux';
import RepsList from './RepsList';
import RepsSettings from './RepsSettings';




export class Main extends Component {


    render() {
        console.log(this.props.isShow)
        return (
            <div className="flex main-d">
                <RepsList />
                {this.props.isShow ? <RepsSettings /> : null}
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isShow: state.showReps,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
