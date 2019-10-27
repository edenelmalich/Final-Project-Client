import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './NewClients.css';

const Nclients = () => {
  // Data
  const Time = [
    {
      label: 'חודש',
      value: 1,
      id: 1,
      selected: false
    },
    {
      label: 'שלושה חודשים',
      value: 3,
      id: 2,
      selected: false
    },
    {
      label: 'שנה',
      value: 12,
      id: 3,
      selected: false
    }
  ];
  const Type = [
    { label: 'רגיל', id: 1, value: 200, selected: false },
    { label: 'סטודנט', id: 2, value: 150, selected: false }
  ];
  const Payment = [
    { label: 'אשראי', id: 1, value: 'credit', selected: false },
    { label: 'מזומן', id: 2, value: 'cash', selected: false }
  ];
  // useState
  const [TypeData, setType] = useState(Type);
  const [TimeData, setTime] = useState(Time);
  const [PaymentData, setPayment] = useState(Payment);
  const [CalculationData, SetCalculation] = useState(0);
  const [CalcType, SetCalcType] = useState({});
  const [CalcTime, SetCalcTime] = useState({});
  const [CalcPayment, setCalcPayment] = useState({});
  // Functions
  const onChange = (e, id) => {
    if (e.target.value === 'TypeData') {
      setType(
        TypeData.map(type => {
          if (type.id === id && type.selected === false) {
            SetCalcType({ CalcType: type.value });
            return { ...type, selected: true };
          }
          return { ...type, selected: false };
        })
      );
    }
    if (e.target.value === 'TimeData') {
      setTime(
        TimeData.map(time => {
          if (time.id === id && time.selected === false) {
            SetCalcTime({ CalcTime: time.value });
            return { ...time, selected: true };
          }
          return { ...time, selected: false };
        })
      );
    }
    if (e.target.value === 'PaymentData') {
      setPayment(
        PaymentData.map(payment => {
          if (payment.id === id && payment.selected === false) {
            setCalcPayment({ CalcPayment: payment.value });
            return { ...payment, selected: true };
          }
          return { ...payment, selected: false };
        })
      );
    }
  };
  const onSubmit = e => {
    e.preventDefault();
    SetCalculation(CalcType.CalcType * CalcTime.CalcTime);
  };
  return (
    <div className='Nclients'>
      <Navbar />
      <div className='Page-Container'>
        <div className='Pages-Content'>
          <div className='Att-PagesContent'>
            <div className='PagesContainer'>
              <div className='FormClient'>
                <header className='Header-Client'>
                  <h3>הוספת לקוח חדש</h3>
                </header>
                <div className='Main-Padding'></div>
                <form
                  action='#'
                  className='Nclient-FormAtt'
                  onSubmit={e => onSubmit(e)}
                >
                  <div className='Form-Flex'>
                    <input
                      type='text'
                      name='firstname'
                      placeholder='שם פרטי'
                      required
                    />
                    <input
                      type='text'
                      name='lastname'
                      placeholder='שם משפחה'
                      required
                    />
                    <input
                      type='text'
                      name='id'
                      placeholder='תעודת זהות'
                      required
                    />
                    <input
                      type='text'
                      name='Phone'
                      placeholder='טלפון'
                      required
                    />
                  </div>
                  <div className='Main-Padding'></div>
                  <div className='Main-Border'></div>
                  <label>סוג המנוי:</label>
                  {TypeData.map(item => (
                    <div className='Radio-Text' key={item.id}>
                      {item.label}
                      <input
                        type='radio'
                        value={'TypeData'}
                        onChange={e => onChange(e, item.id)}
                        checked={item.selected}
                      />
                    </div>
                  ))}
                  <div className='Main-Border'></div>
                  <label>תקופת מנוי:</label>
                  {TimeData.map(item => (
                    <div className='Radio-Text' key={item.id}>
                      {item.label}
                      <input
                        type='radio'
                        value={'TimeData'}
                        onChange={e => onChange(e, item.id)}
                        checked={item.selected}
                      />
                    </div>
                  ))}
                  <div className='Main-Border'></div>
                  <label>יגבה תשלום חד פעמי בעלות של 20 ₪ עבור צ'יפ.</label>
                  <div className='Main-Border'></div>
                  <label>אמצעי תשלום:</label>
                  {PaymentData.map(item => (
                    <span className='Radio-Text' key={item.id}>
                      {item.label}
                      <input
                        type='radio'
                        value={'PaymentData'}
                        onChange={e => onChange(e, item.id)}
                        checked={item.selected}
                      />
                    </span>
                  ))}
                  <div className='Main-Border'></div>
                  <label>סך הכל לתשלום:</label>
                  <span className='calculation'>{CalculationData} ₪</span>
                  <div className='Main-Border'></div>
                  <div className='Main-Padding'></div>
                  <input type='submit' name='send' value='הוסף לקוח חדש' />
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
};
export default Nclients;
