// src/components/Logo.jsx
import { motion } from 'motion/react'
import logo from '../assets/logo.png'

export default function Logo({isSmall}) {
  return (
    <motion.img
  src={logo}
  alt="Logo"
  className={isSmall ? "h-52 w-52" : "h-80 w-80"}
  initial={{ clipPath: 'inset(0% 50% 0% 50%)'}}
  animate={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
  transition={{ duration: 0.5, ease: 'easeInOut' }}
/>
  )
}
