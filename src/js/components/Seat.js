import { useState } from 'react';
import classNames from 'classnames';

export default function Seat(props) {

    let [isSelected, setIsSelected] = useState(false)

    function handleClick() {
        setIsSelected(prev => !prev)    
    }

    return (
        <>
            <a
                href='#' 
                className={classNames('txt', '--16', 'seat', {disabled: !props.isSelectable}, {selected: isSelected})} 
                onClick={handleClick}
            >
                {props.name}
            </a>
        </>
    )
}

