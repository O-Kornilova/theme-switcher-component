import { useDarkMode } from '../hooks/useDarkMode'
import { Day, Night } from '../../../shared/icons'

export const ThemeToggle = () => {
  const { isDarkMode, toggle } = useDarkMode()

  return (
    <button
      onClick={toggle}
      className='relative flex items-center h-[1.5rem] w-[3rem] shadow-toggleInner rounded-full p-1 transition-colors duration-300 focus:outline-none'
      aria-label='Toggle Theme'
    >
      <span
        className={`
          absolute left-[2px] h-[1.25rem] w-[1.25rem] 
          rounded-full shadow-toggleOut transform transition-transform duration-300 ease-out-in flex items-center justify-center
          ${
            isDarkMode
              ? 'translate-x-6 rotate-[360deg]'
              : 'translate-x-0 rotate-0'
          }
        `}
      >
        {isDarkMode ? <Night /> : <Day />}
      </span>
    </button>
  )
}
