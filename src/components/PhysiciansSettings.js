import React, { Component } from 'react'
import { connect } from 'react-redux'
import TestsList from './TestsList';
import NewDropDown from './NewDropDown';




export class PhysiciansSettings extends Component {
    constructor(props) {
        super(props);
        this.creds = [`1`, `2`];
        this.pecos = [`1`, `2`];
    }

    render() {
        return (
            <div className="driv-set">
                <div className="flex ju-btw">
                    <div className="bas39">
                        <div className="margju">
                            <p className="title-input-s">Physician Id:</p>
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
                            <p className="title-input-s">PECOS:</p>
                            <NewDropDown
                                id="pecos"
                                actionType="SET_PECOS_OPTION"
                                height="30px"
                                status={this.props.isOpenPecos}
                                menu={this.pecos}
                                option={this.props.pecos} />

                        </div>

                        <div className="margju">
                            <p className="title-input-s">Credentials:</p>
                            <NewDropDown
                                id="creds"
                                actionType="SET_CREDS_OPTION"
                                height="30px"
                                status={this.props.isOpenCreds}
                                menu={this.creds}
                                option={this.props.creds} />
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
