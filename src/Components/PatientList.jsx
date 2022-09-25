import { useEffect } from "react"
import Patient from "./Patient"
function PatientList({patients, setPatient, deletePatient}) {


 

  return (
    <div className="overflow-y-scroll md:w-1/2 lg:3/5 md:h-screen">

      <h2 className="font-black text-3xl text-center">Patient list</h2>


      {
        patients.length == 0?
        <p className="text-center text-lg mt-5 mb-10">
          
        Add patients {''}
        <span className="text-indigo-600 font-bold">
          and they will show here
        </span>
      </p>:
      <p className="text-center text-lg mt-5 mb-10">
          
      Order your {''}
      <span className="text-indigo-600 font-bold">
        patients and appointments
      </span>
    </p>
      }
     
      { 
        patients.map(patient => {
          return <Patient 
          patient = {patient}
          key = {patient.id}
          setPatient = {setPatient}
          deletePatient = {deletePatient}
          
          />

      })}

    </div>
  )
}

export default PatientList
