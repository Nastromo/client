import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchInput from './SearchInput';
import { isActive } from '../store/actions/Tabs';



export class GroupList extends Component {


    returnSearch = () => {
        if (this.props.isAct) {
            return (
                <SearchInput
                    id="order"
                    type="text"
                    view="search-input"
                    url="order"
                    onItemClick={this.props.addOrder}
                    isLoading={this.props.isLoadOrder}
                    searchQuery={this.props.searchOrder}
                    searchResults={this.props.order} />
            )
        } else {
            return (
                <SearchInput
                    id="diags"
                    type="text"
                    view="search-input"
                    url="diags"
                    onItemClick={this.props.addDiag}
                    isLoading={this.props.isLoadDiags}
                    searchQuery={this.props.searchDiags}
                    searchResults={this.props.diags} />
            )
        }
    }

    handleClick = (e) => {
        if (e.target.id === `order`) {
            this.props.isActive(true);
        } else {
            this.props.isActive(false);
        }
    }

    returnOrders = () => {
        if (this.props.ordersList) {
            return (
                <div>
                    {this.props.ordersList.map((item, i) => {
                        return (
                            <div key={i} className="flex">
                                <div className="line">
                                    <p className="bas30">{item.code}</p>
                                    <p>{item.description}</p>
                                </div>
                                <div className="delete-sml"></div>
                            </div>
                        )
                    })}
                </div>
            )
        } else {
            return null;
        }
    }

    returnDiags = () => {
        if (this.props.ordersList) {
            return (
                <div>
                    {this.props.diagList.map((item, i) => {
                        return (
                            <div key={i} className="flex">
                                <div className="line">
                                    <p className="bas30">{item.code}</p>
                                    <p>{item.description}</p>
                                </div>
                                <div className="delete-sml"></div>
                            </div>
                        )
                    })}
                </div>
            )
        } else {
            return null;
        }
    }

    render() {
        return (
            <div>
                <div className="flex">
                    <div onClick={this.handleClick} id="order" className={this.props.isAct ? "tagder actiee" : "tagder"}>Order Sets</div>
                    <div onClick={this.handleClick} id="diags" className={this.props.isAct ? "tagder" : "tagder actiee"}>Diagnosis</div>
                </div>
                {this.returnSearch()}

                {this.props.isAct ? <p className="subtitdd">Order Sets</p> : <p className="subtitdd">Diagnosis</p>}

                {
                    this.props.isAct ? this.returnOrders() : this.returnDiags()
                }

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoadDiags: state.searchLoading.diags,
    searchDiags: state.searchQuery.diags,
    diags: state.searchResults.diags,

    isLoadOrder: state.searchLoading.order,
    searchOrder: state.searchQuery.order,
    order: state.searchResults.order,

    isAct: state.tabact,
    ordersList: state.phy.ordersList,
    diagList: state.phy.diagList,
})

const mapDispatchToProps = dispatch => ({
    isActive: (bool) => dispatch(isActive(bool))
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupList)
