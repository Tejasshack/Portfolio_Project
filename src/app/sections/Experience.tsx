'use client'

import SectionHeader from '@/src/components/SectionHeader'
import Card from '@/src/components/Card'
import CheckmarkIcon from '@/src/assets/icons/checkmark.svg'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'

const cardVariants = {
  hidden: (side: 'left' | 'right') => ({
    opacity: 0,
    x: side === 'left' ? -48 : 48,
    y: 24,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const dotVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const listItemVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.1 + i * 0.06, duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function Experience() {
  const t = useTranslations('Experience')
  const experiences = [
    {
      company: t('neuviaCortex.company'),
      role: t('neuviaCortex.role'),
      period: t('neuviaCortex.period'),
      highlights: [
        t('neuviaCortex.highlight1'),
        t('neuviaCortex.highlight2'),
        t('neuviaCortex.highlight3'),
        t('neuviaCortex.highlight4'),
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

  return (
    <div id="experience" className="py-12 lg:py-20">
      <div className="container">
        <SectionHeader
          eyebrow={t('sectionHeader.header')}
          title={t('sectionHeader.title')}
          description={t('sectionHeader.description')}
        />

        {/* Vertical timeline layout – Awwwards-style alternating cards */}
        <div className="relative mt-12 lg:mt-16">
          {/* Central timeline line */}
          <div
            className="absolute left-[11px] top-0 bottom-0 w-px md:left-1/2 md:-translate-x-px bg-gradient-to-b from-yellow-400/70 via-yellow-500/40 dark:via-violet-400/50 to-transparent"
            aria-hidden
          />

          <ul className="flex flex-col gap-8 md:gap-4">
            {experiences.map((exp, index) => {
              const side = index % 2 === 0 ? 'right' : 'left'
              return (
                <li
                  key={exp.company}
                  className="relative flex flex-col md:flex-row md:items-stretch gap-6 md:gap-0 md:min-h-[220px]"
                >
                  {/* Spacer: empty half on desktop (left when card right, right when card left) */}
                  <div
                    className={`hidden md:block md:w-[calc(50%-28px)] ${side === 'right' ? 'md:order-1' : 'md:order-2'}`}
                    aria-hidden
                  />

                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-0 top-6 sm:top-8 md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-10 flex items-center justify-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={dotVariants}
                    transition={{ delay: index * 0.12 }}
                  >
                    <span
                      className="h-3 w-3 rounded-full bg-yellow-500 dark:bg-violet-400 shadow-lg ring-4 ring-white dark:ring-gray-950 shrink-0"
                      aria-hidden
                    />
                  </motion.div>

                  {/* Card – alternating left/right on desktop */}
                  <motion.div
                    className={`w-full pl-8 sm:pl-10 md:pl-0 md:w-[calc(50%-28px)] ${side === 'left' ? 'md:order-1 md:pr-8 md:text-right' : 'md:order-2 md:pl-8 md:text-left'}`}
                    custom={side}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={cardVariants}
                    transition={{ delay: index * 0.12 + 0.05 }}
                  >
                    <motion.div
                      whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.25 } }}
                      className="h-full group"
                    >
                      <Card className="relative p-6 md:p-8 h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/10 dark:hover:shadow-violet-400/15 dark:hover:ring-1 dark:hover:ring-violet-400/30 hover:ring-1 hover:ring-yellow-500/30 rounded-3xl">
                        {/* Accent bar – left edge (or right edge for left-side cards on desktop) */}
                        <div
                          className={`absolute top-0 bottom-0 w-1 rounded-r-full bg-gradient-to-b from-yellow-400 to-yellow-600 dark:from-violet-400 dark:to-violet-600 opacity-90 ${side === 'left' ? 'right-0 left-auto rounded-r-none rounded-l-full' : 'left-0'}`}
                          aria-hidden
                        />
                        <div className="relative z-0 flex flex-col flex-1">
                          {/* Period pill */}
                          <span
                            className={`inline-flex self-start px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider dark:text-white/70 text-black/60 dark:bg-white/10 bg-black/5 md:whitespace-nowrap mb-4 ${side === 'left' ? 'md:self-end' : ''}`}
                          >
                            {exp.period}
                          </span>
                          {/* Role & company */}
                          <div
                            className={`flex flex-col md:flex-row md:justify-between md:items-start gap-2 ${side === 'left' ? 'md:flex-row-reverse' : ''}`}
                          >
                            <div className={side === 'left' ? 'md:text-right' : ''}>
                              <h3 className="font-serif text-xl md:text-2xl dark:text-white text-black leading-tight">
                                {exp.role}
                              </h3>
                              <p className="text-sm font-semibold text-yellow-600 dark:text-violet-400 mt-1.5">
                                {exp.company}
                              </p>
                            </div>
                          </div>
                          {/* Divider */}
                          <hr className="my-4 border-0 h-px bg-gradient-to-r dark:from-white/10 from-black/10 dark:to-transparent to-transparent" />
                          {/* Highlights with staggered animation */}
                          <ul
                            className={`flex flex-col gap-3 mt-1 ${side === 'left' ? 'md:items-end' : ''}`}
                          >
                            {exp.highlights.map((highlight, idx) => (
                              <motion.li
                                key={idx}
                                custom={idx}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                variants={listItemVariants}
                                className={`flex gap-3 text-sm md:text-base dark:text-white/80 text-black/75 leading-relaxed ${side === 'left' ? 'md:flex-row-reverse' : ''}`}
                              >
                                <CheckmarkIcon className="size-4 md:size-5 flex-shrink-0 mt-0.5 text-yellow-500 dark:text-violet-400" />
                                <span>{highlight}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </Card>
                    </motion.div>
                  </motion.div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
