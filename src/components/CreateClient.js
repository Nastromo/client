import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createLoginSep } from '../store/actions/Clients';




export class CreateClient extends Component {
    createLogin = (e) => {
        if (this.login.value && this.pass.value && this.title.value) {
            this.props.createLoginSep(this.title.value, this.login.value, this.pass.value);
        }
    }

    render() {
        return (
            <div className="driv-set">
                <p className="title-input-s">Client Name:</p>
                <input className="simple-input-s" ref={el => this.title = el} />
                <div className="flex marg-k">
                    <input ref={el => this.login = el} className="simple-input-s ma-rg" placeholder="login" />
                    <input ref={el => this.pass = el} className="simple-input-s ma-rg" placeholder="password" />
                    <div onClick={this.createLogin} className="create-btn">Create</div>
                </div>

            </div>
        )
    }
}



const mapStateToProps = (state) => ({
    client: state.client,
})

const mapDispatchToProps = dispatch => ({
    createLoginSep: (title, login, pass) => dispatch(createLoginSep(title, login, pass)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateClient)
