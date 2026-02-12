'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import gurugramMap2 from '@/src/assets/gurugramMap2.png'
import gurugramMap from '@/src/assets/gurugramMap.png'
import Image from 'next/image'

export default function MapThemeToggle() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return resolvedTheme === 'light' ? (
    <Image
      src={gurugramMap}
      alt="Map of Gurugram, India"
      className="h-full w-full object-cover transform scale-[1.4] -translate-y-2 translate-x-4 "
    />
  ) : (
    <Image
      src={gurugramMap2}
      alt="Map of Gurugram, India"
      className="h-full w-full object-cover object-left-top transform -translate-y-10  scale-125  md:-translate-y-10 md:-translate-x-8 "
    />
  )
}
