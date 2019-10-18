import React, { Component } from 'react';
import { connect } from 'react-redux';
import LocationSettings from './LocationSettings';




export class GroupSettings extends Component {
    constructor(props) {
        super(props);
        this.time = [`8:30am`, `9:30am`];
    }

    render() {
        return (
            <div className="driv-set">
                <p className="title-input-s">Client Name:</p>
                <input type="text" className="simple-input-s" />
                <div className="flex marg-k">
                    <input type="text" className="simple-input-s ma-rg" placeholder="login" />
                    <input type="text" className="simple-input-s ma-rg" placeholder="password" />
                    <div className="create-btn">Create</div>
                </div>

                <LocationSettings />
                




                

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
