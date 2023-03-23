import UserInputs from "./components/UserInputs.js"

function UserOutput() {
    return (
        <>
        
        </>
    )
}

function getApi(event, fromData) {
    console.log(fromData)
}

export default function Main() {
    return (
        <section className="sc-main">
            <div className="container grid">
                <div className="main-wrap">
                    <UserInputs onSubmit={getApi}/>
                </div>
                <div className="main-wrap">
                    <UserOutput />
                </div>
            </div>
        </section>
    )
}