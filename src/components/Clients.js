import React, { Component } from 'react'
import { connect } from 'react-redux'
import ClientsList from './ClientsList';
import ClientsSettings from './ClientsSettings';



export class Clients extends Component {
    render() {
        return (
            <div className="flex main-d">
                <ClientsList />
                <ClientsSettings />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Clients)
