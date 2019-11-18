import React, { Component } from 'react';
import { connect } from 'react-redux';
// import RepsListMini from './RepsListMini';
import { changeComment, addRep, deleteRep, updateGroup, createGroup } from '../store/actions/Groups';
import SearchInput from './SearchInput';




export class GroupSettings extends Component {
    constructor(props) {
        super(props);
        this.time = [`8:30am`, `9:30am`];
    }

    render() {
        const list = JSON.parse(this.props.group.reps ? this.props.group.reps : "[]");
        return (
            <div className="driv-set">
                <p className="title-input">Sales Representatives:</p>
                <SearchInput
                    id="rep"
                    type="text"
                    view="search-input-s"
                    url="g-reps"
                    onItemClick={this.props.addRep}
                    isLoading={this.props.isLoadRep}
                    searchQuery={this.props.searchRep}
                    searchResults={this.props.reps} />

                <div className="repss">
                    {
                        list.map((item, i) => {
                            return (
                                <div className="flex al-cnt" key={i}>
                                    <div className="lione">{item}</div>
                                    <div id={i} onClick={this.props.deleteRep} className="delete-sml margjj"></div>
                                </div>
                            )
                        })
                    }
                </div>


                <p className="title-input">Comment:</p>
                <textarea
                    className="gross-other"
                    value={this.props.group.comment ? this.props.group.comment : ""}
                    onChange={this.props.changeComment}
                ></textarea>

                <div className="flex ju-end mar-top-20">
                    {
                        this.props.isCreate ? <div onClick={this.props.createGroup} className="create-btn">Create</div> : <div onClick={this.props.updateGroup} className="green-btn">Update</div>
                    }
                </div>

            </div>
        )
    }
}



const mapStateToProps = (state) => ({
    group: state.group,
    isLoadRep: state.searchLoading.rep,
    searchRep: state.searchQuery.rep,
    reps: state.searchResults.rep,
    isCreate: state.createGroup
})

const mapDispatchToProps = dispatch => ({
    addRep: (text) => dispatch(addRep(text)),
    changeComment: (e) => dispatch(changeComment(e)),
    deleteRep: (e) => dispatch(deleteRep(e)),
    updateGroup: () => dispatch(updateGroup()),
    createGroup: () => dispatch(createGroup()),
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupSettings)
