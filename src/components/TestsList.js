import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchInput from './SearchInput';
import { isActive, addOrder, delOrder, addDiag, delDiag } from '../store/actions/Tabs';




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
            const list = JSON.parse(this.props.ordersList);
            return (
                <div>
                    {list.map((item, i) => {
                        return (
                            <div key={i} className="flex marfgjj">
                                <div className="line">
                                    <p className="bas30">{item}</p>
                                </div>
                                <div onClick={this.props.delOrder} id={i} className="delete-sml"></div>
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
        if (this.props.diagList) {
            const list = JSON.parse(this.props.diagList);
            return (
                <div>
                    {list.map((item, i) => {
                        return (
                            <div key={i} className="flex marfgjj">
                                <div className="line">
                                    <p className="bas95">{item}</p>
                                </div>
                                <div onClick={this.props.delDiag} id={i} className="delete-sml"></div>
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
    isActive: (bool) => dispatch(isActive(bool)),
    addOrder: (text) => dispatch(addOrder(text)),
    addDiag: (text) => dispatch(addDiag(text)),
    delOrder: (event) => dispatch(delOrder(event)),
    delDiag: (event) => dispatch(delDiag(event)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupList)
