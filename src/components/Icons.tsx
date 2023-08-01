import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCoffee } from '@fortawesome/free-solid-svg-icons'

export const DefaultIcon = ({
  index,
  isActive,
  isSucceeded,
}: {
  index?: string
  isActive?: boolean
  isSucceeded?: boolean
}) => {
  const isInactive = !isSucceeded && !isActive
  return (
    <div
      className={`relative z-10 grid place-items-center w-10 h-10 rounded-full bg-[#22C55E] ${
        isInactive ? `text-[#909090]` : `text-[#22C55E]`
      } transition-all duration-300 border-[#22C55E] border-2`}
    >
      <FontAwesomeIcon icon={faCheck} style={{ color: '#ffffff' }} />
    </div>
  )
}

export const StepIcon = ({
  insideElement,
  isActive,
  isSucceeded,
}: {
  insideElement?: JSX.Element | string
  isActive: boolean
  isSucceeded: boolean
}) => {
  const isInactive = !isSucceeded && !isActive
  if (!insideElement) {
    return (
      <div
        className={`relative z-10 grid place-items-center w-10 h-10 rounded-full ${
          isInactive ? `bg-[#E8E8E8]` : `bg-[#EDFBD8]`
        } ${isInactive ? `text-[#909090]` : `text-[#22C55E]`} transition-all duration-300 border-[#22C55E] border-2`}
      ></div>
    )
  }
  return (
    <div
      className={`relative z-10 grid place-items-center w-10 h-10 rounded-full ${
        isInactive ? `bg-[#E8E8E8]` : `bg-[#EDFBD8]`
      } ${isInactive ? `text-[#909090]` : `text-[#22C55E]`} transition-all duration-300 border-[#22C55E] border-2`}
    >
      {insideElement}
    </div>
  )
}
