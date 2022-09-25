
function Patient({patient, setPatient, deletePatient}) {
  const {petName, ownerName, email, dischargeDate, symptoms, id} = patient

  const handleDelete = () =>{
    const response = confirm('Do you want to delete this patient?');

    if(response){
      deletePatient(id)
    }
  }

  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className=" font-bold mb-3 text-gray-700 uppercase"> Name: {''}
        <span className="font-normal normal-case">{petName}</span>
      </p>
      <p className=" font-bold mb-3 text-gray-700 uppercase"> Owner: {''}
        <span className="font-normal normal-case">{ownerName}</span>
      </p>
      <p className=" font-bold mb-3 text-gray-700 uppercase"> Email: {''}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className=" font-bold mb-3 text-gray-700 uppercase"> Discharge date: {''}
        <span className="font-normal normal-case">{dischargeDate}</span>
      </p>
      <p className=" font-bold mb-3 text-gray-700 uppercase"> Symptoms: {''}
        <span className="font-normal normal-case">
        
        {symptoms}
        </span>
      </p>
      <div className="flex justify-between">
        <button 
          type = "button"
          className="font-bold text-white bg-indigo-500 px-5 py-2 mt-5 text-sm rounded-md uppercase"
          onClick={() => setPatient(patient)}>
          Edit
        </button>
        <button 
          className="font-bold text-white bg-red-500 px-5 py-2 mt-5 text-sm rounded-md uppercase"
          type = "button"
          onClick = {handleDelete}>
          Delete
        </button>
      </div>
  </div>
  )
}

export default Patient
