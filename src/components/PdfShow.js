import React, { Component } from 'react'
import { connect } from 'react-redux'


export class PdfShow extends Component {
    render() {
        let params = (new URL(window.location.href)).searchParams;
        let title = params.get('title');
        let port = 8050;
        if (window.location.href.includes(`localhost`)) {
            port = 9000;
        }
        return (
            <div>
                <embed src={`http://localhost:${port}/${title}`} width="100%" height="1000px" />


            </div>

        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PdfShow)
