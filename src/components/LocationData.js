import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewDropDown from './NewDropDown';
import SearchInput from './SearchInput';
import PhyList from './PhyList';
import { changeStreet, changeCity, changeZip, changePhone, changePhoneExt, changeEmail, changeStreetB, changeCityB, changeZipB, changePhoneB, changePhoneExtB, changeFaxB, changeEmailB, changeNotes } from '../store/actions/Clients';





export class LocationData extends Component {
    constructor(props) {
        super(props);
        this.types = [`option1`, `option2`]
    }


    render() {
        let loc = this.props.loc
        return (
            <div className="flex">
                <div className="bas50">
                    <p className="title-input-s">Client Location Name:</p>
                    <input type="text" className="simple-input-s" />
                    <div className="flex ju-btw">
                        <div className="margrr">
                            <p className="title-input-s">Street:</p>
                            <input className="simple-input-s" value={loc.street ? loc.street : "" } onChange={this.props.changeStreet} />
                        </div>

                    </div>

                    <div className="flex ju-btw">
                        <div className="margrree">
                            <p className="title-input-s">City:</p>
                            <input className="simple-input-s" value={loc.city ? loc.city : "" } onChange={this.props.changeCity} />
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
                            <input className="simple-input-s" value={loc.zip ? loc.zip : "" } onChange={this.props.changeZip} />
                        </div>
                    </div>

                    <div className="flex ju-btw">
                        <div className="margrr">
                            <p className="title-input-s">Phone:</p>
                            <input className="simple-input-s" value={loc.phone ? loc.phone : "" } onChange={this.props.changePhone} />
                        </div>
                        <div className="margrr">
                            <p className="title-input-s">Phone Ext:</p>
                            <input className="simple-input-s" value={loc.phoneExt ? loc.phoneExt : "" } onChange={this.props.changePhoneExt} />
                        </div>
                    </div>

                    <div className="flex ju-btw">
                        <div className="margrr">
                            <p className="title-input-s">Fax #</p>
                            <input className="simple-input-s" value={loc.fax ? loc.fax : "" } onChange={this.props.changeFax} />
                        </div>
                        <div className="margrr">
                            <p className="title-input-s">Email:</p>
                            <input className="simple-input-s" value={loc.email ? loc.email : "" } onChange={this.props.changeEmail} />
                        </div>
                    </div>


                    <p className="title-input-s marg-todd">BILLING INFO:</p>
                    <div className="flex ju-btw">
                        <div className="margrr">
                            <p className="title-input-s">Street:</p>
                            <input className="simple-input-s" value={loc.streetB ? loc.streetB : "" } onChange={this.props.changeStreetB} />
                        </div>

                    </div>

                    <div className="flex ju-btw">
                        <div className="margrree">
                            <p className="title-input-s">City:</p>
                            <input className="simple-input-s" value={loc.cityB ? loc.cityB : "" } onChange={this.props.changeCityB} />
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
                            <input className="simple-input-s" value={loc.zipB ? loc.zipB : "" } onChange={this.props.changeZipB} />
                        </div>
                    </div>

                    <div className="flex ju-btw">
                        <div className="margrr">
                            <p className="title-input-s">Phone:</p>
                            <input className="simple-input-s" value={loc.phoneB ? loc.phoneB : "" } onChange={this.props.changePhoneB} />
                        </div>
                        <div className="margrr">
                            <p className="title-input-s">Phone Ext:</p>
                            <input className="simple-input-s" value={loc.phoneExtB ? loc.phoneExtB : "" } onChange={this.props.changePhoneExtB} />
                        </div>
                    </div>

                    <div className="flex ju-btw">
                        <div className="margrr">
                            <p className="title-input-s">Fax #</p>
                            <input className="simple-input-s" value={loc.faxB ? loc.faxB : "" } onChange={this.props.changeFaxB} />
                        </div>
                        <div className="margrr">
                            <p className="title-input-s">Email:</p>
                            <input className="simple-input-s" value={loc.emailB ? loc.emailB : "" } onChange={this.props.changeEmailB} />
                        </div>
                    </div>


                    <p className="title-input-s">Notes</p>
                    <textarea
                        className="gross-other-s"
                        value={this.props.loc.notes}
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
    loc: state.loc,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(LocationData)
