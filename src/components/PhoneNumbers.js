import React from 'react'

 const PhoneNumbers = ({numbers}) => {
    const mapNumbers = n => n.map((n) => <p key={n.id}>{n.name}: {n.phone_number}</p>)
    return (
       <div>
           <h3>Numbers</h3>
           {mapNumbers(numbers)}
       </div> 
    )
} 

export default PhoneNumbers