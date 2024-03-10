import React from 'react'

interface IconProps extends React.SVGProps<SVGSVGElement> {}

const Delete: React.FC<IconProps> = ({...restProps }) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...restProps}>
      <path d="M6.5 11.5L6.5 8.5" stroke="currentColor" strokeLinecap="round"/>
      <path d="M9.5 11.5L9.5 8.5" stroke="currentColor" strokeLinecap="round"/>
      <path d="M1 4.5H15L13.75 5V5C12.995 5.30198 12.5 6.03318 12.5 6.84629V11.5C12.5 13.3856 12.5 14.3284 11.9142 14.9142C11.3284 15.5 10.3856 15.5 8.5 15.5H7.5C5.61438 15.5 4.67157 15.5 4.08579 14.9142C3.5 14.3284 3.5 13.3856 3.5 11.5V6.84629C3.5 6.03318 3.00496 5.30198 2.25 5V5L1 4.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.5 1.50024C5.5 1.50024 6 0.5 8 0.5C10 0.5 10.5 1.5 10.5 1.5" stroke="currentColor" strokeLinecap="round"/>
    </svg>
  )
}

export default Delete