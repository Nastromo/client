import React, { Component } from 'react';
import { connect } from 'react-redux';
import RepsListMini from './RepsListMini';



export class GroupSettings extends Component {
    constructor(props) {
        super(props);
        this.time = [`8:30am`, `9:30am`];
    }

    render() {
        return (
            <div className="driv-set">
                <p className="title-input">Sales Representatives:</p>
                <input type="text" className="simple-input" />

                <RepsListMini />

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

export default connect(mapStateToProps, mapDispatchToProps)(GroupSettings)
