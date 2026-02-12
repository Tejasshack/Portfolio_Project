import type { Metadata } from 'next'
import Head from 'next/head'
import { Inter, Calistoga } from 'next/font/google'
import { twMerge } from 'tailwind-merge'
import { Providers } from '../providers'

// internationalization
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/src/i18n/routing'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const calistoga = Calistoga({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400'],
})

interface MetadataImage {
  url: string
  width?: number
  height?: number
  alt?: string
}
interface WebsiteMetadata {
  title?: string
  description?: string
  openGraph?: {
    url?: string
    title?: string
    description?: string
    images?: MetadataImage[]
    siteName?: string
  }
  twitter?: {
    card?: string
    site?: string
    title?: string
    description?: string
    image?: string
  }
}

export const metadata: WebsiteMetadata = {
  title: 'Tejaswi Rastogi - Full-Stack Developer',
  description:
    "Explore Tejaswi Rastogi's portfolio showcasing Full-Stack development, AdTech platforms, and AI/ML pipelines. React, Node.js, and scalable web solutions.",

  openGraph: {
    url: 'https://github.com/Tejasshack',
    title: 'Tejaswi Rastogi - Full-Stack Developer',
    description: 'A showcase of my Full-Stack development projects, AdTech experience, and technical expertise',
    images: [],
    siteName: 'Tejaswi Rastogi Portfolio',
  },
  // add twitter metadata if needed
  // twitter: {
  //   card: 'summary_large_image',
  //   site: '@yourtwitterhandle',
  //   title: 'My Awesome Portfolio',
  //   description: 'A showcase of my web development projects and skills',
  //   image: 'https://www.myawesomeportfolio.com/twitter-image.jpg',
  // },
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <Head>
        <title>Tejaswi Rastogi - Full-Stack Developer</title>
        <meta
          name="description"
          content="Tejaswi Rastogi - Full-Stack Developer. AdTech platforms, AI/ML pipelines, React, Node.js. Explore my projects and get in touch."
        />
        <link rel="canonical" href="https://github.com/Tejasshack" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Tejaswi Rastogi',
            url: 'https://github.com/Tejasshack',
            sameAs: [
              'https://www.linkedin.com/in/tejaswi-rastogi-159sb/',
              'https://github.com/Tejasshack',
            ],
            email: 'tejaswi.dev.666@gmail.com',
            jobTitle: 'Full-Stack Developer',
            worksFor: { '@type': 'Organization', name: 'Neuvia Cortex Private Limited' },
            alumniOf: {
              '@type': 'CollegeOrUniversity',
              name: 'RKGIT, Ghaziabad',
            },
            description: 'Full-Stack Developer specializing in scalable web applications, AdTech platforms, and AI/ML pipelines.',
          })}
        </script>
      </Head>
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          'dark:bg-gray-900 bg-brown1 text-white antialiased font-sans'
        )}
      >
        {/* wrap our internationalization provider with another theme provider - if any more providers need to make a provider component take props for useTranslation hook to work in client components to avoid translation prop drilling in many components */}
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
