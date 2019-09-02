import React, { Component } from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
class BuildPlan extends Component {
  state = {
    Muscles: [
      { id: 0, label: "חזה", value:"chest", selected: false },
      { id: 1, label: "בטן", value: "Abs", selected: false },
      { id: 2, label: "גב", value: "Back", selected: false },
      { id: 3, label: "יד קדמית", value: "FrontHand", selected: false },
      { id: 4, label: "יד אחורית", value: "BackHand", selected: false },
      { id: 5, label: "רגליים", value: "Legs", selected: false },
      { id: 6, label: "כתפיים", value: "Shoulders", selected: false }
    ],
    ChestExercises: [
      { id: 1, label: "לחיצת חזה כנגד מוט", selected: false },
      { id: 2, label: "לחיצה בשיפוע עליון כנגד דאמבלים", selected: false },
      { id: 3, label: "פרפר מכונה", selected: false },
      { id: 4, label: "לחיצת חזה בשיפוע שלילי", selected: false },
      { id: 5, label: "לחיצת חזה בשיפוע חיובי", selected: false },
      { id: 6, label: "מקבילים", selected: false },
      { id: 7, label: "בשכיבה לחיצת חזה כנגד מוט", selected: false },
      { id: 8, label: "פרפר בשכיבה עם משקולות", selected: false },
      { id: 9, label: "שכיבות שמיכה", selected: false }
    ],
    AbsExercises: [
      { id: 10, label: "כפיפות בטן", selected: false },
      { id: 11, label: "פלאנק", selected: false },
      { id: 12, label: "פלאנק צידי", selected: false },
      { id: 13, label: "הרמות רגליים", selected: false },
      { id: 14, label: "אופניים", selected: false },
      { id: 15, label: "פינגווינים", selected: false },
      { id: 16, label: "כפיפות בטן אלכסוניות", selected: false },
      { id: 17, label: "כפיפת גב הצידה", selected: false },
      { id: 18, label: "הרמת רגליים בתלייה", selected: false }
    ],
    BackExercises: [
      { id: 19, label: "מתח", selected: false },
      { id: 20, label: "משיכה מפולי עליון", selected: false },
      { id: 21, label: "מסור / חתירה יד יד", selected: false },
      { id: 22, label: "פולאובר", selected: false },
      { id: 23, label: "דדליפט עם מוט", selected: false },
      { id: 24, label: "פולאובר בשכיבה כנגד משקולת יד", selected: false },
      { id: 25, label: "חתירה בהטיית גב כנגד מוט", selected: false },
      { id: 26, label: "משיכת פולי עליון אחיזה צרה", selected: false },
      { id: 27, label: " מתח רחב", selected: false }
    ],
    FHExercises: [
      { id: 28, label: "כפיפת מרפקים כנגד מוט", selected: false },
      { id: 29, label: "כפיפת מרפקים בעמידה עם מוט", selected: false },
      { id: 30, label: "פטישים", selected: false },
      { id: 31, label: "מתח באחיזה הפוכה", selected: false },
      { id: 32, label: "כפיפת מרפק על כיסא כומר", selected: false },
      { id: 33, label: "כפיפת מרפק בפולי", selected: false },
      { id: 34, label: "כפיפות מרפקים בספסל פריצ'ר בישיבה", selected: false },
      { id: 35, label: " כפיפות מרפקים כנגד כבל קרוס בישיבה", selected: false },
      { id: 36, label: "כפיפת מרפקים עם משקולות יד", selected: false }
    ],
    BHExercises: [
      { id: 28, label: "לחיצת חזה בשכיבה באחיזה צרה עם מוט", selected: false },
      { id: 29, label: "פשיטת מרפקים בשכיבה עם מוט", selected: false },
      { id: 30, label: "פשיטת מרפק בפולי", selected: false },
      { id: 31, label: "מקבילים כנגד ספסל", selected: false },
      { id: 32, label: "מקבילים כגד משקל גוף", selected: false },
      { id: 33, label: "לחיצה צרפתית", selected: false },
      { id: 34, label: "", selected: false },
      { id: 35, label: " כפיפות מרפקים כנגד כבל קרוס בישיבה", selected: false },
      { id: 36, label: "כפיפת מרפקים עם משקולות יד", selected: false }
    ],
    OpenList: false,
    Count: 0
  };
  //this Function Take The Parameters in Local Storage And Update Will we Do Refresh
  //Or We Pass To Another Page
  componentWillMount() {
    localStorage.getItem("Count") &&
      this.setState({
        Count: JSON.parse(localStorage.getItem("Count"))
      });
    localStorage.getItem("Muscles") &&
      this.setState({
        Muscles: JSON.parse(localStorage.getItem("Muscles"))
      });
    localStorage.getItem("ChestExercises") &&
      this.setState({
        ChestExercises: JSON.parse(localStorage.getItem("ChestExercises"))
      });
    localStorage.getItem("AbsExercises") &&
      this.setState({
        AbsExercises: JSON.parse(localStorage.getItem("AbsExercises"))
      });
    localStorage.getItem("BackExercises") &&
      this.setState({
        BackExercises: JSON.parse(localStorage.getItem("BackExercises"))
      });
      localStorage.getItem("FHExercises") &&
      this.setState({
        FHExercises: JSON.parse(localStorage.getItem("FHExercises"))
      });
  }
  //this Function for Save The Parameters That I need in Local storage
  componentWillUpdate(NextProps, NextState) {
    localStorage.setItem("Count", JSON.stringify(NextState.Count));
    localStorage.setItem("Muscles", JSON.stringify(NextState.Muscles));
    localStorage.setItem(
      "ChestExercises",
      JSON.stringify(NextState.ChestExercises)
    );
    localStorage.setItem(
      "AbsExercises",
      JSON.stringify(NextState.AbsExercises)
    );
    localStorage.setItem(
      "BackExercises",
      JSON.stringify(NextState.BackExercises)
    );
    localStorage.setItem(
      "FHExercises",
      JSON.stringify(NextState.FHExercises)
    );
  }
  onChange = id => {
    this.setState(prevState => {
      const updatedMuscle = prevState.Muscles.map(muscle => {
        if (muscle.id === id) {
          muscle.selected = !muscle.selected;
        } else {
          muscle.selected = false;
        }
        return muscle;
      });
      return {
        Muscles: updatedMuscle
      };
    });
  };
  saveChest = id => {
    this.setState({
      ChestExercises: this.state.ChestExercises.map(item => {
        if (id === item.id && item.selected === false) {
          item.selected = true;
          this.Additem();
        }
        return item;
      })
    });
  };
  saveAbs = id => {
    this.setState({
      AbsExercises: this.state.AbsExercises.map(item => {
        if (id === item.id && item.selected === false) {
          item.selected = true;
          this.Additem();
        }
        return item;
      })
    });
  };
  saveBack = id => {
    this.setState({
      BackExercises: this.state.BackExercises.map(item => {
        if (id === item.id && item.selected === false) {
          item.selected = true;
          this.Additem();
        }
        return item;
      })
    });
  };
  saveFrontHand = id => {
    this.setState({
      FHExercises: this.state.FHExercises.map(item => {
        if (id === item.id && item.selected === false) {
          item.selected = true;
          this.Additem();
        }
        return item;
      })
    });
  };
  Additem = () => {
    this.setState(prevState => {
      return { Count: prevState.Count + 1 };
    });
  };
  ShowList() {
    this.setState({
      OpenList: !this.state.OpenList
    });
  }
  Closeitem = id => {
    this.setState({
      ChestExercises: this.state.ChestExercises.map(item => {
        if (id === item.id) {
          item.selected = false;
          this.setState({ Count: this.state.Count - 1 });
        }

        return item;
      })
    });
    this.setState({
      AbsExercises: this.state.AbsExercises.map(item => {
        if (id === item.id) {
          item.selected = false;
          this.setState({ Count: this.state.Count - 1 });
        }

        return item;
      })
    });
    this.setState({
      BackExercises: this.state.BackExercises.map(item => {
        if (id === item.id) {
          item.selected = false;
          this.setState({ Count: this.state.Count - 1 });
        }
        return item;
      })
    });
    this.setState({
      FHExercises: this.state.FHExercises.map(item => {
        if (id === item.id) {
          item.selected = false;
          this.setState({ Count: this.state.Count - 1 });
        }
        return item;
      })
    });
  };
  CloseBox() {
    this.setState({ OpenList: false });
  }
  render() {
    return (
      <div className="BuildPlan">
        <Navbar List={this.state.OpenList} />
        {/* The Attributes of the BuildPlan Page With the Title */}
        <div className="ContainerSize">
          <div className="PageContainer">
            <div className="MainContent">
              <div className="ContentInfo">
                <h2>בניית תוכנית אימונים</h2>
                {/* The Box With The option To Choose The Muscle With The Exercises List*/}
                <div className="PlanBox">
                  <div className="PlanHeader">
                    בחר שרירים
                    <NavLink to="/exeplan" className="BackPage">
                      לדף הקודם
                    </NavLink>
                  </div>
                  <div className="quantity">{this.state.Count}</div>
                  <button className="iconList" onClick={() => this.ShowList()}>
                    <FontAwesomeIcon icon={faClipboardList} />
                  </button>
                  {/* This Code its For Show/Hide The Exercises List */}
                  {this.state.OpenList ? (
                    <span className="ListBox">
                      <div className="HeaderList">תרגילים שנבחרו</div>
                      <div className="itemsBox">
                        {this.state.ChestExercises.map(item => (
                          <div key={item.id}>
                            {item.selected ? (
                              <div className="ExercisesText">
                                <span
                                  className="Closeitem"
                                  onClick={this.Closeitem.bind(this, item.id)}
                                >
                                  +
                                </span>
                                {item.label}
                              </div>
                            ) : null}
                          </div>
                        ))}
                        {this.state.AbsExercises.map(item => (
                          <div key={item.id}>
                            {item.selected ? (
                              <div className="ExercisesText">
                                <span
                                  className="Closeitem"
                                  onClick={this.Closeitem.bind(this, item.id)}
                                >
                                  +
                                </span>
                                {item.label}
                              </div>
                            ) : null}
                          </div>
                        ))}
                        {this.state.BackExercises.map(item => (
                          <div key={item.id}>
                            {item.selected ? (
                              <div className="ExercisesText">
                                <span
                                  className="Closeitem"
                                  onClick={this.Closeitem.bind(this, item.id)}
                                >
                                  +
                                </span>
                                {item.label}
                              </div>
                            ) : null}
                          </div>
                        ))}
                        {this.state.FHExercises.map(item => (
                          <div key={item.id}>
                            {item.selected ? (
                              <div className="ExercisesText">
                                <span
                                  className="Closeitem"
                                  onClick={this.Closeitem.bind(this, item.id)}
                                >
                                  +
                                </span>
                                {item.label}
                              </div>
                            ) : null}
                          </div>
                        ))}
                      </div>
                      <div className="ListBoxFooter">
                        <button className="ButtonSave">שמור תוכנית</button>
                        <button
                          onClick={() => this.CloseBox()}
                          className="ButtonClose"
                        >
                          סגור{" "}
                        </button>
                      </div>
                    </span>
                  ) : null}
                  <form className="FormMuscles">
                    {this.state.Muscles.map(muscles => (
                      <span key={muscles.id} className="TextMuscles">
                        {muscles.label}
                        <input
                          type="checkbox"
                          onChange={this.onChange.bind(this, muscles.id)}
                          checked={muscles.selected}
                        />
                        {muscles.selected && muscles.value === "chest" ? (
                          <div className="ExeBox">
                            <div className="HeaderBox">
                              <div className="ExeHeader">רשימת תרגילים</div>
                            </div>
                            <div className="ExeAttributes">
                              {this.state.ChestExercises.map(item => (
                                <span
                                  key={item.id}
                                  onClick={this.saveChest.bind(this, item.id)}
                                  className="ExeButtons"
                                >
                                  {item.label}
                                  
                                </span>
                              ))}
                            </div>
                          </div>
                        ) : null}
                        {muscles.selected && muscles.value === "Abs" ? (
                          <div className="ExeBox">
                            <div className="HeaderBox">
                              <div className="ExeHeader">רשימת תרגילים</div>
                            </div>
                            <div className="ExeAttributes">
                              {this.state.AbsExercises.map(item => (
                                <span
                                  key={item.id}
                                  onClick={this.saveAbs.bind(this, item.id)}
                                  className="ExeButtons"
                                >
                                  {item.label}
                                </span>
                              ))}
                            </div>
                          </div>
                        ) : null}
                        {muscles.selected && muscles.value === "Back" ? (
                          <div className="ExeBox">
                            <div className="HeaderBox">
                              <div className="ExeHeader">רשימת תרגילים</div>
                            </div>
                            <div className="ExeAttributes">
                              {this.state.BackExercises.map(item => (
                                <span
                                  key={item.id}
                                  onClick={this.saveBack.bind(this, item.id)}
                                  className="ExeButtons"
                                >
                                  {item.label}
                                </span>
                              ))}
                            </div>
                          </div>
                        ) : null}
                        {muscles.selected && muscles.value === "FrontHand" ? (
                          <div className="ExeBox">
                            <div className="HeaderBox">
                              <div className="ExeHeader">רשימת תרגילים</div>
                            </div>
                            <div className="ExeAttributes">
                              {this.state.FHExercises.map(item => (
                                <span
                                  key={item.id}
                                  onClick={this.saveFrontHand.bind(this, item.id)}
                                  className="ExeButtons"
                                >
                                  {item.label}
                                </span>
                              ))}
                            </div>
                          </div>
                        ) : null}
                      </span>
                    ))}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BuildPlan;
