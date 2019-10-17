import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable from "react-table";
import '../table.css';
import { getClients, showClient } from '../store/actions/Clients';



export class GroupList extends Component {
    componentDidMount() {
        this.props.getClients();
    }

    initColumns = () => {
        return [
            {
                Header: 'Client ID',
                accessor: 'id',
            },
            {
                Header: 'Client Name',
                accessor: 'title',
            }
        ];
    }

    handleRowClick = (state, rowInfo, column, instance) => {
        if (rowInfo) {
            return {
                onClick: (e, handleOriginal) => this.props.showClient(Number(rowInfo.index)),
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
            <div className="content-table small-t basis37">
                <div className="create-btn">Create</div>
                <ReactTable
                    data={list}
                    getTdProps={this.handleRowClick}
                    columns={this.initColumns()}
                    resizable={false}
                    filterable={true}
                    defaultPageSize={15}
                    noDataText={text}
                />
            </div>
        )
    }

    render() {
        if (this.props.isLoading) return this.renderList([], `Loading list...`);
        if (this.props.isErrored) return this.renderList([], `Error occurred...`);
        return this.renderList(this.props.list, `No any clients...`);
    }
}

const mapStateToProps = (state) => ({
    list: state.clients,
    selected: state.activeTestRow,
})

const mapDispatchToProps = dispatch => ({
    getClients: () => dispatch(getClients()),
    showClient: (i) => dispatch(showClient(i)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupList)
