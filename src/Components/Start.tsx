

const Start = ({handleStart}: {handleStart:() => void}) => {
 
  return (
    <div className='h-[100vh] w-[100vw] flex justify-center items-center bg-[url(../../Public/sssurf.jpg)] bg-right bg-no-repeat bg-cover'>
        <button onClick={handleStart} className='font-bold bg-[#0C120C] p-5 rounded-2xl text-[#ECEBF3] cursor-pointer hover:bg-transparent hover:text-[#0C120C] hover:border-3 hover:scale-110 transition-all'>Start Game</button>
    </div>
  )
}

export default Start