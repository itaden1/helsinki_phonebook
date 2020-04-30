import React, {useState, useEffect} from "react";
import Filter from "./components/Filter"
import NewContactForm from "./components/NewContactForm"
import PhoneNumbers from "./components/PhoneNumbers" 
import clientService from "./lib/client"

function App() {
  const [numbers, updateNumbers] = useState([])
  const [filterValue, updateFilterValue] = useState("")

  useEffect(() => {
    clientService.getNumbers().then((r) => {
      updateNumbers(r)
    })
  }, [])

  const filterNumbers = () => {
    const filtered = numbers.filter((n) => {
      const filterStr = filterValue.toUpperCase()
      const nameStr = n.name.toUpperCase()
      return nameStr.includes(filterStr);
    })
    return filtered
  }

  const addContact = (event, name, number) => {
    const existing_name = numbers.filter((n) => n.name === name)
    if (existing_name.length > 0){
      const decision = window.confirm(`are you sure you want update ${name}'s number to ${number}`)
      if (!decision){
        return
      }
      const existing_id = existing_name[0].id
      clientService.updateNumber(existing_id, name, number)
        .then((n) => {
          const updatedNumbers = numbers.map((num) => {
            console.log(num.id === n.id ? n: num)
            return num.id === n.id ? n: num
          })
          console.log(updatedNumbers)
          updateNumbers(updatedNumbers)})
    }
    else {
      clientService.createNumber(name, number)
        .then((n) => {
          const updatedNumbers = numbers.concat(n)
          updateNumbers(updatedNumbers)
        })
      }
  }

  const deleteContact = (id) => {
    const decision = window.confirm("are you sure you want to delete contact: ", id)
    if (decision){
      clientService.deleteNumber(id)
      .then((r) => {
        const updatedList = numbers.filter((n) => n.id != id)
        updateNumbers(updatedList)
      })
    }
}
  const updateFilter = (e) => {
    updateFilterValue(e.target.value)
  }

  return (
    <div className="App">
      <h1>Phone Book</h1>
      <Filter filterCallback={updateFilter} filterText={filterValue}/>
      <NewContactForm handleSubmit={addContact} />
      <PhoneNumbers numbers={filterNumbers()} deleteMethod={deleteContact} />
    </div>
  );
}

export default App;
