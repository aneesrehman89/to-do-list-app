import React, { useState } from 'react'
import  './Css-files/Tabbing.css'
import { tabs } from '../Data/Tabs'

export default function Tabbing() {

    let [activeTab, setActiveTab] = useState(0) // return index
    let [activeContent, setActiveContent] = useState(tabs[0]) // return index [0] object data

    let changeData = (index) => {
        setActiveTab(index)
        setActiveContent(tabs[index])
    }
    return (
        <div>
            <div className="tabOuter">
                <h1 style={{ textAlign: 'left' }}>These are our ambitions</h1>
                <div className="listOuter">
            {tabs.map((tabItems, index) => {
                return (
                <div>
                    <ul>
                        <li >
                            <button onClick={()=>changeData(index)} className={activeTab == index ? 'activeButton' : ''}>{tabItems.Title}</button> </li>
                    </ul>
                </div>
                )
            })}
                </div>
                <p>{activeContent.description}</p>
            </div>
        </div>
    )
}
