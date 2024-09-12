import React, { useState } from 'react'
import './Css-files/Wheather.css'
import cloud from '../images/Clouds.png'
import clear from '../images/Clear.png'
import error from '../images/error.png'
import rain from '../images/Rain.png'
import mist from '../images/mist.png'
import { toast, ToastContainer } from 'react-toastify'

export default function Wheather() {

    let [userSerach, setUserSerach] = useState('')
    let [showData, setShowData] = useState()

    const API_KEY = 'a8d5471760324a472e492106f8817414'
    const API = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'

    let handleSearch = (e) => {
        setUserSerach(e.target.value)
        console.log(userSerach)
    }
    const API_fetch = async () => {
        if (userSerach.trim() === '') {
            toast.error("Ente city name")
        }
        try {
            const get = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userSerach}&appid=${API_KEY}&units=metric`)
            const JsonData = await get.json()
            if (JsonData.cod === '404') {
                alert('city not found')
            }
            else {
                console.log(JsonData)
                setShowData(JsonData)
                setUserSerach('')
            }

        } catch (error) {
            console.error("Error while fetching data")
        }

    }
    return (

        <div className="parent-container">
            <ToastContainer></ToastContainer>
            <div className="wheather-wrapper">
                <div className="search-wrapper">
                    <input type="text" placeholder='Enter City, Country' value={userSerach} onChange={handleSearch} />
                    <i className="fa-solid fa-magnifying-glass" onClick={API_fetch}></i>
                </div>
                {
                    showData && showData.weather ?
                        <div className="block">
                            <h1>{showData.name}</h1>
                            <img src={showData.weather[0].main == 'Clouds' ? cloud : ''} />
                            <img src={showData.weather[0].main == 'Rain' ? rain : ''} />
                            <img src={showData.weather[0].main == 'Clear' ? clear : ''} />
                            <img src={showData.weather[0].main == 'Mist' ? mist : ''} />
                            <h1>{Math.trunc(showData.main.temp)}°C</h1>
                            <h1>{showData.weather[0].description}</h1>

                        </div>
                        :
                        ''
                }

            </div>

        </div>
    )
}
