import Header from "./Components/Header"
import Form from "./Components/Form"
import PatientList from "./Components/PatientList"
import { useState } from 'react'
import { useEffect } from "react"
function App() {

  const [patients, setPatients] = useState(JSON.parse(localStorage.getItem('patients')) ?? [])
  const [patient , setPatient] = useState({})


  //Get items to local storage
  useEffect(() => {

    localStorage.setItem('patients', JSON.stringify(patients))
  }, [patients])


  const deletePatient = (id) =>{
    const updatedPatients = patients.filter(patient => patient.id !== id)
    setPatients(updatedPatients)
  }
  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <div className="mt-12 md:flex">
        <Form 
        setPatients = {setPatients}
        patients = {patients}
        patient = {patient}
        setPatient = {setPatient}
        />
        <PatientList
          patients = {patients}
          setPatient  = {setPatient} 
          deletePatient = {deletePatient}
        />
      </div>
      
    </div>
    
  )
}

export default App
