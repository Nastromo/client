import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewDropDown from './NewDropDown';
import SearchInput from './SearchInput';
import PhyList from './PhyList';





export class LocationData extends Component {
    constructor(props) {
        super(props);
        this.types = [`option1`, `option2`]
    }


    render() {
        return (
            <div className="flex">
                <div className="bas50">
                    <p className="title-input-s">Client Location Name:</p>
                    <input type="text" className="simple-input-s" />
                    <div className="flex ju-btw">
                        <div className="margrr">
                            <p className="title-input-s">Street:</p>
                            <input type="text" className="simple-input-s" />
                        </div>

                    </div>

                    <div className="flex ju-btw">
                        <div className="margrree">
                            <p className="title-input-s">City:</p>
                            <input type="text" className="simple-input-s" />
                        </div>
                        <div className="margrree">
                            <p className="title-input-s">State:</p>
                            <NewDropDown
                                id="time"
                                actionType="SET_UNIT_OPTION"
                                height="30px"
                                status={this.props.isOpenTime}
                                menu={this.types}
                                option={this.props.type} />
                        </div>
                        <div className="margrree">
                            <p className="title-input-s">Zip:</p>
                            <input type="text" className="simple-input-s" />
                        </div>
                    </div>

                    <div className="flex ju-btw">
                        <div className="margrr">
                            <p className="title-input-s">Phone:</p>
                            <input type="text" className="simple-input-s" />
                        </div>
                        <div className="margrr">
                            <p className="title-input-s">Phone Ext:</p>
                            <input type="text" className="simple-input-s" />
                        </div>
                    </div>

                    <div className="flex ju-btw">
                        <div className="margrr">
                            <p className="title-input-s">Fax #</p>
                            <input type="text" className="simple-input-s" />
                        </div>
                        <div className="margrr">
                            <p className="title-input-s">Email:</p>
                            <input type="text" className="simple-input-s" />
                        </div>
                    </div>


                    <p className="title-input-s marg-todd">BILLING INFO:</p>
                    <div className="flex ju-btw">
                        <div className="margrr">
                            <p className="title-input-s">Street:</p>
                            <input type="text" className="simple-input-s" />
                        </div>

                    </div>

                    <div className="flex ju-btw">
                        <div className="margrree">
                            <p className="title-input-s">City:</p>
                            <input type="text" className="simple-input-s" />
                        </div>
                        <div className="margrree">
                            <p className="title-input-s">State:</p>
                            <NewDropDown
                                id="time"
                                actionType="SET_UNIT_OPTION"
                                height="30px"
                                status={this.props.isOpenTime}
                                menu={this.types}
                                option={this.props.type} />
                        </div>
                        <div className="margrree">
                            <p className="title-input-s">Zip:</p>
                            <input type="text" className="simple-input-s" />
                        </div>
                    </div>

                    <div className="flex ju-btw">
                        <div className="margrr">
                            <p className="title-input-s">Phone:</p>
                            <input type="text" className="simple-input-s" />
                        </div>
                        <div className="margrr">
                            <p className="title-input-s">Phone Ext:</p>
                            <input type="text" className="simple-input-s" />
                        </div>
                    </div>

                    <div className="flex ju-btw">
                        <div className="margrr">
                            <p className="title-input-s">Fax #</p>
                            <input type="text" className="simple-input-s" />
                        </div>
                        <div className="margrr">
                            <p className="title-input-s">Email:</p>
                            <input type="text" className="simple-input-s" />
                        </div>
                    </div>


                    <p className="title-input-s">Notes</p>
                    <textarea
                        className="gross-other-s"
                        value={this.props.notes}
                        onChange={this.props.changeNotes}
                    ></textarea>
                    <div className="flex mafdd ju-end">
                        <div className="green-btn">Update</div>
                    </div>
                </div>

                <div className="width100 marfge bas50">
                    <p className="title-input-s">Physicians</p>
                    <SearchInput
                        id="phy"
                        type="text"
                        view="search-input-s"
                        url="phy"
                        onItemClick={this.props.addSpec}
                        isLoading={this.props.isLoadSpec}
                        searchQuery={this.props.searchSpec}
                        searchResults={this.props.specimens} />
                    <PhyList />
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(LocationData)
