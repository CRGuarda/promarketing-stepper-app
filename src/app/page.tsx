'use client'
import { Button } from '@/components/Button'
import { DefaultIcon, TestIcon } from '@/components/Icons'
import { Step } from '@/components/Step'
import { Stepper } from '@/components/Stepper'
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
        SuccededIcon={DefaultIcon}
      >
        <Step label='Personal Info' onClick={() => setActiveStep(0)}>
          1
        </Step>
        <Step label='Seat' onClick={() => setActiveStep(1)}>
          2
        </Step>
        <Step label='Review' onClick={() => setActiveStep(2)}>
          3
        </Step>
        <Step label='Payment' onClick={() => setActiveStep(3)}>
          4
        </Step>
        <Step label='Confirmation' onClick={() => setActiveStep(4)}>
          5
        </Step>
        <Step label='Extra' onClick={() => setActiveStep(5)} />
      </Stepper>
      <div className='w-full flex justify-around mt-32'>
        <Button title='Atrás' onClick={handlePrev} disabled={isFirstStep} />
        <Button title='Siguiente' onClick={handleNext} disabled={isLastStep} />
      </div>
    </main>
  )
}
