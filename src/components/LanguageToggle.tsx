'use client'

import { useRouter, usePathname } from '@/src/i18n/routing'
import { useLocale } from 'next-intl'

const LOCALES = [
  { code: 'en', label: 'EN', lang: 'English' },
  { code: 'hi', label: 'HI', lang: 'Hindi' },
  { code: 'de', label: 'DE', lang: 'German' },
  { code: 'es', label: 'ES', lang: 'Spanish' },
  { code: 'ja', label: 'JA', lang: 'Japanese' },
  { code: 'zh', label: 'ZH', lang: 'Chinese' },
] as const

const localePattern = /^\/(en|hi|de|es|ja|zh)/

const LanguageToggle = () => {
  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = useLocale()

  const toggleLanguage = (locale: string) => {
    const newPathname = pathname.replace(localePattern, `/${locale}`)
    router.push(
      { pathname: newPathname, query: {} },
      { locale, scroll: false }
    )
  }

  return (
    <div className="flex flex-col gap-2 w-full">
      <span className="text-xs font-semibold uppercase tracking-wider dark:text-white/80 text-black/80">
        Language
      </span>
      <div className="grid grid-cols-3 gap-1.5">
        {LOCALES.map(({ code, label, lang }) => {
          const isActive = currentLocale === code
          return (
            <button
              key={code}
              type="button"
              onClick={() => toggleLanguage(code)}
              aria-label={`${lang} Language`}
              title={lang}
              className={`
                text-sm font-medium py-2 px-2 rounded-lg border transition-all
                ${isActive
                  ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 dark:from-violet-500 dark:to-purple-500 text-gray-950 dark:text-white border-yellow-500/50 dark:border-violet-400/50 shadow-sm'
                  : 'dark:text-white/90 text-black/90 dark:bg-white/5 bg-black/5 dark:border-white/15 border-black/15 dark:hover:bg-white/15 hover:bg-black/10'
                }
              `}
            >
              {label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default LanguageToggle
