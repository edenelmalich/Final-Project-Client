import React, { Component } from "react";
import Navbar from "./Navbar";

class Nclients extends Component {
  state={
    Time:[
      {label:"חודש",id:1,selected:false},
      {label:"שלושה חודשים",id:2,selected:false},
      {label:"שנה",id:3,selected:false}
    ],
    Type:[
      {label:"רגיל",id:1,selected:false},
      {label:"סטודנט",id:2,selected:false},
    ],
    Payment:[
      {label:"אשראי",id:1,selected:false},
      {label:"מזומן",id:2,selected:false},
    ]
  }
  onChange=(id)=>{
    this.setState(prevState => {
      const updated= prevState.Time.map(item => {
        if (item.id === id) {             
          item.selected = !item.selected
        }
        else {                                      
          item.selected = false
        }
        return item
      })
      return {
        Time: updated
      }
    
    })
  }
  CheckType=(id)=>{
    this.setState(prevState => {
      const updated= prevState.Type.map(item => {
        if (item.id === id) {             
          item.selected = !item.selected
        }
        else {                                      
          item.selected = false
        }
        return item
      })
      return {
        Type: updated
      }
    
    })
  }
  CheckPayment=(id)=>{
    this.setState(prevState => {
      const updated= prevState.Payment.map(item => {
        if (item.id === id) {             
          item.selected = !item.selected
        }
        else {                                      
          item.selected = false
        }
        return item
      })
      return {
        Payment: updated
      }
    
    })
  }
  render() {
    return (
      <div className="Nclients">
        <Navbar />
        <div className="ContainerSize">
          <div className="PageContainer">
            <div className="MainContent">
              <div className="ContentInfo">
                <div className="FormN">
                  <header className="header-Form">
                    <h3>הוספת לקוח חדש</h3>
                  </header>
                  <div className="NewClientForm">
                  <div className="inputPadding">
                    <header className="PageTitle">טופס הרשמה לחדר כושר</header>
                    </div>
                      <form action="#" className="FormAtt">
                        <div className="FormPadding">
                        <label>שם משפחה:</label>
                          <input type="text" name="firstname" required/>
                          <span className="textPadding">
                          <label>שם פרטי:</label>
                          </span>
                          <input type="text" name="lastname" required/>
                          <br />
                        </div>
                        <div className="inputPadding">
                          <label>תעודת זהות:</label>
                          <input type="text" name="id" required="required" />
                          <span className="textPadding">
                          <label>תאריך לידה:</label>
                          </span>
                          <input type="date" name="date"/>
                          <br />
                        </div>
                        <div className="inputPadding">
                        <label>תקופת מנוי:</label>
                        {this.state.Time.map(item=>(
                          <span className="TextAttributes">{item.label}
                            <input type="radio" 
                            onChange={this.onChange.bind(this,item.id)}
                            checked={item.selected}/>
                           </span>
                        )
                        )}
                         </div>
                        <div className="inputPadding">
                        <label>סוג המנוי:</label>
                        {this.state.Type.map(item=>(
                          <span className="TextAttributes">{item.label}
                            <input type="radio" 
                            onChange={this.CheckType.bind(this,item.id)}
                            checked={item.selected}/>
                           </span>
                        )
                        )}
                        </div>
                        <div className="inputPadding">
                        <div className="TextAttributes">יגבה תשלום חד פעמי בעלות של 20 ₪ עבור צ'יפ</div>
                        </div>
                        <div className="inputPadding">
                        <label>אמצעי תשלום:</label>
                        {this.state.Payment.map(item=>(
                          <span className="TextAttributes">{item.label}
                            <input type="radio" 
                            onChange={this.CheckPayment.bind(this,item.id)}
                            checked={item.selected}/>
                           </span>
                        )
                        )}
                        </div>
                        <div className="inputPadding">
                        <span className="TextAttributes">סך הכל לתשלום:</span>
                        </div>
                        <div className="inputPadding">
                          <input type="submit" name="send" value="הוסף לקוח חדש" />
                        </div>
                      </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="FooterText">
            <div className="FooterTitle">Final Project By Eden Elmalich</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Nclients;
