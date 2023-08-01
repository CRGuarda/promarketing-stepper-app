'use client'
import { DefaultIcon } from '@/components/Icons'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { Children, cloneElement, isValidElement, useEffect } from 'react'

export const Stepper = ({
  children,
  activeStep = 0,
  isFirstStep,
  isLastStep,
  SucceededIcon,
}: {
  children: React.ReactNode
  activeStep?: number
  isFirstStep: (value: boolean) => void
  isLastStep: (value: boolean) => void
  SucceededIcon?: IconDefinition
}) => {
  const childrensCount = Children.count(children)
  const clonedChildrens = Children.map(children, (child, index) => {
    if (isValidElement(child))
      return cloneElement(child as JSX.Element, {
        activeStep,
        index,
        SucceededStep: <DefaultIcon succeededIcon={SucceededIcon} />,
      })
    return child
  })

  useEffect(() => {
    isFirstStep(activeStep === 0)
    isLastStep(activeStep === childrensCount - 1)
  }, [isFirstStep, isLastStep, activeStep, childrensCount])

  return (
    <div className={`w-full grid gap-3 md:gap-10 grid-flow-col justify-items-center relative justify-between`}>
      {clonedChildrens}
      <div className={`absolute top-2/4 w-[99%] border border-[#E8E8E8] `}>
        <hr
          className={`absolute top-[-1px] border border-[#EDFBD8] transition-all duration-500`}
          style={{ width: `${(100 * activeStep) / (childrensCount - 1)}%` }}
        />
      </div>
    </div>
  )
}
