import React, { useState } from 'react'
import { UC, LC, NC, SC } from '../Data/PassData.jsx'
import './Css-files/RandomPasswordGen.css'


export default function RandomPasswordGen() {

    let [uUpperCase, setuUpperCase] = useState(false)
    let [uLowerCase, setuLowerCase] = useState(false)
    let [uNumber, setuNumber] = useState(false)
    let [uSymbol, setuSymbol] = useState(false)
    let [passLength, setpassLength] = useState(10)
    let [genratedPass, setGeneratedPass] = useState('')

    let GeneratePass = () => {
        if (uUpperCase || uLowerCase || uNumber || uSymbol) {
            let finalPass = ''
            var charSet = ''
            if (uUpperCase) charSet += UC     // concate
            if (uLowerCase) charSet += LC
            if (uNumber) charSet += NC
            if (uSymbol) charSet += SC


            for (let i = 0; i < passLength; i++) {
                {

                    finalPass += charSet.charAt(Math.floor(Math.random() * charSet.length))

                }
                console.log(finalPass)
            }
            setGeneratedPass(finalPass)
        }
        else {
            alert('Please select atleast 1')
        }
    }

    return (
        <div>
            <div className="parent-container">
                <div className="passwordBox">
                    <h3>Password Generator</h3>
                    <div className="passwordbtn-wrapper">
                        <input type="text" readOnly value={genratedPass} />
                        <button onClick={() => navigator.clipboard.writeText(genratedPass)}
                        >Copy</button>
                    </div>
                    <div className="password-length box">
                        <label>  Password Length</label>
                        <input type="number" value={passLength} onChange={(e) => setpassLength(e.target.value)} max={20} min={1} />
                    </div>
                    <div className="password-length">
                        <label> Include Upper Case letter</label>
                        <input type="checkbox" onClick={() => setuUpperCase(!uUpperCase)} checked={uUpperCase} />
                    </div>
                    <div className="password-length">
                        <label>   Include lower Case letter</label>
                        <input type="checkbox" onClick={() => setuLowerCase(!uLowerCase)} checked={uLowerCase} />
                    </div>
                    <div className="password-length">
                        <label>  Include Number</label>
                        <input type="checkbox" onClick={() => setuNumber(!uNumber)} checked={uNumber} />
                    </div>
                    <div className="password-length">
                        <label>  Include Symbols</label>
                        <input type="checkbox" onClick={() => setuSymbol(!uSymbol)} checked={uSymbol} />
                    </div>
                    <div className='generatePass'>
                        <button onClick={GeneratePass}>Generate password</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
