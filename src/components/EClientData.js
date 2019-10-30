import React, { Component } from 'react'
import { connect } from 'react-redux'

export class EClientData extends Component {
    render() {
        return (
            <div className="fhgyt">
                <h4>Client Data:</h4>

                <p className="dfrt">E-mail</p>
                <input className="simple-input" />
                <p className="dfrt">Password</p>
                <input className="simple-input" />
                <p className="dfrt">Phone</p>
                <input className="simple-input" />
                <p className="dfrt">Street</p>
                <input className="simple-input" />
                <p className="dfrt">City</p>
                <input className="simple-input" />
                <p className="dfrt">State</p>
                <input className="simple-input" />
                <p className="dfrt">Zip</p>
                <input className="simple-input" />

                <div className="flex hgyt">
                    <div className="grn-btn">Update</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(EClientData)
