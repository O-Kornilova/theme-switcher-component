import { Brand, Hamburger } from '../../../shared/icons'
import { Button } from '../../../shared/ui/Button'
import { IconButton } from '../../../shared/ui/IconButton'
import { ThemeToggle } from './ThemeToggle'

export const Navigation = () => {
  return (
    <div className='w-full flex justify-center pt-4 px-[1.375rem] sticky top-0 z-50'>
      <header className='w-full max-w-5xl flex items-center rounded-full justify-between py-1 pr-2 pl-4 bg-surface-accent dark:bg-surface-accent-dark shadow-customUp backdrop-blur-sm text-white'>
        <a href='/' className='flex items-center gap-2'>
          <Brand className='w-2.5rem h-2.5rem text-icon-cyan hover:text-cyan-400 active:text-cyan-400 transition-colors' />
        </a>

        <div className='flex items-center gap-3 sm:gap-4'>
          <ThemeToggle />
          <Button variant='primary'>Sign in</Button>
          <IconButton icon={<Hamburger className='w-4 h-4' />} />
        </div>
      </header>
    </div>
  )
}
