import React, { Component } from 'react'
import { connect } from 'react-redux'
import TestsList from './TestsList';
import NewDropDown from './NewDropDown';
import { delCred, changeNpi, changeName, changeLast, changeMid, changeId, handleCreate, handleUpdate } from '../store/actions/Phys';




export class PhysiciansSettings extends Component {
    constructor(props) {
        super(props);
        this.pecos = [`YES`, `NO`];
        this.creds = [
            `AAP`,
            `ABAI`,
            `ABFP`,
            `ABO`,
            `ABPN`,
            `AK`,
            `AOBFP`,
            `AOBSPOMM`,
            `AP`,
            `ASG`,
            `BHMS`,
            `BSN`,
            `CA`,
            `CAAPM`,
            `CAC`,
            `CCH`,
            `CCSP`,
            `CRNP`,
            `CRRN`,
            `CSPOMM`,
            `CVA`,
            `DAAPM`,
            `DABFP`,
            `DABIM`,
            `DAc (RI)`,
            `DAc (WV)`,
            `DACBN`,
            `DACVD`,
            `DC`,
            `DDS`,
            `DHANP`,
            `DMD`,
            `DNBHE`,
            `DO`,
            `DOM`,
            `DPM`,
            `DVM`,
            `FAAEM`,
            `FAAFP`,
            `FAAP`,
            `FACFO`,
            `FACOG`,
            `FAGD`,
            `FIACA`,
            `FIAOMT`,
            `FICCMO`,
            `FNP`,
            `HASG`,
            `HLL`,
            `HMD`,
            `HSG`,
            `LL`,
            `LN`,
            `LNC`,
            `MD`,
            `MD(H)`,
            `MFCC`,
            `MNNP`,
            `MPH`,
            `MSN`,
            `MSW`,
            `NCCA`,
            `ND`,
            `NMD`,
            `NP`,
            `OD`,
            `OMD`,
            `PA`,
            `PA-C`,
            `PhD`,
            `PsyD`,
            `PT`,
            `RN`,
            `RN-C`,
            `RNCS`,
            `RN/NP`,
            `RPh`,
            `RS`,
            `SG`,
            `VMD`]
    }

    render() {
        return (
            <div className="driv-set">
                <div className="flex ju-btw">
                    <div className="bas39">
                        <div className="margju">
                            
                            {this.props.isCreateMode ? 
                            <div onClick={this.props.handleCreate} className="create">Create</div> :
                            <div onClick={this.props.handleUpdate} className="green-btn wi130g">Update</div>}

                            <p className="title-input-s">Physician Id:</p>
                            <input type="text" className="simple-input-s ma-rg" value={this.props.phy.id ? this.props.phy.id : ""} onChange={this.props.changeId} />
                        </div>

                        <div className="margju">
                            <p className="title-input-s">NPI:</p>
                            <input type="text" className="simple-input-s ma-rg" value={this.props.phy.npi ? this.props.phy.npi : ""} onChange={this.props.changeNpi} />
                        </div>

                        <div className="margju">
                            <p className="title-input-s">First Name:</p>
                            <input type="text" className="simple-input-s ma-rg" value={this.props.phy.name ? this.props.phy.name : ""} onChange={this.props.changeName} />
                        </div>

                        <div className="margju">
                            <p className="title-input-s">Last Name:</p>
                            <input type="text" className="simple-input-s ma-rg" value={this.props.phy.last ? this.props.phy.last : ""} onChange={this.props.changeLast} />
                        </div>

                        <div className="margju">
                            <p className="title-input-s">Middle Name (optinal):</p>
                            <input type="text" className="simple-input-s ma-rg" value={this.props.phy.midName ? this.props.phy.midName : ""} onChange={this.props.changeMid} />
                        </div>

                        <div className="margju">
                            <p className="title-input-s">PECOS:</p>
                            <NewDropDown
                                id="pecos"
                                actionType="SET_PECOS_OPTION"
                                height="30px"
                                status={this.props.isOpenPecos}
                                menu={this.pecos}
                                option={this.props.phy.pecos} />

                        </div>

                        <div className="margju">
                            <p className="title-input-s">Credentials:</p>
                            <NewDropDown
                                id="creds"
                                actionType="SET_CREDS_OPTION"
                                height="30px"
                                status={this.props.isOpenCreds}
                                menu={this.creds}
                                option="" />
                        </div>

                        {
                            this.returnCreds()
                        }

                        <p className="title-input-s">CLIENT LOCATIONS:</p>
                        <div className="flex gress">
                            <p className="bas39">Location ID</p>
                            <p className="bas59">Location Name</p>
                        </div>
                    </div>
                    <div className="bas59">
                        <TestsList />
                    </div>
                </div>
            </div>
        )
    }

    returnCreds = () => {
        if (this.props.creds) {
            const list = JSON.parse(this.props.creds);
            return (
                <div className="flex marfghjj">
                    {
                        list.map((item, i) => {
                            return (
                                <div key={i} id={i} onClick={this.props.delCred} className="cred">
                                    {item}
                                </div>
                            )
                        })
                    }
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    phy: state.phy,
    isOpenCreds: state.newDDStatus.creds,
    isOpenPecos: state.newDDStatus.pecos,
    creds: state.phy.creds,
    isCreateMode: state.isCreateModePhy
})

const mapDispatchToProps = dispatch => ({
    delCred: (e) => dispatch(delCred(e)),
    changeNpi: (e) => dispatch(changeNpi(e)),
    changeName: (e) => dispatch(changeName(e)),
    changeLast: (e) => dispatch(changeLast(e)),
    changeMid: (e) => dispatch(changeMid(e)),
    changeId: (e) => dispatch(changeId(e)),
    handleCreate: (e) => dispatch(handleCreate(e)),
    handleUpdate: (e) => dispatch(handleUpdate(e)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PhysiciansSettings)
