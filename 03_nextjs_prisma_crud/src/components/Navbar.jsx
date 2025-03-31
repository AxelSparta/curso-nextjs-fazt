'use client'

import { useEffect, useState } from 'react'

export default function NavBar () {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  })

  useEffect(() => {
    const root = document.documentElement
    root.className = theme
  }, [theme])

  const handleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <nav className='container mx-auto flex justify-between items-center p-4'>
      <h1>NavBar</h1>

      <ul className='flex gap-4 items-center'>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <button className='p-3 border rounded-lg' onClick={handleTheme}>{theme === 'light' ? '🌙' : '☀️'}</button>
      </ul>
    </nav>
  )
}
