import React from 'react';
import invoicelogo from './Images/invoicelogo.png';
class Header extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div className="navbar-header" >
                                {/* <a className="navbar-brand active" style={{color : "white"}} href="" >Albums Cart</a> */}
                                {/* <img src={invoicelogo.png}/>  */}
                                {/* <button style={{background :"#ff6633"}} > Sign Up</button> */}
                                <div className="container" align="center">
                                    <br />
                                    <span style={{ color: "#f6f6f6" }}>FREE,UNLIMITED ONLINE INVOICES</span>&nbsp;&nbsp;&nbsp;
                                    <button style={{ background: "#232733", color: "white" }} > Learn more</button>&nbsp;&nbsp;
                                    <button style={{ background: "#ff6633" }} > Sign Up</button>

                                    <br />
                                </div>

                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}


class InvoiceGenerator extends React.Component {
    render() {
        return (
            <div>

                <Header />
                <br />

                <div style={{ background: "#f6f6f6", width: "650px", height: "650px", marginLeft: "300px" }}>
                    {/* <div >
                     <input type="text" value="YOUR COMPANY NAME" />
                    </div>
                     */}
                    <br />
                    <input type="text" placeholder="Your Company Name" size="5px" style={{ border: "0px" }} />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" placeholder="YOUR INVOICES" style={{ border: "0px" }} />

                    <br /><br />
                    <table>
                        <tr>
                            <th><input type="text" placeholder="123 Your Street" style={{ border: "0px" }} /></th>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <th><input type="text" placeholder="27-December-2018" style={{ border: "0px" }} /></th>
                        </tr>
                        <tr>
                            <th><input type="text" placeholder="Your Town" style={{ border: "0px" }} /></th>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <th><input type="text" placeholder="Invoice #2334889" style={{ border: "0px" }} /></th>
                        </tr>
                        <tr>
                            <th><input type="text" placeholder="YOUR Address Line 3" style={{ border: "0px" }} /></th>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <th><input type="text" placeholder="PO 456001200" style={{ border: "0px" }} /></th>
                        </tr>

                    </table>
                    <br /><br />
                    <textarea cols="60" rows="5" style={{ border: "0px", overflow: "hidden" }}>
                        Dear Ms. Jane Doe,

                        Please find below a cost-breakdown for the recent work completed. Please make payment at your earliest convenience, and do not hesitate to contact me with any questions.

                        Many thanks,
                        Your Name
                    </textarea>
                    <br /><br /><br />
                    <div style={{ width: "550px", marginLeft: "25px" }}>
                        <table width="100%" cellSpacing="3" cellPadding="3" border="1">
                            <tr>
                                <th>#</th>
                                <th>Item description</th>
                                <th>Quantity</th>
                                <th>Unit price</th>
                                <th>Total</th>
                            </tr>
                            <tbody>
                                <td><input type="text" placeholder="0.00" style={{ border: "0px" }} /></td>
                                <td><input type="text" placeholder="0.00" style={{ border: "0px" }} /></td>
                                <td><input type="text" placeholder="0.00" style={{ border: "0px" }} /></td>
                                <td><input type="text" placeholder="0.00" style={{ border: "0px" }} /></td>
                                <td><input type="text" placeholder="0.00" style={{ border: "0px" }} /></td>
                            </tbody>

                        </table>
                        
                        <table width="100%" cellSpacing="3" cellPadding="3" border="1">
                            <tbody>
                            <td>Subtotal</td>
                            <td><input type="text" placeholder="0.00" style={{ border: "0px" }} /></td>
                            </tbody>
                            <tr>
                            <td>Sales Tax(20%)</td>
                            <td><input type="text" placeholder="0.00" style={{ border: "0px" }} /></td>
                            </tr>
                            <tr>
                            <td>total</td>
                            <td><input type="text" placeholder="0.00" style={{ border: "0px" }} /></td>
                            </tr>
                        </table>

                    </div>
                    <br/><br/><br/>
                    <div>
                    <textarea cols="60" rows="5" style={{ border: "0px",overflow: "hidden" }}>
                    Many thanks for your custom! I look forward to doing business with you again in due course.
 
                     Payment terms: to be received within 60 days.
                    </textarea>


                    </div>


                </div>
            </div>
        );
    }
}

export default InvoiceGenerator;