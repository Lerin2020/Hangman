import React, {useEffect, useRef, useState} from 'react'
import Hangman from './Components/Hangman'
import Keyboard from './Components/Keyboard'
import Word from './Components/Word'
import axios from 'axios'
import Start from './Components/Start'
import Loading from './Components/Loading'
import Head from './Components/BodyParts/Head'
import Body from './Components/BodyParts/Body'
import LArm from './Components/BodyParts/LArm'
import RArm from './Components/BodyParts/RArm'
import LLeg from './Components/BodyParts/LLeg'
import RLeg from './Components/BodyParts/RLeg'
import EndWord from './Components/EndGame/EndWord'
export interface WordPropInterface {
  letter: string, picked:boolean, id: number
}

const App = () => {
  const [start, setStart] = useState<boolean>(false)
  const [end, setEnd] = useState<boolean>(false)
  const [endText, setEndText] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const abortController = useRef<AbortController | null>(null)
  const [wordPropertiesArray, setWordProperties] = useState<WordPropInterface[]>([])
  const [word, setWord] = useState<string>('')
  const [bodyArr, setBodyArr] = useState<React.ReactElement[]>([<Head key = '0'/>, <Body key = '1'/>, <LArm key='2'/>, <RArm key = '3'/>, <LLeg key = '4'/>, <RLeg key = '5'/>])
  useEffect(() => {
    const fetchWord = async () => {
      abortController.current?.abort()
      abortController.current = new AbortController()
      try {
        const response = await axios('https://random-word-api.vercel.app/api?words=1', {signal: abortController.current?.signal});
          setWord(response.data[0].toUpperCase())
          setWordProperties(response.data[0].toUpperCase().split('').map((Letter: string,index:number) => {
            return {letter:Letter, picked: false, id: index}
          }))
        } catch (err) {
          console.error(err);
        } finally {
          setIsLoading(false)
        }
      };
      fetchWord(); 
    }, [start])
    useEffect(() => {
      if(start && (wordPropertiesArray.every(({picked}) => picked === true) || bodyArr.length === 0)){
        setEnd(true)
        if(wordPropertiesArray.every(({picked}) => picked === true)) {
          setEndText('You Win!')
        }
        if( bodyArr.length === 0) {
          setEndText('You Lose!')
        }
      }}, [wordPropertiesArray, bodyArr, start])

    const handleShowLetter = (clicked: string) => {
      setWordProperties(prevProps => 
        prevProps.map(letterObj => 
          letterObj.letter == clicked
          ? {...letterObj, 'picked':true} 
          : letterObj
        )
      )
    }
  
   const handleAction = (clicked: string, e:React.MouseEvent<HTMLButtonElement>) => {
      if(word.includes(clicked)) {
        const button = e.target as HTMLButtonElement
        button.classList.add('bg-green-400')
        button.classList.add('border-green-400')
        button.classList.add('opacity-50')
        button.disabled = true
      }
      else{
        const button = e.target as HTMLButtonElement
        button.classList.add('bg-red-400')
        button.classList.add('border-dashed')
        button.classList.add('cursor-not-allowed')
        button.classList.add('opacity-50')
        button.classList.remove('hover:bg-[#C7D6D5]')
        button.classList.remove('cursor-pointer')
        button.disabled = true
        handleRemovePart()
      }
    } 
  const handleRemovePart = () => {
    setBodyArr((prev: React.ReactElement[]) => {
      return prev.slice(0, -1)
    }
    )
  }
    const handleStart = () => {
      setIsLoading(true)
      setStart(true)   

    }
    
  return (
      start 
            ? 
              (
              isLoading 
                        ? 
                            <Loading /> 
                        :
                            <div className='h-[100vh] w-[100vw] flex flex-col items-center p-15 gap-10 justify-center bg-[url(../Public/sssurf.svg)] bg-right bg-no-repeat bg-cover'>
                              <div className='-mt-10 flex flex-col items-center gap-10'>
                                <Hangman bodyArr = {bodyArr}/>
                                {!end ? <Word wordProps = {wordPropertiesArray}/>
                                      : <EndWord wordProps = {wordPropertiesArray} endText = {endText}/>}
                                <Keyboard handleClickAction = {handleAction} handleShowLetter={handleShowLetter} endGame = {end}/> 
                              </div>
                            </div>
              )
            : 
              <Start handleStart = {handleStart}/>
    
  )
}

export default App