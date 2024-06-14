import { useState } from "react"

const HooksUseState = () => {

    //1- useState
    let userName= "Rafael"

    const [name, setName] = useState("Conrado")

    const changeNames = () => {

        userName = "Rafael Conrado"

        setName("Rafael Conrado de Souza")
    }

    return (
        <div>
            {/*1- useState */}
            <h2>useState</h2>
            <p>Variável: {userName}</p>
            <p>useState: {name}</p>
        </div>
    )
}

export default HooksUseState
