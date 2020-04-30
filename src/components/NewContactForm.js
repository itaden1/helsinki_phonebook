import React, {useState} from 'react'

const NewContactForm = ({handleSubmit}) => {

    const [nameText, updateNameText] = useState("")
    const [numberText, updateNumberText] = useState("")

    const handleTextChange = (event) => {
        if (event.target.name === "name"){
            updateNameText(event.target.value)
        }
        else if (event.target.name === "number"){
            updateNumberText(event.target.value)
        }
      }

    return (
        <div>
            <h3>add a new contact</h3>
            <input name={"name"} onChange={handleTextChange} value={nameText}></input><br />
            <input name={"number"} onChange={handleTextChange} value={numberText}></input><br />
            <button onClick={(e) => handleSubmit(e, nameText, numberText)}>Submit</button>
        </div>
    )
}

export default NewContactForm