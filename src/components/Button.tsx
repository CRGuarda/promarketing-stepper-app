export const Button = ({ title, onClick, disabled }: { title: string; onClick: () => void; disabled: boolean }) => {
  return (
    <button
      className='rounded bg-green-600 p-2 text-sm text-white sm:text-base disabled:bg-green-200'
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  )
}
