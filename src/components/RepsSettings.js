import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewDropDown from './NewDropDown';


export class DriverSettings extends Component {
    constructor(props) {
        super(props);
        this.pick = [`Regular`, `On-Call`];
    }

    render() {
        return (
            <div className="driv-set">
                <p className="title-input">Driver code:</p>
                <p>code...</p>

                <p className="title-input">Driver name:</p>
                <input type="text" className="simple-input" />

                <div className="flex ju-btw">
                    <div className="basis50">
                        <p className="title-input">Region:</p>
                        <input type="text" className="simple-input" />
                    </div>
                    <div className="basis50">
                        <p className="title-input">Phone:</p>
                        <input type="text" className="simple-input" />
                    </div>
                    <div className="basis50">
                        <p className="title-input">Pick Up:</p>
                        <NewDropDown
                            id="pick"
                            actionType="SET_PICKUP_DROP_OPTION"
                            height="37px"
                            status={this.props.isOpenPick}
                            menu={this.pick}
                            option={this.props.optionPick} />
                    </div>
                </div>
                <div className="flex ju-end mar-top-20"><div className="green-btn">Update</div></div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isOpenPick: state.newDDStatus.pick,
    optionPick: {}.pick,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(DriverSettings)
