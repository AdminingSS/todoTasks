import React from 'react'

interface IconProps extends React.SVGProps<SVGSVGElement> {}

const Close: React.FC<IconProps> = ({...restProps }) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...restProps}>
      <path d="M15.5 0.5L0.5 15.5M0.5 0.5L15.5 15.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default Close