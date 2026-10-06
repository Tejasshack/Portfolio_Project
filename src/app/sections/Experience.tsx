'use client'

import SectionHeader from '@/src/components/SectionHeader'
import { useTranslations } from 'next-intl'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { MouseEvent, useState } from 'react'
import { getExperienceStats } from '@/src/lib/experienceStats'

type ExperienceMeta = {
  abbr: string
  emoji: string
  tags: string[]
  metrics: { value: string; label: string }[]
  gradient: string
  ring: string
}

const EXPERIENCE_META: ExperienceMeta[] = [
  {
    abbr: 'KJ',
    emoji: '⚡',
    tags: ['Node.js', 'Express.js', 'GCP', 'Prisma', 'Jest'],
    metrics: [
      { value: '100+', label: 'APIs' },
      { value: 'Java→Node', label: 'Migration' },
    ],
    gradient:
      'from-amber-400 via-orange-500 to-yellow-400 dark:from-violet-400 dark:via-purple-500 dark:to-indigo-400',
    ring: 'ring-orange-400/30 dark:ring-violet-400/40',
  },
  {
    abbr: 'MVM',
    emoji: '📡',
    tags: ['AdTech', 'Redis', 'React', 'Docker', 'PowerMTA'],
    metrics: [
      { value: '10K+', label: 'Users' },
      { value: 'Real-time', label: 'Platform' },
    ],
    gradient:
      'from-orange-400 via-yellow-500 to-amber-400 dark:from-indigo-400 dark:via-violet-500 dark:to-purple-400',
    ring: 'ring-yellow-400/30 dark:ring-indigo-400/40',
  },
  {
    abbr: 'JS',
    emoji: '☕',
    tags: ['Java', 'React', 'Full Stack', 'Code Reviews'],
    metrics: [
      { value: '8 mo', label: 'Full-time' },
      { value: 'BMS', label: 'Project' },
    ],
    gradient:
      'from-yellow-400 via-amber-500 to-orange-400 dark:from-purple-400 dark:via-violet-500 dark:to-fuchsia-400',
    ring: 'ring-amber-400/30 dark:ring-purple-400/40',
  },
  {
    abbr: 'GS',
    emoji: '🌱',
    tags: ['React.js', 'Node.js', 'MongoDB', 'CI/CD', 'Agile'],
    metrics: [
      { value: '40%', label: 'Faster' },
      { value: 'NGO', label: 'Platform' },
    ],
    gradient:
      'from-yellow-300 via-orange-400 to-amber-500 dark:from-teal-400 dark:via-violet-500 dark:to-purple-400',
    ring: 'ring-orange-300/30 dark:ring-teal-400/40',
  },
]

function ExperienceCard({
  exp,
  meta,
  isCurrent,
  side,
  index,
  currentLabel,
}: {
  exp: { company: string; role: string; period: string; highlights: string[] }
  meta: ExperienceMeta
  isCurrent: boolean
  side: 'left' | 'right'
  index: number
  currentLabel: string
}) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [hovered, setHovered] = useState(false)

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${mouseX}px ${mouseY}px, rgba(251,191,36,0.14), transparent 72%)`
  const spotlightDark = useMotionTemplate`radial-gradient(420px circle at ${mouseX}px ${mouseY}px, rgba(167,139,250,0.16), transparent 72%)`

  return (
    <motion.article
      initial={{ opacity: 0, x: side === 'left' ? -56 : 56, y: 32 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Connector arm to center spine — desktop only */}
      <div
        className={`pointer-events-none absolute top-1/2 hidden h-px w-8 -translate-y-1/2 md:block ${
          side === 'left'
            ? '-right-8 bg-gradient-to-r from-yellow-500/50 to-yellow-500/10 dark:from-violet-400/50 dark:to-violet-400/10'
            : '-left-8 bg-gradient-to-l from-yellow-500/50 to-yellow-500/10 dark:from-violet-400/50 dark:to-violet-400/10'
        }`}
        aria-hidden
      />

      <motion.div
        whileHover={{ y: -8, scale: 1.015 }}
        transition={{ type: 'spring', stiffness: 320, damping: 22 }}
        className={`group relative rounded-[1.75rem] p-[1.5px] bg-gradient-to-br ${meta.gradient} shadow-xl shadow-black/5 dark:shadow-black/30`}
      >
        <div
          className={`relative overflow-hidden rounded-[1.65rem] dark:bg-gray-900/95 bg-brown2/95 backdrop-blur-sm ring-1 ${meta.ring} transition-shadow duration-500 group-hover:shadow-2xl group-hover:shadow-yellow-500/10 dark:group-hover:shadow-violet-500/20`}
        >
          {/* Mouse spotlight */}
          <motion.div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:hidden"
            style={{ background: spotlight }}
          />
          <motion.div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 hidden dark:block"
            style={{ background: spotlightDark }}
          />

          {/* Noise + grid texture */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
            aria-hidden
          />

          {/* Large index */}
          <span
            className="pointer-events-none absolute -right-1 -top-3 select-none font-serif text-[5.5rem] font-bold leading-none text-black/[0.04] dark:text-white/[0.05]"
            aria-hidden
          >
            {String(index + 1).padStart(2, '0')}
          </span>

          <div className="relative p-6 md:p-7 lg:p-8">
            {/* Header row */}
            <div className="flex items-start gap-4">
              <div
                className={`relative flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${meta.gradient} text-2xl shadow-lg`}
              >
                <span aria-hidden>{meta.emoji}</span>
                <span className="absolute -bottom-1.5 -right-1.5 rounded-md bg-gray-950 px-1.5 py-0.5 text-[9px] font-bold tracking-wider text-white dark:bg-white dark:text-gray-950">
                  {meta.abbr}
                </span>
              </div>

              <div className="min-w-0 flex-1 pt-0.5">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  {isCurrent && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-300">
                      <span className="relative flex size-1.5">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
                      </span>
                      {currentLabel}
                    </span>
                  )}
                  <span className="rounded-full border dark:border-white/10 border-black/10 dark:bg-white/5 bg-black/[0.04] px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider dark:text-white/65 text-black/55">
                    {exp.period}
                  </span>
                </div>
                <h3 className="font-serif text-xl md:text-2xl dark:text-white text-black leading-tight">
                  {exp.role}
                </h3>
                <p className="mt-1 text-sm font-semibold text-yellow-600 dark:text-violet-300">
                  {exp.company}
                </p>
              </div>
            </div>

            {/* Tech tags */}
            <div className="mt-5 flex flex-wrap gap-2">
              {meta.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border dark:border-white/10 border-black/10 dark:bg-white/[0.04] bg-black/[0.03] px-2.5 py-1 text-[11px] font-medium dark:text-white/75 text-black/70 transition-colors group-hover:border-yellow-500/30 dark:group-hover:border-violet-400/35"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Metrics strip */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              {meta.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl border dark:border-white/8 border-black/8 dark:bg-white/[0.03] bg-black/[0.025] px-4 py-3 text-center"
                >
                  <p
                    className={`bg-gradient-to-r ${meta.gradient} bg-clip-text text-lg font-bold text-transparent`}
                  >
                    {metric.value}
                  </p>
                  <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider dark:text-white/45 text-black/45">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {exp.highlights.map((highlight, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.12 + idx * 0.04, duration: 0.35 }}
                  className="flex gap-2.5 rounded-xl dark:bg-white/[0.025] bg-black/[0.02] p-3 text-[13px] leading-relaxed dark:text-white/78 text-black/72 border dark:border-white/[0.04] border-black/[0.04]"
                >
                  <span
                    className={`mt-1.5 size-2 shrink-0 rounded-full bg-gradient-to-r ${meta.gradient}`}
                    aria-hidden
                  />
                  <span>{highlight}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Bottom shine on hover */}
          <div
            className={`pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent opacity-0 transition-opacity duration-500 dark:via-violet-400/60 ${hovered ? 'opacity-100' : ''}`}
            aria-hidden
          />
        </div>
      </motion.div>
    </motion.article>
  )
}

export default function Experience() {
  const t = useTranslations('Experience')
  const experiences = [
    {
      company: t('kodejams.company'),
      role: t('kodejams.role'),
      period: t('kodejams.period'),
      highlights: [
        t('kodejams.highlight1'),
        t('kodejams.highlight2'),
        t('kodejams.highlight3'),
        t('kodejams.highlight4'),
        t('kodejams.highlight5'),
        t('kodejams.highlight6'),
      ],
    },
    {
      company: t('mvmBusiness.company'),
      role: t('mvmBusiness.role'),
      period: t('mvmBusiness.period'),
      highlights: [
        t('mvmBusiness.highlight1'),
        t('mvmBusiness.highlight2'),
        t('mvmBusiness.highlight3'),
        t('mvmBusiness.highlight4'),
        t('mvmBusiness.highlight5'),
        t('mvmBusiness.highlight6'),
      ],
    },
    {
      company: t('jspiders.company'),
      role: t('jspiders.role'),
      period: t('jspiders.period'),
      highlights: [
        t('jspiders.highlight1'),
        t('jspiders.highlight2'),
        t('jspiders.highlight3'),
        t('jspiders.highlight4'),
      ],
    },
    {
      company: t('goodSamaritans.company'),
      role: t('goodSamaritans.role'),
      period: t('goodSamaritans.period'),
      highlights: [
        t('goodSamaritans.highlight1'),
        t('goodSamaritans.highlight2'),
        t('goodSamaritans.highlight3'),
      ],
    },
  ]

  const { yearsLabel, companies } = getExperienceStats()

  const stats = [
    { value: yearsLabel, label: t('stats.years') },
    { value: String(companies), label: t('stats.companies') },
    { value: '100+', label: t('stats.apis') },
    { value: '10K+', label: t('stats.users') },
  ]

  return (
    <section id="experience" className="relative overflow-hidden py-12 lg:py-24">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute left-1/2 top-0 size-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/10 blur-[100px] dark:bg-violet-500/15" />
        <div className="absolute bottom-0 left-0 size-[400px] -translate-x-1/3 translate-y-1/3 rounded-full bg-orange-400/8 blur-[90px] dark:bg-purple-600/12" />
        <div className="absolute bottom-1/4 right-0 size-[360px] translate-x-1/3 rounded-full bg-amber-300/10 blur-[80px] dark:bg-indigo-500/10" />
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
          <div className="size-[620px] hero-circles left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 opacity-40" />
        </div>
      </div>

      <div className="container">
        <div className="relative">
          <SectionHeader
            eyebrow={t('sectionHeader.header')}
            title={t('sectionHeader.title')}
            description={t('sectionHeader.description')}
          />
          <div
            className="mt-6 mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 dark:from-violet-300 dark:via-purple-300 dark:to-violet-300"
            aria-hidden
          />
        </div>

        {/* Stats ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4 lg:mt-12"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="group relative overflow-hidden rounded-2xl border dark:border-white/10 border-black/10 dark:bg-gray-900/50 bg-brown2/80 p-4 text-center backdrop-blur-sm transition-colors hover:border-yellow-500/30 dark:hover:border-violet-400/30"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-yellow-400/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100 dark:from-violet-400/10" />
              <p className="relative font-serif text-2xl font-bold bg-gradient-to-r from-yellow-600 to-orange-500 dark:from-violet-300 dark:to-purple-400 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="relative mt-1 text-[10px] font-semibold uppercase tracking-widest dark:text-white/50 text-black/50">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto mt-14 max-w-6xl lg:mt-20">
          {/* Glowing center spine — desktop */}
          <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 md:block" aria-hidden>
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/80 via-yellow-500/25 to-transparent dark:from-violet-400/80 dark:via-violet-400/25" />
            <motion.div
              className="absolute left-1/2 top-0 w-24 -translate-x-1/2 bg-gradient-to-b from-yellow-400/40 via-transparent to-transparent blur-md dark:from-violet-400/40"
              animate={{ top: ['0%', '100%'], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              style={{ height: '30%' }}
            />
          </div>

          <ul className="flex flex-col gap-12 lg:gap-16">
            {experiences.map((exp, index) => {
              const meta = EXPERIENCE_META[index]
              const side: 'left' | 'right' = index % 2 === 0 ? 'right' : 'left'
              const isCurrent = index === 0

              return (
                <li
                  key={exp.company}
                  className="relative md:grid md:grid-cols-[1fr_auto_1fr] md:items-center"
                >
                  {/* Mobile timeline rail */}
                  <div className="absolute left-[15px] top-0 bottom-0 w-px bg-gradient-to-b from-yellow-400/60 to-yellow-500/10 dark:from-violet-400/60 dark:to-violet-400/10 md:hidden" aria-hidden />

                  {/* Center node — desktop */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: 'spring', stiffness: 260, damping: 18 }}
                    className="relative z-10 mx-auto hidden md:flex md:col-start-2 md:row-start-1 size-14 items-center justify-center"
                  >
                    <span
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${meta.gradient} opacity-25 blur-md`}
                    />
                    <div
                      className={`relative flex size-12 items-center justify-center rounded-full bg-gradient-to-br ${meta.gradient} font-bold text-xs text-gray-950 shadow-lg ring-4 ring-brown1 dark:ring-gray-950`}
                    >
                      {meta.abbr}
                      {isCurrent && (
                        <span className="absolute -right-0.5 -top-0.5 size-3 rounded-full border-2 border-brown1 bg-emerald-400 dark:border-gray-950" />
                      )}
                    </div>
                  </motion.div>

                  {/* Mobile node */}
                  <div className="absolute left-0 top-8 z-10 md:hidden">
                    <div
                      className={`flex size-8 items-center justify-center rounded-full bg-gradient-to-br ${meta.gradient} text-[9px] font-bold text-gray-950 ring-4 ring-brown1 dark:ring-gray-950`}
                    >
                      {meta.abbr}
                    </div>
                  </div>

                  {/* Card — alternates left / right on desktop */}
                  <div
                    className={`pl-12 md:pl-0 md:row-start-1 ${
                      side === 'left'
                        ? 'md:col-start-1 md:pr-10'
                        : 'md:col-start-3 md:pl-10'
                    }`}
                  >
                    <ExperienceCard
                      exp={exp}
                      meta={meta}
                      isCurrent={isCurrent}
                      side={side}
                      index={index}
                      currentLabel={t('current')}
                    />
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
