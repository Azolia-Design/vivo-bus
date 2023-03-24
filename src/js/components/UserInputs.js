import { useState} from 'react';
import UInput from './UInput';
import inputData from '../data/input-data';
import Button from './Button';
import { parseFromData } from '../utils';

export default function UserInputs(props) {
    let inputFrom = inputData.locations;
    let [inputTo, setInputTo] = useState([])
    let [time, setTime] = useState([])
    let [disabledTo, setDisabledTo] = useState(true)
    let [disabledTime, setDisabledTime] = useState(true)

    function handleFrom(event) {
        let value = event.target.value;
        setInputTo(inputFrom.filter(el => el.value !== value));
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
        props.onSubmit(parseFromData(formData))
    }
    return (
        <>
        <form className="inputs-container" onSubmit={hanldeSubmit}>
            <UInput placeholder='Vui lòng chọn điểm xuất phát' name='from' id="input-from" label="Nơi xuất phát" type="map" options={inputFrom} onChange={handleFrom}/>
            <img src="./ic-twoway.svg" alt="icon-from-to" className="icon ic-16" />
            <UInput disabled={disabledTo} placeholder='Vui lòng chọn điểm đến' name='to' id="input-to" label="Nơi đến" type="map" options={inputTo} onChange={handleTo}/>
            <UInput disabled={disabledTime} placeholder='Vui lọng chọn ngày khởi hành' name='time' id="input-time" label="Ngày khởi hành" options={time} onChange={handleTime}/>
            <Button onSubmit={hanldeSubmit}/>
        </form>
        <div className="date-container"></div>
        </>
    )
}