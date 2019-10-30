import React, { Component } from 'react';
import { connect } from 'react-redux';
import EClientsList from './EClientsList';
import EClientData from './EClientData';



export class Efunc extends Component {
    render() {
        return (
            <div className="main-div flex">
                <EClientsList />
                <EClientData />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Efunc)
