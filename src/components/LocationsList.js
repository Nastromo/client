import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable from "react-table";
import '../table.css';
import { showLoc } from '../store/actions/Clients';




export class GroupList extends Component {

    initColumns = () => {
        return [
            {
                Header: 'Client Location ID',
                accessor: 'id',
            },
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'Street',
                accessor: 'street',
            }
        ];
    }

    handleRowClick = (state, rowInfo, column, instance) => {
        if (rowInfo) {
            return {
                onClick: (e, handleOriginal) => this.props.showLoc(Number(rowInfo.index)),
                style: {
                    fontWeight: rowInfo.index === this.props.selected ? '700' : '600',
                    color: rowInfo.index === this.props.selected ? '#1ab394' : '#4e4e4e',
                    background: rowInfo.index === this.props.selected ? '#e2fff9' : '',
                }
            }
        } else {
            return {}
        }
    }

    handleCreate = () => {
        this.props.createMode(true);
    }

    renderList = (list, text) => {
        return (
            <div className="content-table small-t basis50 marg-ty">
                <p className="title-input-s martt-t">Locations:</p>
                <div className="flex ghty">
                    <div className="create-btn">Create</div>
                </div>
                <ReactTable
                    data={list}
                    getTdProps={this.handleRowClick}
                    columns={this.initColumns()}
                    resizable={false}
                    filterable={true}
                    defaultPageSize={6}
                    noDataText={text}
                />
            </div>
        )
    }

    render() {
        if (this.props.isLoading) return this.renderList([], `Loading list...`);
        if (this.props.isErrored) return this.renderList([], `Error occurred...`);
        return this.renderList(this.props.list, `No any locations...`);
    }
}

const mapStateToProps = (state) => ({
    list: state.client.locs,
    selected: state.activeLocRow,
})

const mapDispatchToProps = dispatch => ({
    showLoc: (i) => dispatch(showLoc(i))
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupList)
