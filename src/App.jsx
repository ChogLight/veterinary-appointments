import Header from "./Components/Header"
import Form from "./Components/Form"
import PatientList from "./Components/PatientList"
import { useState } from 'react'
function App() {

  const [patients, setPatients] = useState([])
  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <div className="mt-12 md:flex">
        <Form 
        setPatients = {setPatients}
        patients = {patients}
        />
        <PatientList
          patients = {patients}  
        />
      </div>
      
    </div>
    
  )
}

export default App
