import React from 'react'

interface IconProps extends React.SVGProps<SVGSVGElement> {}

const Check: React.FC<IconProps> = ({className, ...restProps }) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className} {...restProps}>
      <path d="M0.499997 10.9545L4.33727 13.9023C4.76938 14.2342 5.3877 14.1591 5.72778 13.7334L15.5 1.5" stroke="currentColor" strokeLinecap="round"/>
    </svg>
  )
}

export default Check