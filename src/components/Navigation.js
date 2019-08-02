import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';




export class Navigation extends Component {
    setActive = (element) => {
        const activeNavItem = document.getElementsByClassName('menu-active');
        activeNavItem[0].classList.remove(`menu-active`);
        element.classList.add(`menu-active`);
    }

    componentDidMount() {
        switch (this.props.location.pathname) {
            case `/account/main`:
                this.setActive(this.pending);
                break;
            case `/account/option2`:
                this.setActive(this.processing);
                break;
            default: break;
        }
    }

    handleClick = (e) => {
        switch (e.currentTarget.id) {
            case `option1`:
                this.setActive(this.pending);
                break;
            case `option2`:
                this.setActive(this.processing);
                break;
            default: break;
        }
    }

    handleExit = () => {
        this.props.history.push(`/`);
    }

    render() {
        return (
            <div className="white-back">
                <div className="main-nav">
                    <div className="main-categories">
                        <p className="logo-text">Logistics</p>
                        <Link
                            id="option1"
                            onClick={this.handleClick}
                            innerRef={el => this.pending = el}
                            className="menu-active"
                            to="/account/main">Drivers</Link>
                        <Link
                            id="option2"
                            onClick={this.handleClick}
                            innerRef={el => this.processing = el}
                            to="/account/option2">Option2</Link>
                    </div>

                    <div className="work-info">
                        <p className="nav-te" onClick={this.handleExit}>Log out</p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    

})

const mapDispatchToProps = (dispatch) => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navigation))
