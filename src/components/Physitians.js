import React, { Component } from 'react'
import { connect } from 'react-redux'
import PhysiciansList from './PhysiciansList';
import PhysiciansSettings from './PhysiciansSettings';





export class Physitians extends Component {
    render() {
        return (
            <div className="flex main-d">
                <PhysiciansList />
                <PhysiciansSettings />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Physitians)
