import { ActiveIcon, DefaultIcon, TestIcon } from '@/components/Icons'

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
  children?: string
  SuccededIcon?: React.FC
}) => {
  const isActive = activeStep === index
  const isSuccess = activeStep > index
  return (
    <div className={`flex flex-col items-center z-10 hover:cursor-pointer`} onClick={onClick}>
      {isSuccess ? <SuccededIcon /> : <ActiveIcon index={children} isActive={isActive} />}
      {isSuccess ? <SuccededIcon /> : <TestIcon index={children} isActive={isActive} isSuccess={isSuccess} />}
      <span
        className={`absolute top-[40px] text-xs sm:text-base ${
          isSuccess || isActive ? `text-green-500` : `text-[#909090]`
        } ${isActive && `font-extrabold`} text-center`}
      >
        {label}
      </span>
    </div>
  )
}
