import React, { Component } from 'react'
import { connect } from 'react-redux'
import ClientsList from './ClientsList';
import ClientsSettings from './ClientsSettings';
import CreateClient from './CreateClient';



export class Clients extends Component {
    render() {
        return (
            <div className="flex main-d">
                <ClientsList />
                {this.props.client ? <ClientsSettings /> : null}
                {this.props.createClient ? <CreateClient /> : null}
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    client: state.client,
    createClient: state.createClient
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Clients)
