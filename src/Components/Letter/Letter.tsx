import { ReactNode } from 'react'

const Letter = ({children, picked}: {children: ReactNode, picked: boolean}) => {
  return (
    <div className='font-extrabold border-b-3 w-7 h-10 flex justify-center items-center text-xl'>

        {picked && children}
    </div>
  )
}

export default Letter
//w-10 text-2xl