import { SuccessIcon } from '@/components/Icons'

export const Step = ({ label }: { label: string }) => {
  return (
    <div className='flex flex-col items-center'>
      <SuccessIcon />
      {label}
    </div>
  )
}
