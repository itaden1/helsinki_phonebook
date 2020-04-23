import React, {useState, useEffect} from "react";
import Filter from "./components/Filter"
import NewContactForm from "./components/NewContactForm"
import PhoneNumbers from "./components/PhoneNumbers" 
import clientService from "./lib/client"

function App() {
  const [numbers, updateNumbers] = useState([])


  useEffect(() => {
    clientService.getNumbers().then((r) => {
      updateNumbers(r)
    })
  }, [])

  const addContact = (event, name, number) => {
    clientService.createNumber(name, number)
      .then((n) => {
        const updatedNumbers = numbers.concat(n)
        updateNumbers(updatedNumbers)
      })
  }

  return (
    <div className="App">
      <h1>Phone Book</h1>
      <Filter />
      <NewContactForm handleSubmit={addContact} />
      <PhoneNumbers numbers={numbers} />
    </div>
  );
}

export default App;
