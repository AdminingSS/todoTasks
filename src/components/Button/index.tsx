import React, { ReactNode, ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

import { createUseStyles } from 'react-jss'

import styles from './styles'

const useStyles = createUseStyles(styles)

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
}

const Button: React.FC<ButtonProps> = ({ children, className, ...restProps }) => {
  const classes = useStyles()
  return (
    <button className={clsx(classes.root, className)} {...restProps}>{children}</button>
  )
}

export default Button