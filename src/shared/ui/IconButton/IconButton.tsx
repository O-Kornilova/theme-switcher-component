import React from 'react'

interface IconButtonProps {
  icon: React.ReactNode
  onClick?: () => void
  ariaLabel?: string
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  ariaLabel
}) => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className='p-2 rounded-full shadow-glass active:shadow-glassActive text-white hover:text-icon-cyan transition-all'
    >
      {icon}
    </button>
  )
}
