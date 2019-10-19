import React, { Component } from 'react';
import { connect } from 'react-redux';
import LocationSettings from './LocationSettings';
import { changeClientName, createLogin } from '../store/actions/Clients';




export class GroupSettings extends Component {
    createLogin = (e) => {
        if (this.login.value && this.pass.value) {
            this.props.createLogin(this.login.value, this.pass.value);
        }
    }

    render() {
        return (
            <div className="driv-set">
                <p className="title-input-s">Client Name:</p>
                <input className="simple-input-s" value={this.props.client.title ? this.props.client.title : ""} onChange={this.props.changeClientName}/>
                <div className="flex marg-k">
                    <input ref={el => this.login = el} className="simple-input-s ma-rg" placeholder="login" />
                    <input ref={el => this.pass = el} className="simple-input-s ma-rg" placeholder="password" />
                    <div onClick={this.createLogin} className="create-btn">Create</div>
                </div>

                <LocationSettings />
                




                

            </div>
        )
    }
}



const mapStateToProps = (state) => ({
    client: state.client,
})

const mapDispatchToProps = dispatch => ({
    changeClientName: (e) => dispatch(changeClientName(e)),
    createLogin: (login, pass) => dispatch(createLogin(login, pass)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupSettings)
