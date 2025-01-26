'use client'

import { ThemeProvider } from 'next-themes'
import React from 'react'

export default function Providers({ children }) {
  return (
    <ThemeProvider attribute='class' defaultTheme='system'>    
    <div className='text-gray-300 dark:text-gray-200 dark:bg-gray-700
    min-h-screen select-none transition-colors duration-200 ease-in-out
    '>{children}</div>
    </ThemeProvider>
  )
}
