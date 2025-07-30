// Splash.jsx
import { useState, useEffect } from 'react'

export default function Splash({ children, duration = 3000 }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), duration)
    return () => clearTimeout(timeout)
  }, [duration])

  return visible ? children : null
}
