import { Step } from '@/components/Step'
import { Stepper } from '@/components/Stepper'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Stepper>
        <Step label={'Info'} />
        <Step label={'Account'} />
        <Step label={'Review'} />
      </Stepper>
    </main>
  )
}
