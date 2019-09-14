import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable from "react-table";
import '../table.css';




export class GroupList extends Component {

    initColumns = () => {
        return [
            {
                Header: 'Client Location ID',
                accessor: 'locId',
            },
            {
                Header: 'Name',
                accessor: 'clientName',
            },
            {
                Header: 'Address',
                accessor: 'address',
            }
        ];
    }

    handleRowClick = (state, rowInfo, column, instance) => {
        if (rowInfo) {
            return {
                onClick: (e, handleOriginal) => this.props.showInstrum(Number(rowInfo.index)),
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
            <div className="create-btn-long">Create</div>
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
    // list: state.tests,
    list: [],
    selected: state.activeTestRow,
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(GroupList)
