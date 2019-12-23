import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewDropDown from './NewDropDown';
import moment from 'moment';
import { pay, changePrice, changeQty } from '../store/actions/EClients';


export class EOrders extends Component {
    constructor(props) {
        super(props);
        this.testse = [`Weight Management`, `Nutritional Deficiency`, `Telomere`];
    }

    pay = () => {
        if (this.props.qty && this.props.price) {
            const discount = (this.props.qty * this.props.price) >= 2950 ? 0.9 : 1;
            this.props.pay(this.props.qty, this.props.qty * this.props.price * discount);
        }
    }

    returnOrders = () => {
        if (this.props.payments) return (
            <div className="ferof">
                {
                    this.props.payments.map((item, i) => {
                        return (
                            <div key={i} className="lione">
                                <p className="bas25">{item.testTitle}</p>
                                <p className="bas25">{item.qty}</p>
                                <p className="bas25">{item.amount}</p>
                                <p className="bas25">{moment(item.date).format('MM/DD/YYYY')}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    render() {
        return (
            <div>
                <h4>Orders:</h4>
                <div className="ord-tit">
                    <p className="bas25">Test</p>
                    <p className="bas25">Qty</p>
                    <p className="bas25">Payment</p>
                    <p className="bas25">Date</p>
                </div>
                {this.returnOrders()}

                <div className="payment-raw">
                    <div className="bas25">
                        <p className="dfrt">Choose Test</p>
                        <NewDropDown
                            id="tests_e"
                            actionType="SET_TEST_E_OPTION"
                            height="30px"
                            status={this.props.isOpenTestse}
                            menu={this.testse}
                            option={this.props.etest} />
                    </div>
                    <div className="bas25">
                        <p className="dfrt">Qty</p>
                        <input type="number" value={this.props.qty} onChange={this.props.changeQty} className="simple-input-s" />
                    </div>

                    <div className="bas25">
                        <p className="dfrt">Price</p>
                        <input type="number" value={this.props.price} onChange={this.props.changePrice} className="simple-input-s" />
                    </div>

                    <div className="bas25">
                        {this.props.isDiscount ? <p className="dfrt">Discount: 10%</p> : null} 
                    </div>
                    
                    <div className="bas25">
                        <p className="dfrt dfr">1</p>
                        <div onClick={this.pay} className="pay-btn">Pay</div>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    qty: state.qty,
    isDiscount: state.disc,
    price: state.price,
    client: state.eclient,
    payments: state.epayments,
    isOpenTestse: state.newDDStatus.tests_e,
    etest: state.etest,
})

const mapDispatchToProps = dispatch => ({
    changePrice: (e) =>  dispatch(changePrice(e)),
    changeQty: (e) => dispatch(changeQty(e)),
    pay: (qty, amount) => dispatch(pay(qty, amount)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EOrders)
