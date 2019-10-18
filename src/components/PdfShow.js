import React, { Component } from 'react'
import { connect } from 'react-redux'


export class PdfShow extends Component {
    render() {
        const url = window.location.href;
        console.log(url);
        return (
            <div>
                <embed src="http://www.africau.edu/images/default/sample.pdf" width="100%" height="1000px" />
                
                
            </div>

        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PdfShow)
