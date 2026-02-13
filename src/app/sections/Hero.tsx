'use client'

import heroPhoto from '@/src/assets/tejaswi-hero.png'
import Image from 'next/image'
import whiteNoise from '@/src/assets/WhiteNoise.jpg'
import HeroSolarSystem from '@/src/components/HeroSolarSystem'
import HeroButtons from '@/src/components/HeroButtons'
import HeroLargeThemeSvg from '@/src/components/HeroLargeThemeSvg'
import HeroSmallThemeSvg from '@/src/components/HeroSmallThemeSvg'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const photoVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export default function Hero() {
  const t = useTranslations('Homepage')

  return (
    <section className="py-14 md:py-24 lg:py-32 relative z-0 overflow-x-clip">
      <div
        id="home"
        className="absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]"
      >
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${whiteNoise.src})` }}
        />
        <div className="size-[620px] hero-circles" />
        <div className="size-[820px] hero-circles" />
        <div className="size-[1020px] hero-circles" />
        <div className="size-[1220px] hero-circles" />
        <HeroSolarSystem size={440} rotation={76} shouldOrbit orbitDuration="14s" shouldSpin spinDuration="3s">
          <HeroSmallThemeSvg darkClassName="size-8 text-violet-300/20" lightClassName="size-8 text-yellow-400/30" />
        </HeroSolarSystem>
        <HeroSolarSystem size={430} rotation={-13} shouldOrbit orbitDuration="27s" shouldSpin spinDuration="3s">
          <HeroSmallThemeSvg darkClassName="size-8 text-violet-300/20" lightClassName="size-8 text-yellow-400/30" />
        </HeroSolarSystem>
        <HeroSolarSystem size={520} rotation={-42} shouldOrbit orbitDuration="30s">
          <div className="size-2 rounded-full dark:bg-violet-300/20 bg-yellow-400/30" />
        </HeroSolarSystem>
        <HeroSolarSystem size={550} rotation={21} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="7s">
          <HeroLargeThemeSvg darkClassName="size-12 text-violet-300" lightClassName="size-12 text-yellow-400" />
        </HeroSolarSystem>
        <HeroSolarSystem size={800} rotation={-72} shouldOrbit orbitDuration="51s" shouldSpin spinDuration="6s">
          <HeroLargeThemeSvg darkClassName="size-28 text-violet-300" lightClassName="size-28 text-yellow-400" />
        </HeroSolarSystem>
      </div>

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[70vh] lg:min-h-[65vh]">
          {/* Content column - Name & Description on LEFT */}
          <motion.div
            className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex">
              <div className="inline-flex dark:bg-gray-950 bg-brown3 border dark:border-gray-800 border-brown5/50 px-4 py-1.5 items-center gap-3 rounded-full">
                <div className="relative bg-yellow-500 size-2.5 rounded-full">
                  <div className="absolute bg-yellow-500 inset-0 rounded-full animate-ping-lg" />
                </div>
                <span className="text-sm font-medium dark:text-white text-black">{t('availability')}</span>
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl mt-6 tracking-tight leading-tight bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 dark:from-violet-300 dark:via-purple-300 dark:to-violet-300 bg-clip-text text-transparent"
            >
              {t('title')}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-4 max-w-md dark:text-white/70 text-black/70 text-base md:text-lg leading-relaxed"
            >
              {t('description')}
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8">
              <HeroButtons />
            </motion.div>
          </motion.div>

          {/* Photo column - Image on RIGHT */}
          <motion.div
            className="relative flex justify-center lg:justify-start order-1 lg:order-2"
            variants={photoVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Glow effect */}
              <div className="absolute -inset-6 bg-gradient-to-r from-yellow-400/30 via-yellow-500/30 to-yellow-400/30 dark:from-violet-300/25 dark:via-purple-300/25 dark:to-violet-300/25 rounded-[2rem] blur-2xl" />
              {/* Gradient border ring */}
              <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-400 dark:from-violet-300 dark:via-purple-300 dark:to-violet-300 p-[3px]">
                <div className="relative w-full h-full overflow-hidden rounded-[1.2rem] bg-gray-900 dark:bg-gray-950">
                <Image
                  src={heroPhoto}
                  alt="Tejaswi Rastogi - Full-Stack Developer"
                  fill
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 384px"
                  className="object-cover object-top"
                  priority
                />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
