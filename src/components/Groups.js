import React, { Component } from 'react';
import { connect } from 'react-redux';
import GropList from './GropList';
import GroupSettings from './GroupSettings';



export class Groups extends Component {
    

    render() {
        return (
            <div className="flex main-d">
                <GropList />
                <GroupSettings />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Groups)
