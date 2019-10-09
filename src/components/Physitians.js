import React, { Component } from 'react'
import { connect } from 'react-redux'
import PhysiciansList from './PhysiciansList';
import PhysiciansSettings from './PhysiciansSettings';





export class Physitians extends Component {
    render() {
        return (
            <div className="flex main-d">
                <PhysiciansList />
                { this.props.activePhyRaw || this.props.activePhyRaw === 0  ? <PhysiciansSettings /> : null}
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    activePhyRaw: state.activePhyRaw
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Physitians)
