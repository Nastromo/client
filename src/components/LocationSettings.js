import React, { Component } from 'react'
import { connect } from 'react-redux'
import LocationsList from './LocationsList';
import LocationData from './LocationData';
import CheckBox from './Checkbox';
import NewDropDown from './NewDropDown';



export class LocationSettings extends Component {
    constructor(props) {
        super(props);
        this.stats = [`Partial`, `Complite`];
    }

    handleUpload = (e) => {
        const files = e.target.files;
        let photos = [];
        for (let i = 0; i < files.length; i++) {
            photos.push({
                url: URL.createObjectURL(files[i]),
                title: files[i].name
            });
        }
    }

    render() {
        if (this.props.client) {
            return (
                <div>
                    <p className="title-input-s">Existing logins:</p>
                    <div className="heiht130">
                        <div className="flex margoi">
                            <input type="text" className="simple-input-s ma-rg" placeholder="login" />
                            <input type="text" className="simple-input-s ma-rg" placeholder="password" />
                            <div className="green-btn">Update</div>
                        </div>

                    </div>


                    <LocationsList />
                    <LocationData location={{}} />
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
                                    option={this.props.stat} />
                            </div>
                            <div className="mafgrte"><CheckBox status={false} title="Inhouse Print" id="inhouse" /></div>
                            <div className="mafgrte"><CheckBox status={false} title="Auto Fax" id="fix" /></div>
                            <div className="mafgrte"><CheckBox status={false} title="Remote Print" id="remote" /></div>
                            <div className="mafgrte"><CheckBox status={false} title="EMR" id="emr" /></div>
                        </div>
                    </div>

                    <div className="bhgrt">
                        <p className="title-input-s">Color Report</p>
                        <div className="flex adfefd">
                            <div className="mafgrte"><CheckBox status={true} title="Histology" id="his" /></div>
                            <div className="mafgrte"><CheckBox status={true} title="NGYN Cytology" id="ngyn" /></div>
                            <div className="mafgrte"><CheckBox status={true} title="Fish Cytology" id="fish" /></div>
                            <div className="mafgrte"><CheckBox status={true} title="GYN Cytology" id="gyn" /></div>
                            <div className="mafgrte"><CheckBox status={true} title="In-House" id="inh" /></div>
                            <div className="mafgrte"><CheckBox status={true} title="ACLS" id="acls" /></div>
                            <div className="mafgrte"><CheckBox status={true} title="Heart Smart" id="heart" /></div>
                            <div className="mafgrte"><CheckBox status={true} title="D Tex" id="dtex" /></div>
                            <div className="mafgrte"><CheckBox status={true} title="IGS" id="igs" /></div>
                        </div>
                    </div>

                    <div className="file-upload">
                        <p className="title-img">Upload PDF</p>
                        <input type="file" onChange={this.handleUpload} multiple />
                    </div>
                </div>
            )
        } else {
            return <div></div>
        }
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}




export default connect(mapStateToProps, mapDispatchToProps)(LocationSettings)
