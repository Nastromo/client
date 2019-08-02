import React, { Component } from 'react';
import { connect } from 'react-redux';
import { check } from '../store/actions/CheckBox';




export class CheckBox extends Component {

    handleClick = () => {
        this.props.check({
            id: this.props.id,
            status: this.props.status ? false : true,
        })
    }

    render() {
        return (
            <div className="flex-hor">
                <div onClick={this.handleClick} className= {this.props.status ? `check-box checked` : `check-box`}></div>
                <p>{this.props.title}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    check: (obj) => dispatch(check(obj))
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckBox)
