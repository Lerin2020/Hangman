import "../loader.css"
const Loading = () => {
  return (
    <div className='h-[100vh] w-[100vw] flex justify-center items-center bg-[url(../Public/sssurf.svg)] bg-right bg-no-repeat bg-cover'>
        
  <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20">
    <circle className="spin2" cx="400" cy="400" fill="none"
      r="200" strokeWidth="50" stroke="#0C120C"
      strokeDasharray="700 1400"
      strokeLinecap="round" />
  </svg>
  </div>
  )
}

export default Loading