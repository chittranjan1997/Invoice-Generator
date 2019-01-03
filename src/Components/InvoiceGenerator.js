import React from 'react';
import { Printd } from 'printd';
import invoicelogo from './invoicelogo.png';
import ReactToPrint from "react-to-print";
import styles from './../App.css';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas'
import ToggleDisplay from 'react-toggle-display';
import TextareaAutosize from 'react-autosize-textarea';

class Header extends React.Component {
    render() {
        return (
            <div>
                <div>
                    {/* <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div className="navbar-header" > */}
                           <div style={{ background: "#232733", height: "47px"}}>

                            <img className="headImg" src={invoicelogo}  />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  
                            <span className="headTitle" >FREE,UNLIMITED ONLINE INVOICES</span>&nbsp;&nbsp;&nbsp;
                            <button className="headBtn1"  > LEARN MORE</button>&nbsp;&nbsp;
                            
                            <button className="headBtn2"  > SIGN UP FREE</button>
                
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
            yourcompany :"Your Company Name",
            invoice :"INVOICE",
            ratetax:20,
            txtarea:"",
            show:true
        };
    }
    handleInputChange = e => {
        const { name, value } = e.target;
        console.log("fata",e.target.value)
        this.state.yourcompany = e.target.value;

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
        this.setState({ rows });
        
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
     };


    pdfgenerate = () => {

        var printContents = document.getElementById("divName").innerHTML;
        var originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;    
        window.print();
        document.body.innerHTML = originalContents;

    //     const d = new Printd()

    //  d.print( document.getElementById('divName'), styles )


        // window.print();   
        // doc.fromHTML($('#divName').html(), 15, 15, {
        //     'width': 170,
        //         'elementHandlers': specialElementHandlers
        // });
        // doc.save('sample-file.pdf');


  }

    savepdf = () => {

        const input = document.getElementById('divName');
        html2canvas(input)
          .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'JPEG', 0 ,0, 150,150 );
            // pdf.output('dataurlnewwindow');
            pdf.save("download.pdf");
          });

    }


    handletax = e => {
      const rate = e.target.value;
      console.log("ffffff",rate)

        this.setState({ratetax:rate})

        this.state.tax = (this.state.count * rate)%10;
               
        this.state.maintotal = this.state.count + this.state.tax;
    }

render() {
        return (
            <div>
              <Header />
                <br /><br />
                <table>
                    <tr>
                        <td > <br /><br /> <br />
                            <div className="tableCol1" >
                                <div className="col1Div" >
                                    <ul className="col1ul" >
                                        <span className="col1span1"  >invoiceto.me</span>
                                        <span className="col1span1"  >Edit the template to </span>
                                        <span className="col1span1"  >make invoice </span>
                                    </ul>
                                </div>
                                <br /><br /> <br /><br /> 
                                <div className="col1Div" >
                                    <ul className="col1ul">

                                        <span  className="col1span1" >Generate Invoice</span>
                                        <button className="col1span2" onClick={this.pdfgenerate} > Get PDF</button>
                                        <button className="col1span2" onClick={this.savepdf} > Save PDF</button>
                                    </ul>
                                </div>
                                <br /><br /> <br /><br />
                                <div className="col1Div" >
                                    <ul className="col1ul">
                                           <span className="col1span1" >Edit table</span><br />
                                          <span className="col1span3"  onClick={this.handleAddRow}>Add row</span><br />
                                         <span className="col1span3"   onClick={this.handleRemoveRow}>Delete row</span>
                                    </ul>
                                </div>
                            </div>
                        </td>
                     <div id="divName">
                        <div className="tableCol2">
                            {/* 
                                <div >
                                    <input type="text" value="YOUR COMPANY NAME" />
                                </div>
                                    */}
                            <br />
                            <div className="tableCol3" >
                            {/* onChange={()=>this.handleInputchange} value={this.state.yourcompany} */}
                                <input className="col1Input1" type="text" placeholder="Your Company"   />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input className="col2Input1" type="text" placeholder="YOUR INVOICES"  />

                                <br />
                                <table >
                                    <tr>
                                        <td>
                                            <input className="col1Input" type="text" placeholder="123 Your Street"        />
                                            <input className="col1Input" type="text" placeholder="Your Town"             />
                                            <input className="col1Input" type="text" placeholder="YOUR Address Line 3"    /><br />
                                            <input className="col1Input" type="text" placeholder="(123) 456 789"         />
                                            <input className="col1Input" type="text" placeholder="email@yourcompany.com" />
                                        </td>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                       
                                         <td>
                                        <input className="col2Input" type="text" placeholder="27-December-2018"    />
                                        <input className="col2Input" type="text" placeholder="Invoice #2334889"    />
                                        <input className="col2Input" type="text" placeholder="PO 456001200"        /><br />
                                        <input className="col2Input4" type="text" placeholder="Att: Ms. Jane Doe"    />
                                        <input className="col2Input4" type="text" placeholder="Client Company Name" />
                                        </td>
                                   </tr>
                                 </table>
                             <hr />
                                <div> 
                                <ToggleDisplay show={this.state.show}>
                                <TextareaAutosize  cols="65"  onResize={(e) => {}} className="myTxt1" >
                                    {/* <textarea cols="65" rows="6" id="txthide" className="myTxt1" > */}
                                    Dear Ms. Jane Doe,
        
                                    Please find below a cost-breakdown for the recent work completed. Please make payment at your earliest convenience, and do not hesitate to contact me with any questions.
        
                                    Many thanks,
                                    Your Name
                                    {/* </textarea> */}
                                    </TextareaAutosize>
                                    </ToggleDisplay>
                                </div>
                             <br />
                                <div className="tableData" >
                                    <table width="160%" cellSpacing="3" cellPadding="3" border="1">
                                        <tr>
                                            <th style={{background: "#dededc"}}> <input type="text" placeholder="#"   className="tableHeadInput"       /></th>
                                            <th className="tableHead" ><input type="text" className="tableHeadInput" placeholder="Item description"   /></th>
                                            <th className="tableHead" ><input type="text" className="tableHeadInput" placeholder="Quantity"          /></th>
                                            <th className="tableHead" ><input type="text" className="tableHeadInput" placeholder="Unit price"       /></th>
                                            <th className="tableHead" ><input type="text" className="tableHeadInput" placeholder="Total"           /></th>
                                        </tr>
                                        <tbody>
                                            {this.state.rows.map((item, idx) => (
                                               (idx%2) == 0 ?                                       
                                               <tr id="addr0" key={idx}>
                                               {   }
                                                  <td style={{fontSize:"9px"}}>{idx+1}</td>
                                                  <td>{}<input type="text" name="name"     onChange={this.handleChange(idx)} value={this.state.rows[idx].name}  style={{ border: "0px" ,textAlign:"center",fontSize:"9px"}} /></td>
                                                  <td>{}<input type="text" name="quantity" onChange={this.handleChange(idx)} value={this.state.rows[idx].quantity}      style={{ border: "0px", width: "100%",textAlign:"center",fontSize:"9px" }} /></td>
                                                  <td>{}<input type="text" name="unitprice" onChange={this.handleChange(idx)} value={this.state.rows[idx].unitprice}    style={{ border: "0px", width: "100%" ,textAlign:"center",fontSize:"9px"}} /></td>
                                                  <td>{}<input type="text" name="total" readOnly value={this.state.rows[idx].total}                                     style={{ border: "0px", width: "100%" ,textAlign:"center",fontSize:"9px",width:"84px"}} /></td>
                                              </tr>                                               
                                               :                                  
                                              <tr id="addr0" key={idx}>
                                                 <td style={{fontSize:"9px",background:"#eaeaea"}}>{idx+1}</td>
                                                 <td  style={{background:"#eaeaea"}}>{}<input type="text" name="name"     onChange={this.handleChange(idx)} value={this.state.rows[idx].name}  style={{ border: "0px" ,textAlign:"center",fontSize:"9px",background:"#eaeaea"}} /></td>
                                                 <td style={{background:"#eaeaea"}}>{}<input type="text" name="quantity" onChange={this.handleChange(idx)} value={this.state.rows[idx].quantity}      style={{ border: "0px", width: "100%",textAlign:"center",fontSize:"9px",background:"#eaeaea" }} /></td>
                                                 <td style={{background:"#eaeaea"}}>{}<input type="text" name="unitprice" onChange={this.handleChange(idx)} value={this.state.rows[idx].unitprice}    style={{ border: "0px", width: "100%" ,textAlign:"center",fontSize:"9px",background:"#eaeaea"}} /></td>
                                                 <td style={{background:"#eaeaea"}}>{}<input type="text" name="total" readOnly value={this.state.rows[idx].total}                                     style={{ border: "0px", width: "100%" ,textAlign:"center",fontSize:"9px",background:"#eaeaea",width:"84px"}} /></td>
                                             </tr>                                            
                                          ))}
                                        </tbody>

                                        {/* <tbody>
                                            {this.state.rows.map((item, idx) => (
                                               
                                            ))}
                                        </tbody> */}


                                    </table>
                                    <table width="160%" cellSpacing="3" cellPadding="3" border="1">
                                        <col width="120%" />
                                        <col width="30%" />
                                        <tbody>
                                            <td style={{textAlign:"left"}}><input type="text" placeholder="Subtotal"            style={{ border: "0px",fontSize:"9px",textAlign:"center",width:"70px",background:"#f6f6f6"     }} /></td>
                                            <td ><input type="text" value={this.state.count} readOnly style={{ border: "0px",fontSize:"9px",width:"84px" , textAlign:"center" }} /></td>
                                        </tbody>
                                        <tr>
                                            <td style={{background : "#dedede",fontSize:"9px",textAlign:"left"}}><input type="text" placeholder="Sales Tax(" style={{ border: "0px",fontSize:"9px",textAlign:"right",background : "#dedede",width:"55px" }} />  <input type="text"  placeholder="20" onChange={this.handletax}  style={{ border: "0px" ,width:"20px",background : "#dedede",fontSize:"9px",textAlign:"center"  }} /><input type="text" placeholder="%)" style={{ border: "0px",fontSize:"12px",textAlign:"left",background : "#dedede",width:"20px" }} /></td>
                                            <td style={{background : "#dedede"}}><input type="text" value={this.state.tax}  readOnly style={{ border: "0px" ,background : "#dedede",fontSize:"9px",width:"84px" , textAlign:"center"}} /></td>
                                        </tr>
                                        <tr>
                                            <td style={{background: "#c5c5c5",textAlign:"left"}}><input type="text" placeholder="total" style={{ border: "1px",background: "#c5c5c5",fontSize:"9px" , textAlign:"center",width:"70px" }} /></td>
                                            <td style={{background: "#c5c5c5"}}><input type="text" value={this.state.maintotal} readOnly style={{ border: "0px",fontSize:"9px",background: "#c5c5c5",width:"84px"   , textAlign:"center" }} /></td>
                                        </tr>
                                    </table>

                                </div>
                                <br /><br /><br />
                                <div>
                                <TextareaAutosize  className="myTxt2" cols="70"  onResize={(e) => {}}  >
                                {/* <textarea className="myTxt2" cols="70" rows="5" > */}
                                        Many thanks for your custom! I look forward to doing business with you again in due course.
        
                                            Payment terms: to be received within 60 days.
                               {/* </textarea> */}
                               </TextareaAutosize>
                                     </div>
                            </div>
                        </div>
                        <td>
                        </td>
                        </div>  
                    </tr>
                </table>
            </div>
        );
    }
}

export default InvoiceGenerator;