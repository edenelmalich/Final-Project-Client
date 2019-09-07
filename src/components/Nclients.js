import React, { Component } from "react";
import Navbar from "./Navbar";


class Nclients extends Component {
  state = {
    Time: [
      { label: "חודש", id: 1, selected: false },
      { label: "שלושה חודשים", id: 2, selected: false },
      { label: "שנה", id: 3, selected: false }
    ],
    Type: [
      { label: "רגיל", id: 1, selected: false },
      { label: "סטודנט", id: 2, selected: false }
    ],
    Payment: [
      { label: "אשראי", id: 1, selected: false },
      { label: "מזומן", id: 2, selected: false }
    ]
  };
  onChange = id => {
    this.setState(prevState => {
      const updated = prevState.Time.map(item => {
        if (item.id === id) {
          item.selected = !item.selected;
        } else {
          item.selected = false;
        }
        return item;
      });
      return {
        Time: updated
      };
    });
  };
  CheckType = id => {
    this.setState(prevState => {
      const updated = prevState.Type.map(item => {
        if (item.id === id) {
          item.selected = !item.selected;
        } else {
          item.selected = false;
        }
        return item;
      });
      return {
        Type: updated
      };
    });
  };
  CheckPayment = id => {
    this.setState(prevState => {
      const updated = prevState.Payment.map(item => {
        if (item.id === id) {
          item.selected = !item.selected;
        } else {
          item.selected = false;
        }
        return item;
      });
      return {
        Payment: updated
      };
    });
  };
  render() {
    return (
      <div className="Nclients">
        <Navbar />
        <div className="Page-Container">
          <div className="Pages-Content">
            <div className="Att-PagesContent">
              <div className="PagesContainer">
                <div className="FormClient">
                  <header className="Header-Client">
                    <h3>הוספת לקוח חדש</h3>
                  </header>
                  <div className="Main-Padding"></div>
                  <form action="#" className="Nclient-FormAtt">
                    <div className="Form-Flex">
                    <input type="text" name="firstname" placeholder="שם פרטי" required/>
                    <input type="text" name="lastname" placeholder="שם משפחה"required />
                    <input type="text" name="id" placeholder="תעודת זהות" required="required" />   
                    <input type="text" name="Phone" placeholder="טלפון" />
                    </div>
                    <div className="Main-Padding"></div>
                    <div className="Main-Border"></div>
                    <label>סוג המנוי:</label>
                      {this.state.Type.map(item => (
                        <div className="Radio-Text">
                          {item.label}
                          <input
                            type="radio"
                            onChange={this.CheckType.bind(this, item.id)}
                            checked={item.selected}
                          />
                        </div>
                      ))}
                    <div className="Main-Border"></div>
                    <label>תקופת מנוי:</label>
                      {this.state.Time.map(item => (
                        <div className="Radio-Text">
                          {item.label}
                          <input
                            type="radio"
                            onChange={this.onChange.bind(this, item.id)}
                            checked={item.selected}/>
                        </div>
                      ))}
                      <div className="Main-Border"></div>
                      <label>יגבה תשלום חד פעמי בעלות של 20 ₪ עבור צ'יפ.</label>
                      <div className="Main-Border"></div>
                      <label>אמצעי תשלום:</label>
                      {this.state.Payment.map(item => (
                        <span className="Radio-Text">
                          {item.label}
                          <input
                            type="radio"
                            onChange={this.CheckPayment.bind(this, item.id)}
                            checked={item.selected}
                          />
                        </span>
                      ))}
                      <div className="Main-Border"></div>
                      <label>סך הכל לתשלום:</label>
                      <div className="Main-Border"></div>
                      <div className="Main-Padding"></div>
                      <input type="submit" name="send" value="הוסף לקוח חדש" />
                  </form>
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
