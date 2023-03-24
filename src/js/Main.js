import { useState } from "react"
import UserInputs from "./components/UserInputs.js"
import UserOutputs from "./components/UserOutputs.js"

export default function Main() {
    let [api, setApi] = useState('')

    function getApi(fromData) {
        console.log(fromData)
        setApi(fromData)
    }

    return (
        <section className="sc-main">
            <div className="container grid">
                <div className="main-wrap">
                    <UserInputs onSubmit={getApi}/>
                </div>
                <div className="main-wrap">
                    <UserOutputs busData={api}/>
                </div>
            </div>
        </section>
    )
}