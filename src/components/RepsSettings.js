import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewDropDown from './NewDropDown';
import CheckBox from './Checkbox';




export class DriverSettings extends Component {
    constructor(props) {
        super(props);
        this.time = [`8:30am`, `9:30am`];
    }

    render() {
        return (
            <div className="driv-set">

                <div className="flex ju-btw">
                    <div className="basis50 marg-ri-20">
                        <p className="title-input">First Name:</p>
                        <input type="text" className="simple-input" />
                    </div>

                    <div className="basis50 marg-ri-20">
                        <p className="title-input">Last Name:</p>
                        <input type="text" className="simple-input" />
                    </div>

                    <div className="basis50 marg-ri-20">
                        <p className="title-input">Phone:</p>
                        <input type="text" className="simple-input" />
                    </div>

                    <div className="basis50">
                        <p className="title-input">Email:</p>
                        <input type="text" className="simple-input" />
                    </div>
                </div>

                <div className="flex ju-btw al-cntr">
                    <div className="basis50 marg-ri-20">
                        <p className="title-input">Start date:</p>
                        <input type="text" className="simple-input" />
                    </div>

                    <div className="basis50 marg-ri-20">
                        <p className="title-input">Daily Statistic Report Time:</p>
                        <NewDropDown
                            id="time"
                            actionType="SET_TIME_DROP_OPTION"
                            height="37px"
                            status={this.props.isOpenTime}
                            menu={this.time}
                            option={this.props.optionTime} />
                    </div>

                    <div className="basis50">
                        <p className="title-input">Preferences:</p>
                        <div className="flex ju-btw">
                            <CheckBox status={this.props.rep.tnp} title="TNP Report" id="tnp" />
                            <CheckBox status={this.props.rep.tnp} title="Supply Orders" id="supply" />
                            <CheckBox status={this.props.rep.tnp} title="IGS Reports" id="igs" />
                        </div>
                    </div>
                </div>

                <p className="title-input">Comment:</p>
                <textarea
                    className="gross-other"
                    value={this.props.rep.cooment}
                    onChange={this.props.changeComment}
                ></textarea>

                <div className="flex ju-end mar-top-20"><div className="green-btn">Update</div></div>

            </div>
        )
    }
}



const mapStateToProps = (state) => ({
    rep: {},
    isOpenTime: state.newDDStatus.time,
    optionTime: {}.time,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(DriverSettings)
