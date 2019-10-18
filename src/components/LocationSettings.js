import React, { Component } from 'react';
import { connect } from 'react-redux';
import LocationsList from './LocationsList';
import LocationData from './LocationData';
import CheckBox from './Checkbox';
import NewDropDown from './NewDropDown';
import { changeLogin, changePass, handleLogUpdate, showPdfPreview, bindPdf, handleUpdate } from '../store/actions/Clients';




export class LocationSettings extends Component {
    constructor(props) {
        super(props);
        this.stats = [`Partial`, `Complite`];
    }

    handleUpload = (e) => {
        const files = e.target.files;
        let pdfs = [];
        for (let i = 0; i < files.length; i++) {
            pdfs.push({
                url: URL.createObjectURL(files[i]),
                title: files[i].name
            });
        }
        this.props.showPdfPreview(pdfs);
        this.props.bindPdf(files);
    }

    returnLogins = () => {
        if (this.props.logins) {
            return this.props.logins.map((item, i) => {
                return (
                    <div key={i} className="flex margoi">
                        <input id={i} type="text" className="simple-input-s ma-rg" value={item.login} onChange={this.props.changeLogin} />
                        <input id={i} type="text" className="simple-input-s ma-rg" value={item.pass} onChange={this.props.changePass} />
                        <div id={i} onClick={this.props.handleLogUpdate} className="green-btn">Update</div>
                    </div>
                )
            });
        }
    }

    render() {
        if (this.props.client) {
            const pdfStr = this.props.client.pdf || "[]"; 
            const pdf = JSON.parse(pdfStr);
            return (
                <div>
                    <p className="title-input-s">Existing logins:</p>
                    <div className="heiht130">
                        {this.returnLogins()}
                    </div>


                    <LocationsList />
                    <LocationData />
                    <div className="mar-rad">
                        <p className="title-input-s">Sales Group ID</p>
                        <input type="text" className="simple-input-s" />

                        <div className="flex">
                            <div className="btn-whi">View Schedule</div>
                        </div>

                    </div>

                    <div className="bhgrt">
                        <p className="title-input-s">Reporting Options</p>
                        <div className="flex adfefd">
                            <div className="fedvcf">
                                <NewDropDown
                                    id="statu"
                                    actionType="SET_STAT_OPTION"
                                    height="30px"
                                    status={this.props.isOpenStat}
                                    menu={this.stats}
                                    option={this.props.client.repOpt} />
                            </div>
                            <div className="mafgrte"><CheckBox status={this.props.client.inPrint} title="Inhouse Print" id="inhouse" /></div>
                            <div className="mafgrte"><CheckBox status={this.props.client.autFax} title="Auto Fax" id="fix" /></div>
                            <div className="mafgrte"><CheckBox status={this.props.client.remPrint} title="Remote Print" id="remote" /></div>
                            <div className="mafgrte"><CheckBox status={this.props.client.emr} title="EMR" id="emre" /></div>
                        </div>
                    </div>

                    <div className="bhgrt">
                        <p className="title-input-s">Color Report</p>
                        <div className="flex adfefd">
                            <div className="mafgrte"><CheckBox status={this.props.client.histology} title="Histology" id="his" /></div>
                            <div className="mafgrte"><CheckBox status={this.props.client.ngyn} title="NGYN Cytology" id="ngyn" /></div>
                            <div className="mafgrte"><CheckBox status={this.props.client.fish} title="Fish Cytology" id="fish" /></div>
                            <div className="mafgrte"><CheckBox status={this.props.client.gyn} title="GYN Cytology" id="gyn" /></div>
                            <div className="mafgrte"><CheckBox status={this.props.client.inHouse} title="In-House" id="inh" /></div>
                            <div className="mafgrte"><CheckBox status={this.props.client.acls} title="ACLS" id="acls" /></div>
                            <div className="mafgrte"><CheckBox status={this.props.client.heartSmart} title="Heart Smart" id="heart" /></div>
                            <div className="mafgrte"><CheckBox status={this.props.client.dtex} title="D Tex" id="dtex" /></div>
                            <div className="mafgrte"><CheckBox status={this.props.client.igs} title="IGS" id="igse" /></div>
                        </div>
                    </div>

                    <div className="file-upload">
                        
                        <p className="title-img">Upload PDF</p>
                        <div>
                            {
                                pdf.map((item, i) => {
                                    return (
                                        <div key={i} className="flex dargh al-cntd">
                                            <a rel="noopener noreferrer" target="_blank" href={`/uploads/${item.url}`} className="dfert">
                                                {item.title}
                                            </a>
                                            <div className="delete-sml"></div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <input type="file" onChange={this.handleUpload} multiple />
                    </div>

                    <div className="flex mafdd ju-end">
                        <div onClick={this.props.handleUpdate} className="green-btn">Update</div>
                    </div>
                </div>
            )
        } else {
            return <div></div>
        }
    }
}

const mapStateToProps = (state) => ({
    client: state.client,
    logins: state.client.logins,
    isOpenStat: state.newDDStatus.statu,
})

const mapDispatchToProps = dispatch => ({
    changeLogin: (e) => dispatch(changeLogin(e)),
    changePass: (e) => dispatch(changePass(e)),
    handleLogUpdate: (e) => dispatch(handleLogUpdate(e)),
    showPdfPreview: (pdfs) => dispatch(showPdfPreview(pdfs)),
    bindPdf: (files) => dispatch(bindPdf(files)),
    handleUpdate: () => dispatch(handleUpdate()),
})




export default connect(mapStateToProps, mapDispatchToProps)(LocationSettings)
