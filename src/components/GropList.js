import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable from "react-table";
import '../table.css';
import { getGroups, showGroup, createMode } from '../store/actions/Groups';




export class GroupList extends Component {
    componentDidMount() {
        this.props.getGroups();
    }

    initColumns = () => {
        return [
            {
                Header: 'Sales Group ID',
                accessor: 'id',
            },
            {
                Header: 'Group Name',
                accessor: 'groupName',
            }
        ];
    }

    handleRowClick = (state, rowInfo, column, instance) => {
        if (rowInfo) {
            return {
                onClick: (e, handleOriginal) => this.props.showGroup(Number(rowInfo.index)),
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
            <div className="content-table small-t basis50">
                <div onClick={this.handleCreate} className="create-btn">Create</div>
                <ReactTable
                    data={list}
                    getTdProps={this.handleRowClick}
                    columns={this.initColumns()}
                    resizable={false}
                    filterable={true}
                    defaultPageSize={10}
                    noDataText={text}
                />
            </div>
        )
    }

    render() {
        if (this.props.isLoading) return this.renderList([], `Loading list...`);
        if (this.props.isErrored) return this.renderList([], `Error occurred...`);
        return this.renderList(this.props.list, `No any groups...`);
    }
}

const mapStateToProps = (state) => ({
    list: state.groups,
    selected: state.activeGroup,
})

const mapDispatchToProps = dispatch => ({
    getGroups: () => dispatch(getGroups()),
    showGroup: (i) => dispatch(showGroup(i)),
    createMode: (bool) => dispatch(createMode(bool)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupList)
