import inputData from "../data/input-data"
import Seat from "./Seat"

export default function UserOutput(props) {
    if (!props.busData) {
        return (
            <>
                <Seat id="01" name="A15" isSelectable={true} />
            </>
        )
    } else {
        return
    }
    
}