import React, { useState } from 'react';
import './Css-files/Task.css';
import { useLocation } from 'react-router-dom';


export default function PersonDetails({handleForm,handleSubmit}) {


const location = useLocation()
console.log(location)
const {formData} = location.state

  return (
    <>
      <div className='parent-container'>
        <h1 className='h-pDetail'>PersonDetails</h1>
        <div className='content-wrapper'>
        <div className='left parent-det'>
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
                // readOnly
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
            <button style={{ width: '320px' }}>update</button>
          </form>
        </div>
        </div>
      </div>
    </>
  );
}
