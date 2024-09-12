import React, { useState } from 'react'
import './Css-files/FaqPropDrilling.css'
import { questions } from '../Data/faqQuestions'

export default function Faq() {

    const [currentId, SetCurrentId] = useState(questions[0])
    let item = questions.map((faqitem, i) => {

        let itemDetails = {
            faqitem,
            currentId,
            SetCurrentId
        }
        return ( // passing object as a props to child
            <FaqItems itemDetails={itemDetails} key={i} />
        )
    })
    return (
        <div>
            <h1 style={{textAlign: 'center', margin: '30px'}}> Frequently Asked Questions</h1>
            {item}
        </div>
    )
}

function FaqItems({ itemDetails }) {  // child component

    let { faqitem, currentId, SetCurrentId } = itemDetails // destruct
    return (
        <div className='faqOuter'>
            <div className='faqItems'> 
                {/* sendind data from child to parent */}
                <h2 onClick={()=>SetCurrentId(faqitem.id)} >{faqitem.question}</h2>
                <div>
                    <p className={currentId === faqitem.id ? 'activeAns' : ''}>{faqitem.answer}</p>
                </div>
            </div>
        </div>
    )
}
