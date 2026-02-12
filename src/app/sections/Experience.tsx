import SectionHeader from '@/src/components/SectionHeader'
import Card from '@/src/components/Card'
import CheckmarkIcon from '@/src/assets/icons/checkmark.svg'
import { useTranslations } from 'next-intl'

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
    <div id="experience" className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow={t('sectionHeader.header')}
          title={t('sectionHeader.title')}
          description={t('sectionHeader.description')}
        />
        <div className="mt-12 lg:mt-20 flex flex-col gap-8">
          {experiences.map((exp) => (
            <Card key={exp.company} className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <h3 className="font-serif text-xl md:text-2xl dark:text-white text-black">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-semibold text-amber-600 dark:text-emerald-400 mt-1">
                    {exp.company}
                  </p>
                </div>
                <span className="text-sm dark:text-white/60 text-black/60 md:whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <ul className="flex flex-col gap-3 mt-4">
                {exp.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="flex gap-2 text-sm md:text-base dark:text-white/70 text-black/70"
                  >
                    <CheckmarkIcon className="size-4 md:size-5 flex-shrink-0 mt-0.5 dark:text-emerald-400 text-amber-600" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
