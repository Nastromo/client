import React, { Component } from 'react';
import { connect } from 'react-redux';
import GropList from './GropList';
import GroupSettings from './GroupSettings';



export class Groups extends Component {
    

    render() {
        return (
            <div className="flex main-d">
                <GropList />
                {this.props.group.id || this.props.isCreate ? <GroupSettings /> : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    group: state.group,
    isCreate: state.createGroup,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Groups)
