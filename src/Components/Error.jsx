

function Error({children}) {
  return (
    <div>
        <p 
        className='bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md animate-pulse'>
            {children}
        </p>
    </div>
  )
}

export default Error

