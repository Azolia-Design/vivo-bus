export default function UInput(props) {
    let locations = [];
    locations = props.data.map(location => 
        <option key={location.id} id={location.id} value={location.value}>{location.value}</option>
    );
    function handleFocus(event) {
        event.target.classList.add('active')
    }
    function handleBlur(event) {
        event.target.classList.remove('active')
    }
    return (
        <div className="input-group">
            <label htmlFor="" className="txt --16">
                {props.label}
            </label>
            <div className={props.data.length > 0 && props.data[0].id !== 'blank' ? "select-wrap": "select-wrap disable"}>
                <img src={props.type == 'map' ? "/ic-map.svg" : "/ic-calendar.svg"} alt="icon" className="ic-head"/>
                <select className="txt --16" name="from" id={props.id} onFocus={handleFocus} onBlur={handleBlur} onChange={props.onChange}>
                    {locations}
                </select>
                <img src="/ic-drop.svg" alt="icon-dropdown" className="ic-tail" />
            </div>
        </div>
    )
}