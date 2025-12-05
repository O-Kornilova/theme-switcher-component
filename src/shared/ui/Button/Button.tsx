import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      className='px-5 py-1.5 rounded-full font-montserrat text-[.75rem] font-medium text-white hover:text-icon-cyan transition-all relative shadow-glass active:shadow-glassActive'
    >
      {children}
    </button>
  )
}
