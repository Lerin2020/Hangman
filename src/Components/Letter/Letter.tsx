import { ReactNode } from 'react'

const Letter = ({children, picked}: {children: ReactNode, picked: boolean}) => {
  return (
    <div className='font-extrabold border-b-3 w-7 h-10 flex justify-center items-center text-xl md:w-10 md:text-2xl'>
        {picked && children}
    </div>
  )
}

export default Letter
//