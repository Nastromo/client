import React, { Component } from 'react'
import { connect } from 'react-redux'
import ClientsList from './ClientsList';
import ClientsSettings from './ClientsSettings';



export class Clients extends Component {
    render() {
        return (
            <div className="flex main-d">
                <ClientsList />
                {this.props.client ? <ClientsSettings /> : null}
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    client: state.client
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Clients)
