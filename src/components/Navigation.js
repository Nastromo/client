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
            case `/account/groups`:
                this.setActive(this.processing);
                break;
            case `/account/clients`:
                this.setActive(this.clients);
                break;
            case `/account/physitians`:
                this.setActive(this.phy);
                break;
            case `/account/efunc`:
                this.setActive(this.option6);
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
            case `option3`:
                this.setActive(this.clients);
                break;
            case `option4`:
                this.setActive(this.phy);
                break;
            case `option5`:
                this.setActive(this.locs);
                break;
            case `option6`:
                this.setActive(this.option6);
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
                        <p className="logo-text">Client Service</p>
                        <Link
                            id="option1"
                            onClick={this.handleClick}
                            innerRef={el => this.pending = el}
                            className="menu-active"
                            to="/account/main">Sales Reps</Link>
                        <Link
                            id="option2"
                            onClick={this.handleClick}
                            innerRef={el => this.processing = el}
                            to="/account/groups">Groups</Link>
                        {/* <Link
                            id="option3"
                            onClick={this.handleClick}
                            innerRef={el => this.clients = el}
                            to="/account/clients">Clients</Link>
                        <Link
                            id="option4"
                            onClick={this.handleClick}
                            innerRef={el => this.phy = el}
                            to="/account/physitians">Physicians</Link>
                        <Link
                            id="option5"
                            onClick={this.handleClick}
                            innerRef={el => this.locs = el}
                            to="/account/locs">Clients Locations List</Link> */}
                        <Link
                            id="option6"
                            onClick={this.handleClick}
                            innerRef={el => this.option6 = el}
                            to="/account/efunc">E-func</Link>
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
