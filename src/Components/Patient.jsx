
function Patient({patient}) {
  const {petName, ownerName, email, dischargeDate, symptoms} = patient
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
  </div>
  )
}

export default Patient
