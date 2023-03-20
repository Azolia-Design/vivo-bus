import { useState } from 'react';
import UInput from './components/UInput';
import inputData from './data/input-data';
import Button from './components/Button';

function UserInputs() {
    let inputForm = inputData.locations;
    let [inputTo, setInputTo] = useState([{
        id: 'blank',
        value: 'Vui lòng chọn nơi xuất phát'
    }])
    let [fromTo, setFromTo] = useState({form: '', to: ''})
    let [time, setTime] = useState([{
        id: 'blank',
        value: 'Thời gian - Ngày khởi hành'
    }])
    

    function handleChange(event) {
        let inputId = event.target.id;
        if (inputId === 'input-form') {
            setInputTo(inputForm.filter(el => el.value != event.target.value))
        }
        setFromTo({form: document.querySelector('#input-form').value, to: document.querySelector('#input-to').value})
        setTime(inputData.date)
    }
    return (
        <>
        {console.log(fromTo)}
        <div className="inputs-container">
            <UInput id="input-form" label="Nơi xuất phát" type="map" data={inputForm} onChange={handleChange}/>
            <img src="./ic-twoway.svg" alt="icon-from-to" className="icon ic-16" />
            <UInput id="input-to" label="Nơi đến" type="map" data={inputTo} onChange={handleChange}/>
            <UInput id="input-time" label="Ngày khởi hành" data={time}/>
            <Button />
        </div>
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