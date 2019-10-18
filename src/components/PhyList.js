import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchInput from './SearchInput';
import { addPhy, delPhy } from '../store/actions/Clients';


export class PhyList extends Component {
    render() {
        return (
            <div>
                <p className="title-input-s">Physicians</p>
                <SearchInput
                    id="phy"
                    type="text"
                    view="search-input-s"
                    url="phy"
                    onItemClick={this.props.addPhy}
                    isLoading={this.props.isLoadPhy}
                    searchQuery={this.props.searchPhy}
                    searchResults={this.props.phys} />
                
                <div className="flex tituj">
                    <p className="bas30">ID</p>
                    <p className="bas30">Name</p>
                    <p className="bas30">NPI</p>
                </div>
                {
                    this.props.list.map((item, i) => {
                        return (
                            <div key={i} className="flex al-cntd">
                                <div className="line marguio">
                                    <p className="bas30">{item.id}</p>
                                    <p className="bas30">{item.name}</p>
                                    <p className="bas30">{item.npi}</p>
                                </div>
                                <div id={item.id} onClick={this.props.delPhy} className="delete-sml"></div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.physs,
    isLoadPhy: state.searchLoading.phy,
    searchPhy: state.searchQuery.phy,
    phys: state.searchResults.phy,
})

const mapDispatchToProps = dispatch => ({
    addPhy: (text) => dispatch(addPhy(text)),
    delPhy: (e) => dispatch(delPhy(e)),
    
})

export default connect(mapStateToProps, mapDispatchToProps)(PhyList)
