import { ActiveIcon, DefaultIcon } from '@/components/Icons'

export const Step = ({
  label,
  onClick,
  activeStep = 0,
  index = 0,
  children
}: {
  label: string
  onClick: () => void
  activeStep?: number
  index?: number
  children?:string
}) => {
  const isActive = activeStep === index
  const isSuccess = activeStep > index
  return (
    <div className={`flex flex-col items-center z-10 hover:cursor-pointer`} onClick={onClick}>
      {isSuccess ? <DefaultIcon /> : <ActiveIcon index={children} isActive={isActive} />}
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
