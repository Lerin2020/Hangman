import { ReactNode } from 'react'

const Letter = ({children, picked}: {children: ReactNode, picked: boolean}) => {
  return (
    <div className={`font-extrabold border-b-3 w-7 h-10 flex justify-center items-center text-xl ${picked ? "text-green-800" : "text-red-800"} md:w-10 md:text-2xl`}>
        {children}
    </div>
  )
}

export default Letter
//w-10 text-2xl