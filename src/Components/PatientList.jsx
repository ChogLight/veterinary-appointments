import Patient from "./Patient"
function PatientList({patients}) {
  return (
    <div className="overflow-y-scroll md:w-1/2 lg:3/5 md:h-screen">

      <h2 className="font-black text-3xl text-center">Patient list</h2>

      <p className="text-center text-lg mt-5 mb-10">
        Order your {''}
        <span className="text-indigo-600 font-bold">
          patients and appointments
        </span>
      </p>
      { 
        patients.map( (patient, index) => {
          return <Patient 
          patient = {patient}
          key = {patient.id}
          />

      })}

    </div>
  )
}

export default PatientList
