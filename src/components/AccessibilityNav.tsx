import { useState, useRef, useEffect } from 'react'
import ThemeSwitch from './ThemeSwitch'
import LanguageToggle from './LanguageToggle'
import AccessibilityIcon from '@/src/assets/icons/accessibility.svg'

const AccessibilityNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [dropdownRef])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="ring-2 dark:ring-white ring-black rounded-full button-animation"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Accessibility settings Menu"
      >
        <AccessibilityIcon
          className="size-10 md:size-12 lg:size-14 text-gray-900 dark:text-white rounded-full shadow-lg ring-1 ring-gray-600
        hover:scale-125 transition-all duration-200"
        />
      </button>
      {isOpen && (
        <div
          className="absolute top-0 right-0 translate-x-[100%] translate-y-[-100%] mt-2 rounded-2xl shadow-xl border-2 border-amber-200/50 dark:border-emerald-400/30 dark:bg-gray-800/95 bg-white/95 backdrop-blur-sm p-4 w-52 min-h-48 md:w-56 md:min-h-52"
          style={{ transformOrigin: 'bottom left' }}
        >
          <div className="flex flex-col gap-5">
            <ThemeSwitch />
            <LanguageToggle />
          </div>
        </div>
      )}
    </div>
  )
}

export default AccessibilityNav
