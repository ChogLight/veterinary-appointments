

const Form = () => {
  return (
    <div className="md:w-1/2">

      <h2 className="font-black text-3xl text-center">
        Patient tracking
      </h2>

      <p className="text-lg mt-5 text-center mb-10">

        Add patients and {' '}
        <span className="text-indigo-600 font-bold">organize them</span>

      </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5">

        <div className="mb-5">

          <label htmlFor = "pet" className="block text-gray-700 uppercase font-bold">
            Pet Name
          </label>

          <input
            id = "pet"
            type = "text"
            placeholder="Pet Name"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"

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
          />
        </div>

        <input
          type = "submit"
          className = "bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value = "Add Patient"

        />

      </form>

    </div>
  )
}

export default Form



