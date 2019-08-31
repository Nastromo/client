import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewDropDown from './NewDropDown';
import CheckBox from './Checkbox';
import { changeFirst, changeLast, changePhone, changeEmail, changeDate, changeComment, updateRep } from '../store/actions/Reps';




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
                        <input type="text" className="simple-input" value={this.props.rep.firstName ? this.props.rep.firstName : ""} onChange={this.props.changeFirst} />
                    </div>

                    <div className="basis50 marg-ri-20">
                        <p className="title-input">Last Name:</p>
                        <input type="text" className="simple-input" value={this.props.rep.lastName ? this.props.rep.lastName : ""} onChange={this.props.changeLast} />
                    </div>

                    <div className="basis50 marg-ri-20">
                        <p className="title-input">Phone:</p>
                        <input type="text" className="simple-input" value={this.props.rep.phone ? this.props.rep.phone : ""} onChange={this.props.changePhone} />
                    </div>

                    <div className="basis50">
                        <p className="title-input">Email:</p>
                        <input type="text" className="simple-input" value={this.props.rep.email ? this.props.rep.email : ""} onChange={this.props.changeEmail} />
                    </div>
                </div>

                <div className="flex ju-btw al-cntr">
                    <div className="basis50 marg-ri-20">
                        <p className="title-input">Start date:</p>
                        <input type="text" className="simple-input" value={this.props.rep.startDate ? this.props.rep.startDate : ""} onChange={this.props.changeDate} />
                    </div>

                    <div className="basis50 marg-ri-20">
                        <p className="title-input">Daily Statistic Report Time:</p>
                        <NewDropDown
                            id="time"
                            actionType="SET_TIME_DROP_OPTION"
                            height="37px"
                            status={this.props.isOpenTime}
                            menu={this.time}
                            option={this.props.rep.reportTime} />
                    </div>

                    <div className="basis50">
                        <p className="title-input">Preferences:</p>
                        <div className="flex ju-btw">
                            <CheckBox status={this.props.rep.tnpReport} title="TNP Report" id="tnp" />
                            <CheckBox status={this.props.rep.supplyOrders} title="Supply Orders" id="supply" />
                            <CheckBox status={this.props.rep.igsReports} title="IGS Reports" id="igs" />
                        </div>
                    </div>
                </div>

                <p className="title-input">Comment:</p>
                <textarea
                    className="gross-other"
                    value={this.props.rep.comment ? this.props.rep.comment : ""}
                    onChange={this.props.changeComment}
                ></textarea>

                {
                    this.props.isCreate ? (
                        <div className="flex ju-end mar-top-20">
                            <div className="create-btn" onClick={this.props.updateRep}>Create</div>
                        </div>
                    ) : (
                            <div className="flex ju-end mar-top-20">
                                <div className="green-btn" onClick={this.props.updateRep}>Update</div>
                            </div>
                        )
                }


            </div>
        )
    }
}



const mapStateToProps = (state) => ({
    rep: state.rep,
    isOpenTime: state.newDDStatus.time,
    isCreate: state.isCreate,
})

const mapDispatchToProps = dispatch => ({
    changeFirst: (text) => dispatch(changeFirst(text)),
    changeLast: (text) => dispatch(changeLast(text)),
    changePhone: (text) => dispatch(changePhone(text)),
    changeEmail: (text) => dispatch(changeEmail(text)),
    changeDate: (text) => dispatch(changeDate(text)),
    changeComment: (text) => dispatch(changeComment(text)),
    updateRep: () => dispatch(updateRep()),
})

export default connect(mapStateToProps, mapDispatchToProps)(DriverSettings)
