import { useState, useEffect, useRef } from 'react';
import UInput from './components/UInput';
import inputData from './data/input-data';
import Button from './components/Button';

function UserInputs() {
    let inputForm = inputData.locations;
    let [inputTo, setInputTo] = useState([])
    let [time, setTime] = useState([])

    function handleFrom(event) {
        let value = event.target.value;
        setInputTo(inputForm.filter(el => el.value !== value));
    }
    function handleTo(event) {
        setTime(inputData.date)
    }
    function handleTime(event) {
    }
    function hanldeSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.target);
        console.log([...formData])
    }
    return (
        <>
        <form className="inputs-container" onSubmit={hanldeSubmit}>
            <UInput placeholder='Please select...1' name='form' id="input-form" label="Nơi xuất phát" type="map" options={inputForm} onChange={handleFrom}/>
            <img src="./ic-twoway.svg" alt="icon-from-to" className="icon ic-16" />
            <UInput disabled placeholder='Please select...2' name='to' id="input-to" label="Nơi đến" type="map" options={inputTo} onChange={handleTo}/>
            <UInput placeholder='Please select...3' name='time' id="input-time" label="Ngày khởi hành" options={time} onChange={handleTime}/>
            <Button />
        </form>
        <div className="date-container"></div>
        </>
    )
}
function UserOutput() {
    return (
        <>
        
        </>
    )
}

export default function Main() {
    return (
        <section className="sc-main">
            <div className="container grid">
                <div className="main-wrap">
                    <UserInputs />
                </div>
                <div className="main-wrap">
                    <UserOutput />
                </div>
            </div>
        </section>
    )
}