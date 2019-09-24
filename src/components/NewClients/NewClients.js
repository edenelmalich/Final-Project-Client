import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './NewClients.css';

const Nclients = () => {
  const Time = [
    {
      label: 'חודש',
      id: 1,
      selected: true
    },
    {
      label: 'שלושה חודשים',
      id: 2,
      selected: false
    },
    {
      label: 'שנה',
      id: 3,
      selected: false
    }
  ];
  const [TimeData, setTime] = useState(Time);
  const Type = [
    { label: 'רגיל', id: 1, selected: true },
    { label: 'סטודנט', id: 2, selected: false }
  ];
  const [TypeData, setType] = useState(Type);
  const Payment = [
    { label: 'אשראי', id: 1, selected: true },
    { label: 'מזומן', id: 2, selected: false }
  ];
  const [PaymentData, setPayment] = useState(Payment);

  const onChange = (e, id) => {
    if (e.target.value === 'TypeData') {
      setType(
        TypeData.map(item => {
          if (item.id === id && item.selected === false) {
            return { ...item, selected: !item.selected };
          } else {
            return { ...item, selected: false };
          }
        })
      );
    }
    if (e.target.value === 'TimeData') {
      setTime(
        TimeData.map(item => {
          if (item.id === id && item.selected === false) {
            return { ...item, selected: !item.selected };
          } else {
            return { ...item, selected: false };
          }
        })
      );
    }
    if (e.target.value === 'PaymentData') {
      setPayment(
        PaymentData.map(item => {
          if (item.id === id && item.selected === false) {
            return { ...item, selected: !item.selected };
          } else {
            return { ...item, selected: false };
          }
        })
      );
    }
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
                <form action='#' className='Nclient-FormAtt'>
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
                      required='required'
                    />
                    <input type='text' name='Phone' placeholder='טלפון' />
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
