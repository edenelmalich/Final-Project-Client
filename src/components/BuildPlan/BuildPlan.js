import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import './BuildplanCss.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
class BuildPlan extends Component {
  state = {
    Muscles: [
      { id: 0, label: 'חזה', value: 'Chest', selected: true },
      { id: 1, label: 'בטן', value: 'Abs', selected: false },
      { id: 2, label: 'גב', value: 'Back', selected: false },
      { id: 3, label: 'יד קדמית', value: 'FrontHand', selected: false },
      { id: 4, label: 'יד אחורית', value: 'BackHand', selected: false },
      { id: 5, label: 'רגליים', value: 'Legs', selected: false },
      { id: 6, label: 'כתפיים', value: 'Shoulders', selected: false }
    ],
    ChestExercises: [
      { id: 1, label: 'לחיצת חזה כנגד מוט', selected: false },
      { id: 2, label: 'לחיצה בשיפוע עליון כנגד דאמבלים', selected: false },
      { id: 3, label: 'פרפר מכונה', selected: false },
      { id: 4, label: 'לחיצת חזה בשיפוע שלילי', selected: false },
      { id: 5, label: 'לחיצת חזה בשיפוע חיובי', selected: false },
      { id: 6, label: 'מקבילים', selected: false },
      { id: 7, label: 'בשכיבה לחיצת חזה כנגד מוט', selected: false },
      { id: 8, label: 'פרפר בשכיבה עם משקולות', selected: false },
      { id: 9, label: 'שכיבות שמיכה', selected: false }
    ],
    AbsExercises: [
      { id: 10, label: 'כפיפות בטן', selected: false },
      { id: 11, label: 'פלאנק', selected: false },
      { id: 12, label: 'פלאנק צידי', selected: false },
      { id: 13, label: 'הרמות רגליים', selected: false },
      { id: 14, label: 'אופניים', selected: false },
      { id: 15, label: 'פינגווינים', selected: false },
      { id: 16, label: 'כפיפות בטן אלכסוניות', selected: false },
      { id: 17, label: 'כפיפת גב הצידה', selected: false },
      { id: 18, label: 'הרמת רגליים בתלייה', selected: false }
    ],
    BackExercises: [
      { id: 19, label: 'מתח', selected: false },
      { id: 20, label: 'משיכה מפולי עליון', selected: false },
      { id: 21, label: 'מסור / חתירה יד יד', selected: false },
      { id: 22, label: 'פולאובר', selected: false },
      { id: 23, label: 'דדליפט עם מוט', selected: false },
      { id: 24, label: 'פולאובר בשכיבה כנגד משקולת יד', selected: false },
      { id: 25, label: 'חתירה בהטיית גב כנגד מוט', selected: false },
      { id: 26, label: 'משיכת פולי עליון אחיזה צרה', selected: false },
      { id: 27, label: ' מתח רחב', selected: false }
    ],
    FHExercises: [
      { id: 28, label: 'כפיפת מרפקים כנגד מוט', selected: false },
      { id: 29, label: 'כפיפת מרפקים בעמידה עם מוט', selected: false },
      { id: 30, label: 'פטישים', selected: false },
      { id: 31, label: 'מתח באחיזה הפוכה', selected: false },
      { id: 32, label: 'כפיפת מרפק על כיסא כומר', selected: false },
      { id: 33, label: 'כפיפת מרפק בפולי', selected: false },
      { id: 34, label: "כפיפות מרפקים בספסל פריצ'ר בישיבה", selected: false },
      { id: 35, label: ' כפיפות מרפקים כנגד כבל קרוס בישיבה', selected: false },
      { id: 36, label: 'כפיפת מרפקים עם משקולות יד', selected: false }
    ],
    BHExercises: [
      { id: 37, label: 'לחיצת חזה בשכיבה באחיזה צרה עם מוט', selected: false },
      { id: 38, label: 'פשיטת מרפקים בשכיבה עם מוט', selected: false },
      { id: 39, label: 'פשיטת מרפק בפולי', selected: false },
      { id: 40, label: 'מקבילים כנגד ספסל', selected: false },
      { id: 41, label: 'מקבילים כגד משקל גוף', selected: false },
      { id: 42, label: 'לחיצה צרפתית', selected: false },
      { id: 43, label: 'לחיצת חזה אחיזת מעויין', selected: false },
      { id: 44, label: 'שכיבות שמיכה יהלום', selected: false },
      { id: 45, label: 'מקבילים עם משקל', selected: false }
    ],
    LegsExercises: [
      { id: 46, label: 'הרמת עקבים בעמידה כנגד מכונת סמית', selected: false },
      { id: 47, label: 'כפיפת ברכיים בשכיבה במכונה', selected: false },
      { id: 48, label: 'לחיצת רגליים במכונה', selected: false },
      { id: 49, label: 'סקוואט כנגד מוט', selected: false },
      { id: 50, label: 'סקוואט ברגל אחת עם משקולת יד', selected: false },
      { id: 51, label: 'סווינג', selected: false },
      { id: 52, label: 'מכרעיים בהליכה עם משקולות', selected: false },
      { id: 53, label: 'מכרעיים לאחור כנגד מוט', selected: false },
      { id: 54, label: 'לחיצת כפות רגליים רחבות וגבוהות', selected: false }
    ],
    ShouldersExercises: [
      { id: 55, label: 'הרחקה בעמידה בהצלבה עם כבלים', selected: false },
      { id: 56, label: 'לחיצת כתפיים בישיבה עם משקולות', selected: false },
      { id: 57, label: 'הרחקת כתפיים בעמידה עם משקולות', selected: false },
      { id: 58, label: 'חתירה אופקית עם חבל כנגד פולי עליון', selected: false },
      { id: 59, label: 'חתירה ישרה לסנטר עם מוט', selected: false },
      { id: 60, label: 'כפיפת כתף בעמידה כנגד פלטה', selected: false },
      { id: 61, label: 'כפיפת כתף בעמידה עם חבל כנגד פולי', selected: false },
      { id: 62, label: 'לחיצת ארנולד', selected: false },
      { id: 63, label: 'לחיצת בראדפורד בעמידה', selected: false }
    ],
    OpenList: false,
    Count: 0
  };
  //this Function Take The Parameters in Local Storage And Update Will we Do Refresh
  //Or We Pass To Another Page
  // componentWillMount() {
  //   localStorage.getItem("Count") &&
  //     this.setState({
  //       Count: JSON.parse(localStorage.getItem("Count"))
  //     });
  //   localStorage.getItem("Muscles") &&
  //     this.setState({
  //       Muscles: JSON.parse(localStorage.getItem("Muscles"))
  //     });
  //   localStorage.getItem("ChestExercises") &&
  //     this.setState({
  //       ChestExercises: JSON.parse(localStorage.getItem("ChestExercises"))
  //     });
  //   localStorage.getItem("AbsExercises") &&
  //     this.setState({
  //       AbsExercises: JSON.parse(localStorage.getItem("AbsExercises"))
  //     });
  //   localStorage.getItem("BackExercises") &&
  //     this.setState({
  //       BackExercises: JSON.parse(localStorage.getItem("BackExercises"))
  //     });
  //   localStorage.getItem("FHExercises") &&
  //     this.setState({
  //       FHExercises: JSON.parse(localStorage.getItem("FHExercises"))
  //     });
  //   localStorage.getItem("BHExercises") &&
  //     this.setState({
  //       BHExercises: JSON.parse(localStorage.getItem("BHExercises"))
  //     });
  //   localStorage.getItem("LegsExercises") &&
  //     this.setState({
  //       LegsExercises: JSON.parse(localStorage.getItem("LegsExercises"))
  //     });
  //   localStorage.getItem("ShouldersExercises") &&
  //     this.setState({
  //       ShouldersExercises: JSON.parse(
  //         localStorage.getItem("ShouldersExercises")
  //       )
  //     });
  // }
  //this Function for Save The Parameters That I need in Local storage
  // componentWillUpdate(NextProps, NextState) {
  //   localStorage.setItem("Count", JSON.stringify(NextState.Count));
  //   localStorage.setItem("Muscles", JSON.stringify(NextState.Muscles));
  //   localStorage.setItem(
  //     "ChestExercises",
  //     JSON.stringify(NextState.ChestExercises)
  //   );
  //   localStorage.setItem(
  //     "AbsExercises",
  //     JSON.stringify(NextState.AbsExercises)
  //   );
  //   localStorage.setItem(
  //     "BackExercises",
  //     JSON.stringify(NextState.BackExercises)
  //   );
  //   localStorage.setItem("FHExercises", JSON.stringify(NextState.FHExercises));
  //   localStorage.setItem("BHExercises", JSON.stringify(NextState.BHExercises));
  //   localStorage.setItem(
  //     "LegsExercises",
  //     JSON.stringify(NextState.LegsExercises)
  //   );
  //   localStorage.setItem(
  //     "ShouldersExercises",
  //     JSON.stringify(NextState.ShouldersExercises)
  //   );
  // }
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
  saveBackHand = id => {
    this.setState({
      BHExercises: this.state.BHExercises.map(item => {
        if (id === item.id && item.selected === false) {
          item.selected = true;
          this.Additem();
        }
        return item;
      })
    });
  };
  saveLegs = id => {
    this.setState({
      LegsExercises: this.state.LegsExercises.map(item => {
        if (id === item.id && item.selected === false) {
          item.selected = true;
          this.Additem();
        }
        return item;
      })
    });
  };
  saveShoulders = id => {
    this.setState({
      ShouldersExercises: this.state.ShouldersExercises.map(item => {
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
    this.setState({
      BHExercises: this.state.BHExercises.map(item => {
        if (id === item.id) {
          item.selected = false;
          this.setState({ Count: this.state.Count - 1 });
        }
        return item;
      })
    });
    this.setState({
      LegsExercises: this.state.LegsExercises.map(item => {
        if (id === item.id) {
          item.selected = false;
          this.setState({ Count: this.state.Count - 1 });
        }
        return item;
      })
    });
    this.setState({
      ShouldersExercises: this.state.ShouldersExercises.map(item => {
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
    const {
      Count,
      OpenList,
      Muscles,
      ChestExercises,
      AbsExercises,
      BackExercises,
      FHExercises,
      BHExercises,
      LegsExercises,
      ShouldersExercises
    } = this.state;

    return (
      <div className='BuildPlan'>
        <Navbar />
        {/* The Attributes of the BuildPlan Page With the Title */}
        <div className='Page-Container'>
          <div className='Pages-Content'>
            <div className='Att-PagesContent'>
              <div className='PagesContainer'>
                <h2>בניית תוכנית אימונים</h2>
                <div className='Plan-Padding'></div>
                <div className='ExeMain'>
                  <div className='PlanHeader'>
                    בחר שרירים
                    <Link to='/exeplan' className='BackPage'>
                      לדף הקודם
                    </Link>
                  </div>
                  <div className='Main-Padding'></div>
                  <div className='Main-Border'></div>
                  <div className='Quantity'>{Count}</div>
                  <button className='Icon-List' onClick={() => this.ShowList()}>
                    <FontAwesomeIcon icon={faClipboardList} />
                  </button>
                  {OpenList ? (
                    <div>
                      <div className='ListBox'>
                        <div className='ListBox-Att'>
                          <div className='HeaderList'>תרגילים שנבחרו</div>
                          <div className='ExercisesText-Box'>
                            {ChestExercises.map(item => (
                              <div key={item.id}>
                                {item.selected ? (
                                  <div className='ExercisesText-Att'>
                                    <div className='ExercisesText'>
                                      <div
                                        className='Closeitem'
                                        onClick={this.Closeitem.bind(
                                          this,
                                          item.id
                                        )}
                                      >
                                        +
                                      </div>
                                      {item.label}
                                    </div>
                                  </div>
                                ) : null}
                              </div>
                            ))}
                            {AbsExercises.map(item => (
                              <div key={item.id}>
                                {item.selected ? (
                                  <div className='ExercisesText-Att'>
                                    <div className='ExercisesText'>
                                      <div
                                        className='Closeitem'
                                        onClick={this.Closeitem.bind(
                                          this,
                                          item.id
                                        )}
                                      >
                                        +
                                      </div>
                                      {item.label}
                                    </div>
                                  </div>
                                ) : null}
                              </div>
                            ))}
                            {BackExercises.map(item => (
                              <div key={item.id}>
                                {item.selected ? (
                                  <div className='ExercisesText-Att'>
                                    <div className='ExercisesText'>
                                      <div
                                        className='Closeitem'
                                        onClick={this.Closeitem.bind(
                                          this,
                                          item.id
                                        )}
                                      >
                                        +
                                      </div>
                                      {item.label}
                                    </div>
                                  </div>
                                ) : null}
                              </div>
                            ))}
                            {FHExercises.map(item => (
                              <div key={item.id}>
                                {item.selected ? (
                                  <div className='ExercisesText-Att'>
                                    <div className='ExercisesText'>
                                      <div
                                        className='Closeitem'
                                        onClick={this.Closeitem.bind(
                                          this,
                                          item.id
                                        )}
                                      >
                                        +
                                      </div>
                                      {item.label}
                                    </div>
                                  </div>
                                ) : null}
                              </div>
                            ))}
                            {BHExercises.map(item => (
                              <div key={item.id}>
                                {item.selected ? (
                                  <div className='ExercisesText-Att'>
                                    <div className='ExercisesText'>
                                      <div
                                        className='Closeitem'
                                        onClick={this.Closeitem.bind(
                                          this,
                                          item.id
                                        )}
                                      >
                                        +
                                      </div>
                                      {item.label}
                                    </div>
                                  </div>
                                ) : null}
                              </div>
                            ))}
                            {LegsExercises.map(item => (
                              <div key={item.id}>
                                {item.selected ? (
                                  <div className='ExercisesText-Att'>
                                    <div className='ExercisesText'>
                                      <div
                                        className='Closeitem'
                                        onClick={this.Closeitem.bind(
                                          this,
                                          item.id
                                        )}
                                      >
                                        +
                                      </div>
                                      {item.label}
                                    </div>
                                  </div>
                                ) : null}
                              </div>
                            ))}
                            {ShouldersExercises.map(item => (
                              <div key={item.id}>
                                {item.selected ? (
                                  <div className='ExercisesText-Att'>
                                    <div className='ExercisesText'>
                                      <div
                                        className='Closeitem'
                                        onClick={this.Closeitem.bind(
                                          this,
                                          item.id
                                        )}
                                      >
                                        +
                                      </div>
                                      {item.label}
                                    </div>
                                  </div>
                                ) : null}
                              </div>
                            ))}
                          </div>
                          <div className='ListBox-Button-Display'>
                            <button className='Buttons-ListBox'>
                              שמור תוכנית
                            </button>
                            <button
                              onClick={() => this.CloseBox()}
                              className='Buttons-ListBox'
                            >
                              סגור
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                  <form className='Form-Plan'>
                    <div className='Plan-Flex'>
                      {this.state.Muscles.map(muscles => (
                        <div key={muscles.id}>
                          <label>{muscles.label}</label>
                          <input
                            type='checkbox'
                            onChange={this.onChange.bind(this, muscles.id)}
                            checked={muscles.selected}
                          />
                        </div>
                      ))}
                    </div>
                    <div className='Main-Padding'></div>
                    <div className='Main-Border'></div>
                    <div className='Build-Exe-Header'>רשימת תרגילים</div>
                    <div className='Plan-Padding'></div>
                    {Muscles.map(muscle => (
                      <div key={muscle.id}>
                        {muscle.selected && muscle.value === 'Chest' ? (
                          <div className='Display-Button'>
                            {this.state.ChestExercises.map(item => (
                              <div
                                key={item.id}
                                className='Plan-Button'
                                onClick={this.saveChest.bind(this, item.id)}
                              >
                                {item.label}
                              </div>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    ))}
                    {Muscles.map(muscle => (
                      <div key={muscle.id}>
                        {muscle.selected && muscle.value === 'Abs' ? (
                          <div className='Display-Button'>
                            {this.state.AbsExercises.map(item => (
                              <div
                                key={item.id}
                                className='Plan-Button'
                                onClick={this.saveAbs.bind(this, item.id)}
                              >
                                {item.label}
                              </div>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    ))}
                    {Muscles.map(muscle => (
                      <div key={muscle.id}>
                        {muscle.selected && muscle.value === 'Back' ? (
                          <div className='Display-Button'>
                            {this.state.BackExercises.map(item => (
                              <div
                                key={item.id}
                                className='Plan-Button'
                                onClick={this.saveBack.bind(this, item.id)}
                              >
                                {item.label}
                              </div>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    ))}
                    {Muscles.map(muscle => (
                      <div key={muscle.id}>
                        {muscle.selected && muscle.value === 'FrontHand' ? (
                          <div className='Display-Button'>
                            {this.state.FHExercises.map(item => (
                              <div
                                key={item.id}
                                className='Plan-Button'
                                onClick={this.saveFrontHand.bind(this, item.id)}
                              >
                                {item.label}
                              </div>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    ))}
                    {Muscles.map(muscle => (
                      <div key={muscle.id}>
                        {muscle.selected && muscle.value === 'BackHand' ? (
                          <div className='Display-Button'>
                            {this.state.BHExercises.map(item => (
                              <div
                                key={item.id}
                                className='Plan-Button'
                                onClick={this.saveBackHand.bind(this, item.id)}
                              >
                                {item.label}
                              </div>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    ))}
                    {Muscles.map(muscle => (
                      <div key={muscle.id}>
                        {muscle.selected && muscle.value === 'Legs' ? (
                          <div className='Display-Button'>
                            {this.state.LegsExercises.map(item => (
                              <div
                                key={item.id}
                                className='Plan-Button'
                                onClick={this.saveLegs.bind(this, item.id)}
                              >
                                {item.label}
                              </div>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    ))}
                    {Muscles.map(muscle => (
                      <div key={muscle.id}>
                        {muscle.selected && muscle.value === 'Shoulders' ? (
                          <div className='Display-Button'>
                            {this.state.ShouldersExercises.map(item => (
                              <div
                                key={item.id}
                                className='Plan-Button'
                                onClick={this.saveShoulders.bind(this, item.id)}
                              >
                                {item.label}
                              </div>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className='FooterText'>
            <div className='FooterTitle'>Final Project By Eden Elmalich</div>
          </div>
        </div>
      </div>
    );
  }
}
export default BuildPlan;
