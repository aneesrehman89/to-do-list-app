import React, { useState } from 'react'
import './Css-files/ControlledComponent.css'
import { ToastContainer, toast } from 'react-toastify';
import Table from 'react-bootstrap/Table';
export default function ControlledComponent() {

  // let [userName, setUserName] = useState('') 
  // let [userpassword, setUserPassword] = useState('')

  // let formHandler = (e) =>{
  //       e.preventDefault()
  //       console.log(userName)
  //       console.log(userpassword)
  // }

  // Form handling state, state to save form data
  let [formData, setformData] = useState(
    {
      uname: '',
      uemail: '',
      uphone: '',
      uMessage: '',
      index: ''  // 1
    }
  );

  let handleData = (e) => {
    let oldData = { ...formData }    // spread operator
    let InputName = e.target.name // uname
    let inputValue = e.target.value // anees
    oldData[InputName] = inputValue;
    setformData(oldData)
  }
  // Create new array object state
  let [changeData, setchangeData] = useState([])

  let handleSubmit = (e) => {

    let currentUserFormData = {
      uname: formData.uname,      // New form data entered by user (object)
      uemail: formData.uemail,
      uphone: formData.uphone,
      uMessage: formData.uMessage,
    }
    if (formData.index === '') {    // this is for save 
      let userfilteredData = changeData.filter((v) => v.uemail == formData.uemail || v.uphone == formData.uphone)
      if (userfilteredData.length == 1) {
        toast.error('Email or Phone Number already exist')
      }
      else {
        let oldUserData = [...changeData, currentUserFormData]; // old Array + new array obj
        setchangeData(oldUserData)
        // console.log(oldUserData)
        setformData(
          {
            uname: '',
            uemail: '',
            uphone: '',
            uMessage: '',
            index: ''
          }
        )
      }
    }
    else { // this is for Update


      let editIndex = formData.index;  //  Update row index
      alert(editIndex)
      let userfilteredData = changeData.filter((v, i) => (v.uemail == formData.uemail || v.uphone == formData.uphone) && i != editIndex)
      if (userfilteredData.length == 0) {
        let oldData = changeData;
        // [{},{}] = [{},{}]
        oldData[editIndex]['uname'] = formData.uname;
        oldData[editIndex]['uphone'] = formData.uphone;
        oldData[editIndex]['uemail'] = formData.uemail;
        oldData[editIndex]['uMessage'] = formData.uMessage;

        console.log(oldData)
        setchangeData(oldData);
        setformData({
          uname: '',
          uemail: '',
          uphone: '',
          uMessage: '',
          index: ''
        })
      }
      else {
        toast.error('Email or Phone Number already exist')
      }
    }
    e.preventDefault()
  }
  // to Delete row
  let deleteRow = (indexNumber) => {
    let newRows = changeData.filter((v, i) => i != indexNumber)
    setchangeData(newRows);
    // console.log(newRows)
  }
  // to Update row || manage index number and inputing data in form
  let UpdateData = (indexNumber) => {
    let oldRow = changeData.filter((v, i) => i == indexNumber)[0]   // filter always return a new array
    oldRow['index'] = indexNumber
    setformData(oldRow)
  }
  return (

    <div className="container parentContainer">
      <ToastContainer />
      <div className="row">
        <h1 style={{ textAlign: 'center' }} className='mb-5'>Controlled Component</h1>
        <div className="col-lg-6">

          {changeData.length}
          <form onSubmit={handleSubmit}>
            <label>name</label>
            <input type="text" onChange={handleData} value={formData.uname} name='uname' className='form-control' />
            <label>Email</label>
            <input type="text" onChange={handleData} value={formData.uemail} name='uemail' className='form-control' />
            <label>Phone</label>
            <input type="text" onChange={handleData} value={formData.uphone} name='uphone' className='form-control' />
            <label>Message</label>
            <textarea className='form-control' onChange={handleData} value={formData.uMessage} name='uMessage' id='' rows='3' />
            <button className="btn btn-primary"  >
              {
                formData.index !== "" ? 'Update' : 'save'
              }
            </button>
          </form>
        </div>
        <div className="col-lg-6">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>

              {changeData.length >= 1 ?
                changeData.map((obj, i) => {
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{obj.uname}</td>
                      <td>{obj.uemail}</td>
                      <td>{obj.uphone}</td>
                      <td>{obj.uMessage}</td>
                      <td>
                        <button onClick={() => deleteRow(i)}>delete</button>
                        <button onClick={() => UpdateData(i)}>Update</button>
                      </td>
                    </tr>
                  )
                })
                :
                <tr>
                  <td colSpan={6}>No data Found</td>
                </tr>
              }
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  )
}
