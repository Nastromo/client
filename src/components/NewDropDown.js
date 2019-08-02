import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showDropDown, setOption } from '../store/actions/NewDropDown';




export class NewDropDown extends Component {
    componentWillMount() {
        document.addEventListener('click', this.handleDropDown);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleDropDown);
    }

    handleDropDown = (e) => {
        if (this.option.contains(e.target)) {
            this.props.showDropDown({
                id: this.props.id,
                status: true
            });
        } else {
            this.props.showDropDown({
                id: this.props.id,
                status: false
            });
        }
    }

    choseOption = (e) => {
        this.props.setOption({
            actionType: this.props.actionType,
            id: this.props.id,
            option: e.target.id,
        });
    }

    render() {
        return (
            <div className="relative">
                <div ref={el => this.option = el} className={this.props.option ? `drop-select drop-select-chosen` : `drop-select`} style={{height: this.props.height}}>
                    {this.props.option ? this.props.option : `Select`}</div>

                <div className={this.props.status ? `drop-down drop-down-show` : `drop-down`}>
                    {
                        this.props.menu.map((item, i) => {
                            return (
                                <div onClick={this.choseOption} id={item} className="menu-item" key={i}>
                                    {item}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    showDropDown: (obj) => dispatch(showDropDown(obj)),
    setOption: (obj) => dispatch(setOption(obj)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NewDropDown)
