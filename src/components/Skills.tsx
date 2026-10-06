'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { SKILLS, TOOLBOX } from '@/src/data/skills'

export default function Skills() {
  const t = useTranslations('About')

  return (
    <div className="px-6 pb-6 pt-2 flex flex-col gap-3.5">
      {SKILLS.map((skill, i) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: i * 0.04, duration: 0.35 }}
        >
          <div className="flex justify-between text-sm font-medium mb-1.5">
            <span className="dark:text-white/90 text-black/90">{skill.name}</span>
            <span className="text-yellow-600 dark:text-violet-400 font-mono text-xs">
              {skill.pct}%
            </span>
          </div>
          <div className="h-2 rounded-full dark:bg-white/10 bg-black/10 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 dark:from-violet-400 dark:to-violet-600"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.pct}%` }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.75,
                delay: i * 0.07,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            />
          </div>
        </motion.div>
      ))}

      <div className="mt-3 pt-4 border-t dark:border-white/10 border-black/10">
        <h4 className="text-xs font-semibold uppercase tracking-wider dark:text-white/60 text-black/60 mb-3">
          {t('skills.alsoWorkingWith')}
        </h4>
        <ul className="flex flex-wrap gap-2">
          {TOOLBOX.map((tool) => (
            <li
              key={tool}
              className="text-xs px-3 py-1.5 rounded-full dark:bg-white/10 bg-black/5 dark:text-white/80 text-black/75 border dark:border-white/10 border-black/10 transition-colors hover:border-yellow-500/40 dark:hover:border-violet-400/40"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
