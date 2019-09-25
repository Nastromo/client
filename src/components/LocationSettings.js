import React, { Component } from 'react'
import { connect } from 'react-redux'
import LocationsList from './LocationsList';
import LocationData from './LocationData';




export class LocationSettings extends Component {

    render() {
        if (this.props.client) {
            return (
                <div>
                    <p className="title-input-s">Existing logins:</p>
                    <div className="heiht130">
                        <div className="flex margoi">
                            <input type="text" className="simple-input-s ma-rg" placeholder="login" />
                            <input type="text" className="simple-input-s ma-rg" placeholder="password" />
                            <div className="green-btn">Update</div>
                        </div>

                    </div>


                    <LocationsList />
                    <LocationData location={{}} />
                    <div className="mar-rad">
                        <p className="title-input-s">Sales Group ID</p>
                        <input type="text" className="simple-input-s" />

                        <div className="flex">
                            <div className="btn-whi">View Schedule</div>
                        </div>

                    </div>
                </div>
            )
        } else {
            return <div></div>
        }
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}




export default connect(mapStateToProps, mapDispatchToProps)(LocationSettings)
