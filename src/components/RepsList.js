import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable from "react-table";
import '../table.css';
import { getReps, showRep, setMode } from '../store/actions/Reps';





export class DriverList extends Component {
    componentDidMount() {
        this.props.getReps();
    }

    initColumns = () => {
        return [
            {
                Header: 'Rep ID',
                accessor: 'id',
            },
            {
                Header: 'First Name',
                accessor: 'firstName',
            },
            {
                Header: 'Last Name',
                accessor: 'lastName',
            }
        ];
    }

    handleRowClick = (state, rowInfo, column, instance) => {
        if (rowInfo) {
            return {
                onClick: (e, handleOriginal) => this.props.showRep(Number(rowInfo.index)),
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

    renderList = (list, text) => {
        return (
            <div className="content-table small-t basis50">
                <div className="create-btn" onClick={this.setCreateMode}>Create</div>
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
        return this.renderList(this.props.list, `No any reps...`);
    }

    setCreateMode = () => {
        this.props.setMode(true);
    }
}

const mapStateToProps = (state) => ({
    list: state.reps,
    selected: state.actRow.rep,
})

const mapDispatchToProps = dispatch => ({
    getReps: () => dispatch(getReps()),
    showRep: (i) => dispatch(showRep(i)),
    setMode: (bool) => dispatch(setMode(bool)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DriverList)
