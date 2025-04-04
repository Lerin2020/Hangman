import React from 'react'

const Button = ({children, handleClickAction, handleShowLetter}: {children:string, handleClickAction: (clicked: string, e:React.MouseEvent<HTMLButtonElement>) => void, handleShowLetter: (clicked: string) => void}) => {
  return (
    <> 
    <button className= {`font-extrabold p-2 border-3 w-8 h-10 flex justify-center items-center text-md rounded-md hover:bg-[#C7D6D5] cursor-pointer transition-all select-none md:p-5 md:w-10 md:text-2xl`} onClick={(e) => {
      handleClickAction(children,e); handleShowLetter(children)
      }}>
        {children}
    </button>
    
    </>
  )
}

export default Button
//