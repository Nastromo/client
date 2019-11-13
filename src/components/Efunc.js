import React, { Component } from 'react';
import { connect } from 'react-redux';
import EClientsList from './EClientsList';
import EClientData from './EClientData';



export class Efunc extends Component {
    render() {
        return (
            <div className="main-div flex">
                <EClientsList />
                {this.props.isCreate || this.props.eclient.id ? <EClientData /> : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isCreate: state.createEClientMode,
    eclient: state.eclient,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Efunc)
