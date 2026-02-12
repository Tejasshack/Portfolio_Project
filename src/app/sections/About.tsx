'use client'
import Card from '@/src/components/Card'
import SectionHeader from '@/src/components/SectionHeader'
import Image from 'next/image'
import GithubIcon from '@/src/assets/icons/github.svg'
import TypeScriptIcon from '@/src/assets/icons/typescript.svg'
import HtmlIcon from '@/src/assets/icons/html5.svg'
import JavaScriptIcon from '@/src/assets/icons/javascript.svg'
import ReactIcon from '@/src/assets/icons/react.svg'
import NodeIcon from '@/src/assets/icons/node.svg'
import DatabaseIcon from '@/src/assets/icons/sql.svg'
import Css3Icon from '@/src/assets/icons/css3.svg'
import BrowserIcon from '@/src/assets/icons/browser.svg'
import TailwindIcon from '@/src/assets/icons/tailwind.svg'
import CopilotIcon from '@/src/assets/icons/copilot.svg'
import GptIcon from '@/src/assets/icons/gpt.svg'
import avatarIcon from '@/src/assets/memojis/MoSmileMemoji.png'
import CardHeader from '@/src/components/CardHeader'
import Toolbox from '@/src/components/Toolbox'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import RotatingBookCovers from '@/src/components/RotatingBookCovers'
import MapThemeToggle from '@/src/components/MapThemeToggle'
import { useTranslations } from 'next-intl'

type interfaceToolboxItem = { title: string; iconType: React.ElementType } // This ensures `iconType` is "typed" correctly
// "Stack" or toolbox - all could be pulled from a database if larger projectand not hard coded
const toolboxItems: interfaceToolboxItem[] = [
  {
    title: 'JavaScript',
    iconType: JavaScriptIcon,
  },
  {
    title: 'TypeScript',
    iconType: TypeScriptIcon,
  },
  {
    title: 'HTML5',
    iconType: HtmlIcon,
  },
  {
    title: 'CSS3',
    iconType: Css3Icon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'Node.js',
    iconType: NodeIcon,
  },
  {
    title: 'GitHub',
    iconType: GithubIcon,
  },
  {
    title: 'GPT',
    iconType: GptIcon,
  },
  {
    title: 'DevTools',
    iconType: BrowserIcon,
  },
  {
    title: 'Tailwind',
    iconType: TailwindIcon,
  },
  {
    title: 'Copilot',
    iconType: CopilotIcon,
  },
  {
    title: 'SQL',
    iconType: DatabaseIcon,
  },
]
// hobbies - all could be in database if larger project

export default function About() {
  const constrainRef = useRef(null)
  const t = useTranslations('About')
  const hobbies = [
    {
      title: t('hobbies.pentesting'),
      emoji: '🛡️',
      left: '1%',
      top: '0%',
    },
    {
      title: t('hobbies.automating'),
      emoji: '⚙️',
      left: '-3%',
      top: '46%',
    },
    {
      title: t('hobbies.gaming'),
      emoji: '🎮',
      left: '6%',
      top: '67%',
    },
    {
      title: t('hobbies.reading'),
      emoji: '📚',
      left: '59%',
      top: '78%',
    },
    {
      title: t('hobbies.exploring'),
      emoji: '🧪',
      left: '33%',
      top: '49%',
    },
    {
      title: t('hobbies.chess'),
      emoji: '♟️',
      left: '12%',
      top: '25%',
    },
    {
      title: t('hobbies.hiking'),
      emoji: '🏔️',
      left: '48%',
      top: '7%',
    },
    {
      title: t('hobbies.traveling'),
      emoji: '✈️',
      left: '58%',
      top: '16%',
    },
  ]
  return (
    <section id="about" className="pt-12 pb-12 lg:pt-16 lg:pb-16">
      <div className="container">
        <div className="relative">
          <SectionHeader
            eyebrow={t('sectionHeader.header')}
            title={t('sectionHeader.title')}
            description={t('sectionHeader.description')}
          />
          <div className="mt-6 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 dark:from-emerald-400 dark:via-sky-500 dark:to-emerald-400" aria-hidden />
        </div>
        <div className="mt-8 flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-5 lg:grid-cols-3">
            <RotatingBookCovers />
            <Card className="h-[280px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title={t('toolboxCard.title')}
                description={t('toolboxCard.description')}
              />
              <Toolbox
                items={toolboxItems}
                itemsWrapperClassName="animate-left-movement [animation-duration:25s] hover:[animation-play-state:paused]"
              />
              <Toolbox
                items={toolboxItems}
                className="mt-4"
                itemsWrapperClassName="animate-right-movement [animation-duration:25s] hover:[animation-play-state:paused]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:grid-cols-3">
            <Card className="h-[280px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title={t('hobbies.hobbiesCard.title')}
                description={t('hobbies.hobbiesCard.description')}
                className="px-6 py-6"
              />
              {/* giving a ref to the parent div and telling framer-motion "drag" that that ref is the constraint */}
              <div className="relative flex-1" ref={constrainRef}>
                {hobbies.map((hobby) => (
                  // adding framer motion for movement of the items inside the parent div, changing next component to client component
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-amber-300 dark:from-emerald-300 to-orange-400 dark:to-sky-400  rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constrainRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="min-h-[280px] p-0 flex flex-col md:col-span-2 lg:col-span-1">
              <CardHeader
                title={t('education.title')}
                description={t('education.degree')}
                className="px-6 pt-6 pb-3"
              />
              <div className="px-6 pb-6 pt-1 flex flex-col gap-3 flex-1">
                <div className="space-y-1">
                  <p className="text-sm font-medium dark:text-white/90 text-black/90">{t('education.school')}</p>
                  <p className="text-sm dark:text-white/70 text-black/70">{t('education.period')} · {t('education.cgpa')}</p>
                </div>
                <hr className="border-t dark:border-white/15 border-black/15 my-1" />
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wider dark:text-white/60 text-black/60">{t('certifications.title')}</p>
                  <p className="text-sm dark:text-white/90 text-black/90 flex items-center gap-2">
                    <span className="text-base" aria-hidden>🏆</span>
                    {t('certifications.aws')}
                  </p>
                </div>
              </div>
            </Card>
            <Card className="h-[280px] p-0 relative md:col-span-2 lg:col-span-1">
              <MapThemeToggle />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full dark:after:outline-gray-950/30 after:outline-brown4/50">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r dark:from-emerald-300 dark:to-sky-400 from-amber-300 to-orange-500 -z-20 animate-ping [animation-duration:2.5s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r dark:from-emerald-300 dark:to-sky-400 from-amber-300 to-orange-500 -z-10"></div>
                <Image
                  src={avatarIcon}
                  alt="Tejaswi Rastogi - Full-Stack Developer"
                  className="size-30 rounded-full"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
