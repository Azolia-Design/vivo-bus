import { useState } from "react"

export default function UInput(props) {
    const [value, setValue] = useState('')
    const hasValue = !!value;
    function handleFocus(event) {
        event.target.classList.add('active')
    }
    function handleBlur(event) {
        event.target.classList.remove('active')
    }
    function handleChange(event) {
        setValue(event.target.value);
        props.onChange(event)
    }
    return (
        <div className="input-group">
            <label htmlFor="" className="txt --16">
                {props.label}
            </label>
            <div className="select-wrap">
                <img src={props.type == 'map' ? "/ic-map.svg" : "/ic-calendar.svg"} alt="icon" className="ic-head"/>
                <select disabled={props.disabled} value={value} className="txt --16" id={props.id} onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange} name={props.name}>
                    {!hasValue && <option id='none' value='' disabled>{props.placeholder}</option>}
                    {props.options.map((opt) => <option key={opt.id} id={opt.id} value={opt.value}>{opt.value || 'Please select...'}</option>)}
                </select>
                <img src="/ic-drop.svg" alt="icon-dropdown" className="ic-tail" />
            </div>
        </div>
    )
}