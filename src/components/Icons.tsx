import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export const DefaultIcon = () => (
  <svg
    width={32}
    height={32}
    viewBox='0 0 32 32'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className='bg-white rounded-full'
  >
    <g clipPath='url(#clip0_200_201)'>
      <path
        d='M0 16C0 7.1625 7.1625 0 16 0C24.8375 0 32 7.1625 32 16C32 24.8375 24.8375 32 16 32C7.1625 32 0 24.8375 0 16ZM23.2375 13.2375C23.9187 12.5563 23.9187 11.4437 23.2375 10.7625C22.5562 10.0813 21.4438 10.0813 20.7625 10.7625L14 17.525L11.2375 14.7625C10.5563 14.0813 9.44375 14.0813 8.7625 14.7625C8.08125 15.4437 8.08125 16.5562 8.7625 17.2375L12.7625 21.2375C13.4437 21.9187 14.5563 21.9187 15.2375 21.2375L23.2375 13.2375Z'
        fill='#22C55E'
      />
    </g>
    <defs>
      <clipPath id='clip0_200_201'>
        <rect width={32} height={32} fill='white' />
      </clipPath>
    </defs>
  </svg>
)

export const ActiveIcon = ({ index, isActive }: { index?: string; isActive: boolean }) => {
  if (!index) {
    return (
      <svg
        width={15}
        height={15}
        viewBox='0 0 15 15'
        fill='none'
        className='relative mt-2'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          className='transition-all duration-500'
          x={0.5}
          y={0.5}
          width={31}
          height={31}
          rx={15.5}
          fill={isActive ? '#22C55E' : '#E8E8E8'}
          d='M7.5 0.234A7.266 7.266 0 0 1 14.766 7.5 7.266 7.266 0 0 1 7.5 14.766 7.266 7.266 0 0 1 0.234 7.5 7.266 7.266 0 0 1 7.5 0.234z'
        />
        <path
          className='transition-all duration-500'
          x={0.5}
          y={0.5}
          width={31}
          height={31}
          rx={15.5}
          stroke={isActive ? '#22C55E' : '#E8E8E8'}
          d='M7.5 0.234A7.266 7.266 0 0 1 14.766 7.5 7.266 7.266 0 0 1 7.5 14.766 7.266 7.266 0 0 1 0.234 7.5 7.266 7.266 0 0 1 7.5 0.234z'
          strokeWidth={0.46875}
        />
      </svg>
    )
  }

  return (
    <div className='relative'>
      <svg width={32} height={32} viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect
          className='transition-all duration-500'
          x={0.5}
          y={0.5}
          width={31}
          height={31}
          rx={15.5}
          fill={isActive ? '#EDFBD8' : '#E8E8E8'}
        />
        <rect
          className='transition-all duration-500'
          x={0.5}
          y={0.5}
          width={31}
          height={31}
          rx={15.5}
          stroke={isActive ? '#22C55E' : '#E8E8E8'}
        />
      </svg>
      <span
        className={`absolute  text-[14px] top-0 w-5 text-center translate-x-[30%] translate-y-[29%] ${
          isActive ? `text-[#22C55E]` : `text-[#909090]`
        }`}
      >
        {index}
      </span>
    </div>
  )
}

export const TestIcon = ({ index, isActive, isSuccess }: { index?: string; isActive: boolean; isSuccess: boolean }) => {
  const isInactive = !isSuccess && !isActive
  return (
    <div
      className={`relative z-10 grid place-items-center w-10 h-10 rounded-full ${
        isInactive ? `bg-[#E8E8E8]` : `bg-[#22C55E]`
      } ${isInactive ? `text-[#909090]` : `text-[#22C55E]`} transition-all duration-300 border-[#22C55E] border-2`}
    >
      <FontAwesomeIcon icon={faCoffee} />
    </div>
  )
}
