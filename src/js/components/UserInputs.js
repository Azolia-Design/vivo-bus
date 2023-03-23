import { useState, useEffect, useRef } from 'react';
import UInput from './UInput';
import inputData from '../data/input-data';
import Button from './Button';

export default function UserInputs(props) {
    let inputForm = inputData.locations;
    let [inputTo, setInputTo] = useState([])
    let [time, setTime] = useState([])
    let [disabledTo, setDisabledTo] = useState(true)
    let [disabledTime, setDisabledTime] = useState(true)

    function handleFrom(event) {
        let value = event.target.value;
        setInputTo(inputForm.filter(el => el.value !== value));
        setDisabledTo(false)
    }
    function handleTo(event) {
        setTime(inputData.date)
        setDisabledTime(false)
    }
    function handleTime(event) {
    }
    function hanldeSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.target);
        
        console.log(formData)
        props.onSubmit(event, formData)
    }
    return (
        <>
        <form className="inputs-container" onSubmit={hanldeSubmit}>
            <UInput placeholder='Vui lòng chọn điểm xuất phát' name='form' id="input-form" label="Nơi xuất phát" type="map" options={inputForm} onChange={handleFrom}/>
            <img src="./ic-twoway.svg" alt="icon-from-to" className="icon ic-16" />
            <UInput disabled={disabledTo} placeholder='Vui lòng chọn điểm đến' name='to' id="input-to" label="Nơi đến" type="map" options={inputTo} onChange={handleTo}/>
            <UInput disabled={disabledTime} placeholder='Vui lọng chọn ngày khởi hành' name='time' id="input-time" label="Ngày khởi hành" options={time} onChange={handleTime}/>
            <Button onSubmit={hanldeSubmit}/>
        </form>
        <div className="date-container"></div>
        </>
    )
}