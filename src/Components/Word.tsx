
import Letter from './Letter/Letter'

interface WordProperties {
  letter: string, picked:boolean, id: number
}

const Word = ({wordProps}: {wordProps: WordProperties[]}) => {
  return (
    <section className='flex gap-2 flex-col items-center w-[50vw] select-none mt-5'>
      {/* <p className='font-extrabold text-xl text-[1.5rem]'> Word </p> */}
      <div className='font-bold w-full flex justify-center items-center text-2xl'>
        Hint: {wordProps[0].letter}
      </div>
      <div className='flex flex-row gap-2'>
       {wordProps.map((letterObj, index) => {
          return  <Letter key={index} picked = {letterObj.picked}>{letterObj.letter}</Letter>
       })}
      </div>
    </section>
  )
}

export default Word
// w-[960px]