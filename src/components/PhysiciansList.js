import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable from "react-table";
import '../table.css';
import { getPhys, setPhy, setCreateMode } from '../store/actions/Phys';




export class GroupList extends Component {
    componentDidMount() {
        this.props.getPhys();
    }

    initColumns = () => {
        return [
            {
                Header: 'ID',
                accessor: 'id',
            },
            {
                Header: 'NPI',
                accessor: 'npi',
            },
            {
                Header: 'First Name',
                accessor: 'name',
            },
            {
                Header: 'Last Name',
                accessor: 'last',
            }
        ];
    }

    handleRowClick = (state, rowInfo, column, instance) => {
        if (rowInfo) {
            return {
                onClick: (e, handleOriginal) => this.props.setPhy(Number(rowInfo.index)),
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
        this.props.setCreateMode(true);
    }

    renderList = (list, text) => {
        return (
            <div className="content-table small-t basis50 marg-ty">
                <div onClick={this.handleCreate} className="create-btn">Create</div>
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
        return this.renderList(this.props.list, `No any physicians...`);
    }
}

const mapStateToProps = (state) => ({
    list: state.phys,
    selected: state.activePhyRaw,
})

const mapDispatchToProps = dispatch => ({
    getPhys: () => dispatch(getPhys()),
    setPhy: (i) => dispatch(setPhy(i)),
    setCreateMode: (bool) => dispatch(setCreateMode(bool)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupList)
