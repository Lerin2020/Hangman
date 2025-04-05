import React from 'react'
import Button from './Button/Button'

// interface WordProperties {
//   letter: string, picked:boolean, id: number
// }

const Keyboard = ({handleClickAction, handleShowLetter, endGame}: {handleClickAction: (clicked: string, e:React.MouseEvent<HTMLButtonElement>) => void, handleShowLetter: (clicked: string) => void, endGame: boolean}) => {

  return (
    <section className={`flex flex-col gap-1 md:gap-2 items-center justify-center mt-2 ${endGame && 'pointer-events-none'}`}>
    <div className=' first-row flex gap-1  md:gap-2 justify-center'>
        <Button handleClickAction = {handleClickAction} handleShowLetter={handleShowLetter}>Q</Button>
        <Button handleClickAction = {handleClickAction} handleShowLetter={handleShowLetter}>W</Button>
        <Button handleClickAction = {handleClickAction} handleShowLetter={handleShowLetter}>E</Button>
        <Button handleClickAction = {handleClickAction} handleShowLetter={handleShowLetter}>R</Button>
        <Button handleClickAction = {handleClickAction} handleShowLetter={handleShowLetter}>T</Button>
        <Button handleClickAction = {handleClickAction} handleShowLetter={handleShowLetter}>Y</Button>
        <Button handleClickAction = {handleClickAction} handleShowLetter={handleShowLetter}>U</Button>
        <Button handleClickAction = {handleClickAction} handleShowLetter={handleShowLetter}>I</Button>
        <Button handleClickAction = {handleClickAction} handleShowLetter={handleShowLetter}>O</Button>
        <Button handleClickAction = {handleClickAction} handleShowLetter={handleShowLetter}>P</Button>

    </div>
    <div className=' second-row flex gap-1  md:gap-2 justify-center'>
    <Button handleClickAction = {handleClickAction} handleShowLetter={handleShowLetter}>A</Button>
    <Button handleClickAction = {handleClickAction} handleShowLetter={handleShowLetter}>S</Button>
    <Button handleClickAction = {handleClickAction} handleShowLetter={handleShowLetter}>D</Button>
    <Button handleClickAction = {handleClickAction} handleShowLetter={handleShowLetter}>F</Button>
    <Button handleClickAction = {handleClickAction} handleShowLetter={handleShowLetter}>G</Button>
    <Button handleClickAction = {handleClickAction} handleShowLetter={handleShowLetter}>H</Button>
    <Button handleClickAction = {handleClickAction} handleShowLetter={handleShowLetter}>J</Button>
    <Button handleClickAction = {handleClickAction} handleShowLetter={handleShowLetter}>K</Button>
    <Button handleClickAction = {handleClickAction} handleShowLetter={handleShowLetter}>L</Button>
    </div>
    <div className=' second-row flex gap-1 md:gap-2 justify-center'>
    <Button handleClickAction = {handleClickAction} handleShowLetter={handleShowLetter}>Z</Button>
    <Button handleClickAction = {handleClickAction} handleShowLetter={handleShowLetter}>X</Button>
    <Button handleClickAction = {handleClickAction} handleShowLetter={handleShowLetter}>C</Button>
    <Button handleClickAction = {handleClickAction} handleShowLetter={handleShowLetter}>V</Button>
    <Button handleClickAction = {handleClickAction} handleShowLetter={handleShowLetter}>B</Button>
    <Button handleClickAction = {handleClickAction} handleShowLetter={handleShowLetter}>N</Button>
    <Button handleClickAction = {handleClickAction} handleShowLetter={handleShowLetter}>M</Button>
    </div>
    
    </section>
  )
}

export default Keyboard
// {wordObj, setWordObj}: {wordObj: WordProperties[], setWordObj: Dispatch<SetStateAction<WordProperties[]>>}