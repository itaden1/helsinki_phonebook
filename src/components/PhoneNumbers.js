import React from 'react'
import Button from './Button'
import clientService from "../lib/client"


 const PhoneNumbers = ({numbers, deleteMethod}) => {

    const mapNumbers = (n) => {
        return (n.map((n) => {
            return (
                <div key={n.id}>
                    <p>{n.name}: {n.phone_number}
                    <Button callback={() => deleteMethod(n.id)} text={"delete"} />
                    </p>
                </div>
                )
            })
        )
    }

    return (
       <div>
           <h3>Numbers</h3>
           {mapNumbers(numbers)}
       </div> 
    )
} 

export default PhoneNumbers