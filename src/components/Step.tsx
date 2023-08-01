import { DefaultIcon, StepIcon } from '@/components/Icons'

export const Step = ({
  label,
  onClick,
  activeStep = 0,
  index = 0,
  SuccededIcon = DefaultIcon,
  children,
}: {
  label: string
  onClick: () => void
  activeStep?: number
  index?: number
  children?: string | JSX.Element
  SuccededIcon?: React.FC
}) => {
  const isActive = activeStep === index
  const isSucceeded = activeStep > index
  return (
    <div className={`flex flex-col items-center z-10 hover:cursor-pointer`} onClick={onClick}>
      {isSucceeded ? (
        <SuccededIcon />
      ) : (
        <StepIcon insideElement={children} isActive={isActive} isSucceeded={isSucceeded} />
      )}
      <span
        className={`absolute top-[40px] text-xs sm:text-base ${
          isSucceeded || isActive ? `text-green-500` : `text-[#909090]`
        } ${isActive && `font-extrabold`} text-center`}
      >
        {label}
      </span>
    </div>
  )
}
