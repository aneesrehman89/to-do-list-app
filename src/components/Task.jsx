import React, { useState } from 'react';
import './Css-files/Task.css';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import PersonDetails from './PersonDetails';

export default function Task() {
  const navigate = useNavigate();
  let [formData, setformData] = useState({
    uName: '',
    uGender: '',
    uMedals: 0,
  });
  let [submitData, setsubmitData] = useState([]);
  let handleForm = (e) => {
    let { name, value } = e.target;
    if (name === 'uMedals') {
      value = parseInt(value);

      if (value <= 0) {
        value = 0;
      }
      if (value > 20) {
        value = formData.uMedals;
      }
    }
    setformData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  let handleSubmit = (e) => {
    let newUserData = {
      // new array
      uName: formData.uName,
      uGender: formData.uGender,
      uMedals: formData.uMedals,
    };
    if (newUserData.uName === '' || newUserData.uGender === '') {
      toast.error('Please fill all field');
    } else {
      let userSubmitData = [...submitData, newUserData]; // old array + new array
      let ans = submitData.filter(
        (value, i) => value.uName === newUserData.uName
      );
      // console.log(ans);
      if (ans.length > 0 && ans[0].uName === newUserData.uName) {
        toast.error('Name Already exist');
      } else {
        setsubmitData(userSubmitData);
        console.log(userSubmitData);
        setformData({
          uName: '',
          uGender: '',
          uMedals: 0,
        });
        toast.success('Record Saved Successfully !');
      }
    }
    e.preventDefault();
  };
  // delete Row
  let handleDeletRow = (indexNumber) => {
    let deleteRow = submitData.filter((v, i) => i != indexNumber);
    setsubmitData(deleteRow);
    // console.log(deleteRow);
  };
  // handleUpdate
  let handleUpdate = (indexNumber) => {
    let updatedRow = submitData[indexNumber];
    // console.log(updatedRow)
    setformData({
      uName: updatedRow.uName,
      uGender: updatedRow.uGender,
      uMedals: updatedRow.uMedals,
    });
    navigate('/PersonDetails', {state : {formData : updatedRow }} );
  };
  <PersonDetails
    handleForm={handleForm}
  />;
  return (
    <div className='parent-container'>
      <ToastContainer></ToastContainer>
      <div className='content-wrapper'>
        <div className='left'>
          <form className='form-wrapper' onSubmit={handleSubmit}>
            <div className='name-wrapper'>
              <label>Name</label>
              <input
                type='text'
                name='uName'
                onChange={handleForm}
                value={formData.uName}
                pattern='[A-Za-z]*'
                style={{ padding: ' 5px' }}
              />
            </div>
            <div className='toogle-wrapper'>
              <label className='lbl-gen'> Gender </label>
              <div className='wrapper'>
                <div className='custom-input'>
                  <input
                    type='radio'
                    id='female'
                    name='uGender'
                    value='female'
                    onChange={handleForm}
                    checked={formData.uGender === 'female'}
                  />
                  <label htmlFor='female'>Female</label>
                </div>

                <div className='custom-input'>
                  <input
                    type='radio'
                    id='male'
                    name='uGender'
                    value='male'
                    onChange={handleForm}
                    checked={formData.uGender === 'male'}
                  />
                  <label htmlFor='male'>Male</label>
                </div>
              </div>
            </div>
            <div className='medal-wrapper'>
              <label className='medal'>Medal</label>
              <div className='minus' name='minus'>
                <button
                  type='button'
                  name='uMedals'
                  onClick={handleForm}
                  value={formData.uMedals - 1}
                >
                  -
                </button>
              </div>
              <input
                type='text'
                name='uMedals'
                readOnly
                value={formData.uMedals}
                style={{ textAlign: 'center' }}
              />
              <div className='plus'>
                <button
                  type='button'
                  max='20'
                  name='uMedals'
                  onClick={handleForm}
                  value={formData.uMedals + 1}
                >
                  +
                </button>
              </div>
            </div>
            <button style={{ width: '320px' }}>Add</button>
          </form>
        </div>
        <div className='right-parent'>
          <h1>Details</h1>
          {submitData.length >= 1
            ? submitData.map((obj, i) => {
                return (
                  <div className='item-wrapper' key={i}>
                    <input
                      type='text'
                      className='heading-input'
                      readOnly
                      value={obj.uName}
                    />
                    <button
                      className='update-btn'
                      onClick={() => handleUpdate(i)}
                    >
                      update
                    </button>
                    <span
                      className='cross-icon'
                      onClick={() => handleDeletRow(i)}
                    >
                      &times;
                    </span>

                    <div className='small-item-wrapper'>
                      <input
                        type='text'
                        className='item'
                        value={obj.uGender}
                        readOnly
                      />
                      <input
                        type='text'
                        className='item'
                        value={obj.uMedals}
                        readOnly
                      />
                    </div>
                  </div>
                );
              })
            : ''}
        </div>
      </div>
    </div>
  );
}
