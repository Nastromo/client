import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable from "react-table";
import '../table.css';
import { getClients, showClient, createClientMode } from '../store/actions/EClients';



export class EClientList extends Component {
    componentDidMount() {
        this.props.getClients();
    }

    initColumns = () => {
        return [
            {
                Header: 'Id',
                accessor: 'id',
            },
            {
                Header: 'Nhone',
                accessor: 'name',
            },
            {
                Header: 'Client Login',
                accessor: 'email',
            },
            {
                Header: 'Client Phone',
                accessor: 'phone',
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
        this.props.createClientMode(true);
    }

    renderList = (list, text) => {
        return (
            <div className="content-table small-t basis37">
                <div onClick={this.handleCreate} className="create-btn marghjo">Create</div>
                
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
    list: state.eclients,
    selected: state.activeERow,
})

const mapDispatchToProps = dispatch => ({
    getClients: () => dispatch(getClients()),
    showClient: (i) => dispatch(showClient(i)),
    createClientMode: (bool) => dispatch(createClientMode(bool))
})

export default connect(mapStateToProps, mapDispatchToProps)(EClientList)
