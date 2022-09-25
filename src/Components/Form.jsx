import {useState, useEffect} from 'react'
import Patient from './Patient'
import Error from './Error'

function Form({patients, setPatients, patient, setPatient}) {

  const [petName, setPetName] = useState('')
  const [ownerName, setOwnerName] = useState('')
  const [email, setEmail] = useState('')
  const [dischargeDate, setDischargeDate] = useState('')
  const [symptoms, setSymptoms] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    if( Object.keys(patient).length > 0 ){
      setPetName(patient.petName)
      setOwnerName(patient.ownerName)
      setEmail(patient.email)
      setDischargeDate(patient.dischargeDate)
      setSymptoms(patient.symptoms)
    }

  },[patient])

  const generateId = () => {
    const random = Math.random().toString(32).substring(2)
    const date = Date.now().toString(32)
    return random + date
  }
  const handleSubmit = (e) => {

    e.preventDefault()
    if([petName,ownerName,email,dischargeDate,symptoms].includes('')){
      
      setError(true)

    }
    else{
      setError(false)
      //Patient object
      const patientObject = {
        petName,
        ownerName,
        email,
        dischargeDate,
        symptoms
      }

      if(patient.id){
        //Editing Record
        patientObject.id = patient.id
        const updatedPatients = patients.map(patientState =>
          patientState.id === patient.id ? patientObject : patientState
        )
        setPatients(updatedPatients)
        setPatient({})
      }
      else{
        //New Record
        patientObject.id = generateId()
        setPatients([...patients, patientObject])
      }
  
      //Reset Form
      setPetName('')
      setOwnerName('')
      setDischargeDate('')
      setSymptoms('')
      setEmail('')
    }
    
  }

  return (
    <div className="md:w-1/2 mx-3">

      <h2 className="font-black text-3xl text-center">
        Patient tracking
      </h2>

      <p className="text-lg mt-5 text-center mb-10">

        Add patients and {' '}
        <span className="text-indigo-600 font-bold">organize them</span>

      </p>

      <form 
        className="bg-white shadow-md rounded-lg py-10 px-5"
        onSubmit = {handleSubmit}
      >
        
        {
          error && <Error>All fields are mandatory</Error>
          
        }
        <div className="mb-5">

          <label htmlFor = "pet" className="block text-gray-700 uppercase font-bold">
            Pet Name
          </label>

          <input
            id = "pet"
            type = "text"
            placeholder="Pet Name"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value = {petName}
            onChange = { (e) => setPetName(e.target.value) }

          />
        </div>

        <div className="mb-5">

          <label htmlFor = "owner" className="block text-gray-700 uppercase font-bold">
            Owner name
          </label>

          <input
            id = "owner"
            type = "text"
            placeholder="Owner Name"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value = {ownerName}
            onChange = { (e) => setOwnerName(e.target.value) }

          />
        </div>

        <div className="mb-5">

          <label htmlFor = "email" className="block text-gray-700 uppercase font-bold">
            Email
          </label>

          <input
            id = "email"
            type = "text"
            placeholder="Owner's email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value = {email}
            onChange = { (e) => setEmail(e.target.value) }

          />
        </div>

        <div className="mb-5">

          <label htmlFor = "discharged" className="block text-gray-700 uppercase font-bold">
            Discharge date
          </label>

          <input
            id = "discharged"
            type = "date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value = {dischargeDate}
            onChange = { (e) => setDischargeDate(e.target.value) }

          />
        </div>

        <div className="mb-5">

          <label htmlFor = "symptoms" className="block text-gray-700 uppercase font-bold">
            Symptoms
          </label>

          <textarea
            id = "symptoms"
            placeholder = "Describe the symptoms"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value = {symptoms}
            onChange = { (e) => setSymptoms(e.target.value) }
          />
        </div>

        <input
          type = "submit"
          className = "bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value = {patient.id ? 'Edit patient' : 'Add patient'}

        />

      </form>

    </div>
  )
}

export default Form



