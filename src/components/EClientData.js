import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewDropDown from './NewDropDown';


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
                            option={this.props.group} />
                        <p className="dfrt">E-mail</p>
                        <input className="simple-input" />
                        <p className="dfrt">Password</p>
                        <input className="simple-input" />
                        <p className="dfrt">Phone</p>
                        <input className="simple-input" />

                    </div>
                    <div className="bas50">
                        <p className="dfrt">Street</p>
                        <input className="simple-input" />
                        <p className="dfrt">City</p>
                        <input className="simple-input" />
                        <p className="dfrt">State</p>
                        <input className="simple-input" />
                        <p className="dfrt">Zip</p>
                        <input className="simple-input" />
                    </div>
                </div>

                <div className="flex hgyt">
                    <div className="grn-btn">Update</div>
                </div>

                <h4>Orders:</h4>
                <div className="ord-tit">
                    <p className="bas25">Test</p>
                    <p className="bas25">Qty</p>
                    <p className="bas25">Payment</p>
                    <p className="bas25">Date</p>
                </div>
                {this.returnOrders()}

                <div className="create-btn">Create order</div>
            </div>
        )
    }

    returnOrders = () => {
        return (
            <div className="ferof">

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    groups: [`option1`, `option2`],
    isOpenGroup: state.newDDStatus.groups_e,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(EClientData)
