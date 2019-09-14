import React, { Component } from 'react'
import { connect } from 'react-redux'
import TestsList from './TestsList';




export class PhysiciansSettings extends Component {
    render() {
        return (
            <div className="driv-set">
                <div className="flex ju-btw">
                    <div className="bas39">
                        <div className="margju">
                            <p className="title-input-s">Client Name:</p>
                            <input type="text" className="simple-input-s ma-rg" />
                        </div>

                        <div className="margju">
                            <p className="title-input-s">NPI:</p>
                            <input type="text" className="simple-input-s ma-rg" />
                        </div>

                        <div className="margju">
                            <p className="title-input-s">First Name:</p>
                            <input type="text" className="simple-input-s ma-rg" />
                        </div>

                        <div className="margju">
                            <p className="title-input-s">Last Name:</p>
                            <input type="text" className="simple-input-s ma-rg" />
                        </div>

                        <div className="margju">
                            <p className="title-input-s">Middle Name:</p>
                            <input type="text" className="simple-input-s ma-rg" />
                        </div>

                        <div className="margju">
                            <p className="title-input-s">Suffix:</p>
                            <input type="text" className="simple-input-s ma-rg" />
                        </div>
                        
                        <p className="title-input-s">CLIENT LOCATIONS:</p>
                        <div className="flex gress">
                            <p className="bas39">Location ID</p>
                            <p className="bas59">Location Name</p>
                        </div>
                    </div>
                    <div className="bas59">
                        <TestsList />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PhysiciansSettings)
