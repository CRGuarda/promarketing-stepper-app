'use client'
import { Button } from '@/components/Button'
import { DefaultIcon } from '@/components/Icons'
import { Step } from '@/components/Step'
import { Stepper } from '@/components/Stepper'
import { faCoffee, faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

export default function Home() {
  const [activeStep, setActiveStep] = useState(0) /* Element index */
  const [isFirstStep, setIsFirstStep] = useState(true)
  const [isLastStep, setIsLastStep] = useState(false)

  const handlePrev = () => !isFirstStep && setActiveStep((currState) => currState - 1)
  const handleNext = () => !isLastStep && setActiveStep((currState) => currState + 1)

  return (
    <main className='flex min-h-screen flex-col items-center p-8 md:p-24'>
      <Stepper
        activeStep={activeStep}
        isFirstStep={(value) => setIsFirstStep(value)}
        isLastStep={(value) => setIsLastStep(value)}
        /* SucceededIcon={faHouse} */
      >
        <Step label='with FA icon' onClick={() => setActiveStep(0)}>
          <FontAwesomeIcon icon={faCoffee} />
        </Step>
        <Step label='with FA icon 2' onClick={() => setActiveStep(1)}>
          <FontAwesomeIcon icon={faHouse} />
        </Step>
        <Step label='with text' onClick={() => setActiveStep(2)}></Step>
        <Step label='with text' onClick={() => setActiveStep(3)}>
          4
        </Step>
        <Step label='with no children' onClick={() => setActiveStep(4)} />
      </Stepper>
      <div className='w-full flex justify-around mt-32'>
        <Button title='Atrás' onClick={handlePrev} disabled={isFirstStep} />
        <Button title='Siguiente' onClick={handleNext} disabled={isLastStep} />
      </div>
    </main>
  )
}
