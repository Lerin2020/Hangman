import { ReactElement } from 'react'

const Hangman = ({bodyArr}: {bodyArr: ReactElement[]}) => {
  
  return (
    <div className='w-45 h-100 border-l-4 border-t-4 relative translate-x-[0%] border-[#0C120C]'>
      <div className='w-[4px] h-12 bg-[#0C120C] absolute right-0'>
      </div>
      <div className='w-40 h-[4px] bg-[#0C120C] absolute left-0 bottom-0 -translate-x-[25%]'>
      </div>
      <p className='absolute -top-6 left-15 font-bold'>
        {bodyArr.length} lives left
      </p>
      {bodyArr.map((body) => {
        return body
      })}
    </div>
  )
}

export default Hangman
//translate-x-[0%] w-50