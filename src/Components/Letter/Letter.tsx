import { ReactNode } from 'react'

const Letter = ({children, picked}: {children: ReactNode, picked: boolean}) => {
  return (
    <div className='font-bold p-5 border-b-2 w-10 h-10 flex justify-center items-center text-2xl'>
        {picked && children}
    </div>
  )
}

export default Letter