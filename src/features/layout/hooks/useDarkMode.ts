import { useEffect, useState } from 'react'

type ColorScheme = 'light' | 'dark'

export const useDarkMode = () => {
  const [scheme, setScheme] = useState<ColorScheme>(() => {
    const stored = localStorage.getItem('color-scheme')
    return (stored as ColorScheme) || 'light'
  })

  useEffect(() => {
    const html = document.documentElement

    if (scheme === 'dark') {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }

    localStorage.setItem('color-scheme', scheme)
  }, [scheme])

  const toggle = () => {
    setScheme(current => (current === 'dark' ? 'light' : 'dark'))
  }

  return { scheme, toggle, isDarkMode: scheme === 'dark' }
}
