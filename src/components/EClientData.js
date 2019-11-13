import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewDropDown from './NewDropDown';
import { changeEmail, changePhone, changeStreet, changeName, changeState, changeZip, pay, update, create } from '../store/actions/EClients';
import EOrders from './EOrders';


export class EClientData extends Component {

    render() {
        return (
            <div className="fhgyt">
                <h4>Client Data:</h4>

                <div className="flex">
                    <div className="bas50 mar-ri-15">
                        <p className="dfrt">Sales Group</p>
                        <NewDropDown
                            id="groups_e"
                            actionType="SET_GROUP_E_OPTION"
                            height="37px"
                            status={this.props.isOpenGroup}
                            menu={this.props.groups}
                            option={this.props.client.group} />
                        <p className="dfrt">Name</p>
                        <input className="simple-input" value={this.props.client.name ? this.props.client.name : ""} onChange={this.props.changeName} />
                        <p className="dfrt">E-mail</p>
                        <input className="simple-input" value={this.props.client.email ? this.props.client.email : ""} onChange={this.props.changeEmail} />
                        {/* <p className="dfrt">Password</p> */}
                        {/* <input className="simple-input" /> */}
                        <p className="dfrt">Phone</p>
                        <input className="simple-input" value={this.props.client.phone ? this.props.client.phone : ""} onChange={this.props.changePhone} />

                    </div>
                    <div className="bas50">
                        <p className="dfrt">Street</p>
                        <input className="simple-input" value={this.props.client.street ? this.props.client.street : ""} onChange={this.props.changeStreet} />
                        <p className="dfrt">State</p>
                        <input className="simple-input" value={this.props.client.state ? this.props.client.state : ""} onChange={this.props.changeState} />
                        <p className="dfrt">Zip</p>
                        <input className="simple-input" value={this.props.client.zip ? this.props.client.zip : ""} onChange={this.props.changeZip} />
                    </div>
                </div>

                <div className="flex hgyt">
                    {this.props.isCreate ? <div onClick={this.props.create} className="create-btn">Create</div> : <div onClick={this.props.update} className="grn-btn">Update</div>}

                </div>

                {this.props.isCreate ? null : <EOrders />}

            </div>
        )
    }

    
}

const mapStateToProps = (state) => ({
    groups: [`group1`, `group2`],
    isOpenGroup: state.newDDStatus.groups_e,
    client: state.eclient,
    payments: state.epayments,
    isOpenTestse: state.newDDStatus.tests_e,
    etest: state.etest,
    isCreate: state.createEClientMode
})

const mapDispatchToProps = dispatch => ({
    changeEmail: (e) => dispatch(changeEmail(e)),
    changePhone: (e) => dispatch(changePhone(e)),
    changeStreet: (e) => dispatch(changeStreet(e)),
    changeName: (e) => dispatch(changeName(e)),
    changeState: (e) => dispatch(changeState(e)),
    changeZip: (e) => dispatch(changeZip(e)),
    pay: (qty, amount) => dispatch(pay(qty, amount)),
    update: () => dispatch(update()),
    create: () => dispatch(create())
})

export default connect(mapStateToProps, mapDispatchToProps)(EClientData)
