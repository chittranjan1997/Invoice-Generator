import React from 'react';
import invoicelogo from './invoicelogo.png';
class Header extends React.Component {
    render() {
        return (
            <div>
                <div>
                    {/* <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div className="navbar-header" > */}
                    <div style={{ background: "#232733", height: "44px" }}>
                        <img src={invoicelogo} style={{ width: "160", height: "40px" }} />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span style={{ color: "#f6f6f6" ,fontSize:"9px"}}>FREE,UNLIMITED ONLINE INVOICES</span>&nbsp;&nbsp;&nbsp;
                                    <button style={{ background: "#232733", color: "white",fontSize:"9px" }} > LEARN MORE</button>&nbsp;&nbsp;
                                   
                                    <button style={{ background: "#ff6633",border:"10px",color: "white",fontSize:"9px",height:"25px" }} > SIGN UP FREE</button>

                                 <br />
                    </div>
                    {/* </div>
                        </div> */}
                    {/* </nav> */}
                </div>
            </div>
        );
    }
}


class InvoiceGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [
                {
                    name: "",
                    quantity: 0,
                    unitprice: 0,
                    total: 0
                }

            ],
            count: 0,
            tax: 0,
            maintotal: 0,
            yourcompany :"Your Company Nmae",
            invoicenae:"INVOICE",
            ratetax:20,
            txtarea:0

        };
    }
    handleChange = idx => e => {
        const { name, value } = e.target;
        const { rows } = this.state;
        let row = rows[idx];
        row[name] = value;
        rows[idx] = row;
        var check = 0;
        if (name == "unitprice" || name == "quantity") {
            if(this.state.rows[idx].quantity.length >= 0 && this.state.rows[idx].unitprice.length >= 0 )
            {
                this.state.rows[idx].total = this.state.rows[idx].quantity * this.state.rows[idx].unitprice;
                 console.log("totalclounm", this.state.rows[idx].total)
                 console.log("precccount", this.state.count)
                 check = 1;
            }
        }
        this.setState({
            rows
        });
        
        // this.state.tax = 0 ;
        // this.state.maintotal = 0 ;
        if(check == 1)
        {
            this.state.count = 0;
            for (let i = 0; i < this.state.rows.length; i++) {
                console.log("value i",i)
                console.log("count", this.state.count)
                console.log("rows", this.state.rows[i].total)
                this.state.count = (this.state.count + this.state.rows[i].total);
 
                this.state.tax = (this.state.count * this.state.ratetax)/100;
               
                this.state.maintotal = this.state.count + this.state.tax;

            }
        }
    };
    handleAddRow = () => {
        const item = {
            name: "",
            quantity: 0,
            unitprice: 0,
            total: 0
        };
        this.setState({
            rows: [...this.state.rows, item]
        });
    };
    handleRemoveRow = () => {
        this.setState({
            rows: this.state.rows.slice(0, -1)
        });

        // this.state.count = 0;
        // for (let i = 0; i < this.state.rows.length; i++) {
        //     console.log("value i",i)
        //     console.log("count", this.state.count)
        //     console.log("rows", this.state.rows[i].total)
        //     this.state.count = (this.state.count + this.state.rows[i].total);

        //     this.state.tax = (this.state.count * this.state.ratetax)/100;
           
        //     this.state.maintotal = this.state.count + this.state.tax;
        // }
    };

    pdfgenerate = () => {
        window.print();
    }
    handletax = e => {
      const rate = e.target.value;
      console.log("ffffff",rate)

        this.setState({ratetax:rate})

        this.state.tax = (this.state.count * rate)/100;
               
        this.state.maintotal = this.state.count + this.state.tax;
    }

    // handletax = e => {
    //     const datas = this.state.datas;
    //     console.log("datas==  ",datas);
    //     datas[e.target.name] = e.target.value;
    //     console.log("target value",e.target.value);
    //     this.setState({datas})
    //     console.log("datas in store",datas);
    //   }

    render() {

        return (
            <div>
                <Header />
                <br /><br />
                <table>
                    <tr>
                        <td > <br /><br /> <br />
                            <div style={{ width: "0px", height: "850px", marginLeft: "200px" }}>
                                <div style={{ background: "#252935", width: "120px",  borderRadius:"9px" }}>
                                    <ul  style={{textAlign:"left"}}>
                                        <span style={{ color: "#f6f6f6", fontSize: "10px" }}>invoiceto.me</span>
                                        <span style={{ color: "#f6f6f6", fontSize: "10px" }}>Edit the template to </span>
                                        <span style={{ color: "#f6f6f6", fontSize: "10px" }}>make invoice </span>
                                    </ul>
                                </div>
                                <br /><br /> <br /><br /> 
                                <div style={{ background: "#252935", width: "120px",  borderRadius:"9px" }} align="center">
                                    <ul style={{textAlign:"left"}}>

                                        <span style={{ color: "#f6f6f6", fontSize: "10px" }}>Generate Invoice</span>
                                        <button style={{ background: "#ff6633",color: "white", fontSize:"8px", border:"0px" , borderRadius:"12px"}} onClick={this.pdfgenerate} > Get PDF</button>
                                    </ul>
                                </div>
                                <br /><br /> <br /><br />
                                <div style={{ background: "#252935", width: "120px",  borderRadius:"9px" }}>
                                    <ul style={{textAlign:"left"}}>
                                           <span style={{ color: "#f6f6f6", fontSize: "10px" }}>Edit table</span><br />
                                          <span style={{ color: "#5db0c1" , fontSize: "10px"}} onClick={this.handleAddRow}>Add row</span><br />
                                         <span style={{ color: "#5db0c1" , fontSize: "10px"}} onClick={this.handleRemoveRow}>Delete row</span>
                                    </ul>
                                </div>
                            </div>
                        </td>

                        <div style={{ background: "#f6f6f6", width: "550px", height: "750px", marginLeft: "120px" }}>
                            {/* 
                                <div >
                                    <input type="text" value="YOUR COMPANY NAME" />
                                </div>
                                    */}
                            <br />
                            <div style={{ width: "450px", height: "650px", marginLeft: "50px" }}>

                                <input type="text" placeholder="Your Company Name" style={{ border: "0px", background: "#f6f6f6",textDecorationColor:"#222222" }} />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="text" placeholder="YOUR INVOICES" style={{ border: "0px", background: "#f6f6f6",textAlign:"right" }} />

                                <br />
                                <table >
                                    <tr>
                                        <td>
                                            <input type="text" placeholder="123 Your Street" style={{ border: "0px", background: "#f6f6f6", fontSize: "9px" }} />
                                            <input type="text" placeholder="Your Town" style={{ border: "0px", background: "#f6f6f6", fontSize: "9px" }} />
                                            <input type="text" placeholder="YOUR Address Line 3" style={{ border: "0px", background: "#f6f6f6", fontSize: "9px" }} /><br />
                                            <input type="text" placeholder="(123) 456 789" style={{ border: "0px", background: "#f6f6f6", fontSize: "9px" }} />
                                            <input type="text" placeholder="email@yourcompany.com" style={{ border: "0px", background: "#f6f6f6", fontSize: "9px" }} />
                                        </td>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                       
                                         <td>
                                        <input type="text" placeholder="27-December-2018" style={{ border: "0px", background: "#f6f6f6", fontSize: "9px",textAlign:"right" }} />
                                        <input type="text" placeholder="Invoice #2334889" style={{ border: "0px", background: "#f6f6f6", fontSize: "9px",align: "right",textAlign:"right" }} />
                                        <input type="text" placeholder="PO 456001200" style={{ border: "0px", background: "#f6f6f6", fontSize: "9px" ,align: "right",textAlign:"right"}} /><br />
                                        <input type="text" placeholder="Att: Ms. Jane Doe" style={{ border: "0px", background: "#f6f6f6", fontSize: "9px",align: "right",textAlign:"right" }} />
                                        <input type="text" placeholder="Client Company Name" style={{ border: "0px", background: "#f6f6f6", fontSize: "9px",align: "right",textAlign:"right" }} />
                                        </td>
                                   </tr>
                                 </table>
                                 
                                
                                <hr></hr>
                                <div> 
                                    <textarea cols="65" rows="5" style={{ border: "0px", overflow: "hidden", background: "#f6f6f6", fontSize: "11px",marginLeft:"0px" }}>
                                    Dear Ms. Jane Doe,
        
                                    Please find below a cost-breakdown for the recent work completed. Please make payment at your earliest convenience, and do not hesitate to contact me with any questions.
        
                                    Many thanks,
                                    Your Name
                                    </textarea>
                                </div>
                               

                                <br />
                                <div style={{ width: "300px", marginLeft: "0px" }}>
                                    <table width="160%" cellSpacing="3" cellPadding="3" border="1">

                                        <tr>
                                            <th style={{background: "#dededc",fontSize:"9px",textAlign:"center"}}>#</th>
                                            <th style={{background: "#dededc",fontSize:"9px",textAlign:"center"}}>Item description</th>
                                            <th style={{background: "#dededc",fontSize:"9px",textAlign:"center"}}>Quantity</th>
                                            <th style={{background: "#dededc",fontSize:"9px",textAlign:"center"}}>Unit price</th>
                                            <th style={{background: "#dededc",fontSize:"9px",textAlign:"center"}}>Total</th>
                                        </tr>



                                        <tbody>
                                            {this.state.rows.map((item, idx) => (
                                                <tr id="addr0" key={idx}>
                                                    <td style={{fontSize:"9px"}}>{idx+1}</td>
                                                    <td>{}<input type="text" name="name" onChange={this.handleChange(idx)} value={this.state.rows[idx].name} style={{ border: "0px" ,textAlign:"center",fontSize:"9px"}} /></td>
                                                    <td>{}<input type="text" name="quantity" onChange={this.handleChange(idx)} value={this.state.rows[idx].quantity} style={{ border: "0px", width: "100%",textAlign:"center",fontSize:"9px" }} /></td>
                                                    <td>{}<input type="text" name="unitprice" onChange={this.handleChange(idx)} value={this.state.rows[idx].unitprice} style={{ border: "0px", width: "100%" ,textAlign:"center",fontSize:"9px"}} /></td>
                                                    <td>{}<input type="text" name="total" readOnly value={this.state.rows[idx].total} style={{ border: "0px", width: "100%" ,textAlign:"center",fontSize:"9px"}} /></td>
                                                </tr>
                                            ))}
                                        </tbody>



                                    </table>

                                    <table width="160%" cellSpacing="3" cellPadding="3" border="1">
                                        <col width="120%" />
                                        <col width="30%" />
                                        <tbody>
                                            <td><input type="text" placeholder="Subtotal" style={{ border: "0px",fontSize:"9px",textAlign:"center",width:"70px",background:"#f6f6f6"     }} /></td>
                                            <td style={{}}><input type="text" value={this.state.count} readOnly style={{ border: "0px",fontSize:"9px",width:"111px"  }} /></td>
                                        </tbody>
                                        <tr>
                                            <td style={{background : "#dedede",fontSize:"9px",color:""}}><input type="text" placeholder="Sales Tax(" style={{ border: "0px",fontSize:"9px",textAlign:"center",background : "#dedede",width:"55px" }} />  <input type="text"  placeholder="20" onChange={this.handletax}  style={{ border: "0px" ,width:"30px",background : "#dedede",fontSize:"9px"  }} /><input type="text" placeholder="%)" style={{ border: "0px",fontSize:"12px",textAlign:"center",background : "#dedede",width:"20px" }} /></td>
                                            <td style={{background : "#dedede"}}><input type="text" value={this.state.tax}  readOnly style={{ border: "0px" ,background : "#dedede",fontSize:"9px",width:"111px" }} /></td>
                                        </tr>
                                        <tr>
                                            <td style={{background: "#c5c5c5"}}><input type="text" placeholder="total" style={{ border: "1px",background: "#c5c5c5",fontSize:"9px" , textAlign:"center",width:"70px" }} /></td>
                                            <td style={{background: "#c5c5c5"}}><input type="text" value={this.state.maintotal} readOnly style={{ border: "0px",fontSize:"9px",background: "#c5c5c5",width:"111px"    }} /></td>
                                        </tr>
                                    </table>

                                </div>
                                <br /><br /><br />
                                <div>
                                <textarea cols="70" rows="5" style={{ border: "0px", overflow: "hidden", background: "#f6f6f6", fontSize: "11px",marginLeft:"0px",color:"#696a6a" }}>
                                        Many thanks for your custom! I look forward to doing business with you again in due course.
        
                                            Payment terms: to be received within 60 days.
                               </textarea>

                                     </div>
                            </div>
                        </div>
                        <td>
                        </td>
                    </tr>

                </table>
            </div>
        );
    }
}







export default InvoiceGenerator;