import React from 'react'

const Button = ({children, handleClickAction, handleShowLetter}: {children:string, handleClickAction: (clicked: string, e:React.MouseEvent<HTMLButtonElement>) => void, handleShowLetter: (clicked: string) => void}) => {
  return (
    <> 
    <button className= {`font-bold p-5 border-3 w-10 h-10 flex justify-center items-center text-2xl rounded-md hover:bg-[#C7D6D5] cursor-pointer transition-all select-none`} onClick={(e) => {
      handleClickAction(children,e); handleShowLetter(children)
      }}>
        {children}
    </button>
    
    </>
  )
}

export default Button