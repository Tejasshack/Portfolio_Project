import LinkedinIcon from '@/src/assets/icons/linkedin.svg'
import GithubIcon from '@/src/assets/icons/github.svg'
import MailIcon from '@/src/assets/icons/envelope.svg'
import StackIcons from '@/src/components/StackIcons'
import { useTranslations } from 'next-intl'

type footLinks = {
  title: string
  href: string
  icon: React.ElementType
  ariaLabel?: string
}
const footLinks: footLinks[] = [
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/tejaswi-rastogi-159sb/',
    icon: LinkedinIcon,
    ariaLabel: 'LinkedIn Profile in new tab',
  },
  {
    title: 'GitHub',
    href: 'https://github.com/Tejasshack',
    icon: GithubIcon,
    ariaLabel: 'GitHub Profile in new tab',
  },
  {
    title: 'Email',
    href: 'mailto:tejaswi.dev.666@gmail.com',
    icon: MailIcon,
    ariaLabel: 'Send Email to Tejaswi in new tab',
  },
]

export default function Footer() {
  const t = useTranslations('Footer')
  return (
    <footer className="relative -z-1 overflow-x-clip">
      <div
        className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 dark:bg-emerald-300/30 bg-orange-300/70
      [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"
      ></div>
      <div className="container ">
        <div className="border-t dark:border-white/15 border-black/15 py-6 text-sm flex flex-col-reverse md:flex-row md:justify-between items-center gap-8">
          <div className="flex dark:text-white/40 text-black/40 gap-4">
            <div> &copy; {t('rights')}</div>
            <div>{t('location')}</div>
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                target="_blank"
                className="inline-flex items-center gap-2 hover:underline decoration-black dark:decoration-white underline-offset-4"
                aria-label={link.ariaLabel}
              >
                {/* added declaration for SVGR in typescript in root so we can use link.icon */}
                <span className="font-semibold dark:text-white text-black/70">
                  {link.title}
                </span>
                <StackIcons component={link.icon} size="size-5 rounded-lg" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
