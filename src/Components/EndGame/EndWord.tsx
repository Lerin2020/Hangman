import Letter from './EndLetter'

interface WordProperties {
  letter: string, picked:boolean, id: number
}

const EndGame = ({wordProps, endText}: {wordProps: WordProperties[], endText: string}) => {
  return (
    <section className='flex gap-2 flex-col items-center w-[75vw] select-none mt-5 md:w-[960px]'>
      {/* <p className='font-extrabold text-xl text-[1.5rem]'> Word </p> */}
      <div className='font-bold w-full flex justify-center items-center text-xl'>
        {/* Hint: {wordProps[0].letter} */}
        <p className={`${endText === 'You Lose!' ? "text-red-800" : "text-green-800"} mr-2.5`}>{endText}</p>   Refresh to play again
      </div>
      <div className='flex flex-row gap-2'>
       {wordProps.map((letterObj, index) => {
          return  <Letter key={index} picked = {letterObj.picked}>{letterObj.letter}</Letter>
       })}
      </div>
    </section>
  )
}

export default EndGame