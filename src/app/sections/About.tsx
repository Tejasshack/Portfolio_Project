"use client";

import Card from "@/src/components/Card";
import SectionHeader from "@/src/components/SectionHeader";
import CardHeader from "@/src/components/CardHeader";
import Skills from "@/src/components/Skills";
import RotatingBookCovers from "@/src/components/RotatingBookCovers";
import LinkedinIcon from "@/src/assets/icons/linkedin.svg";
import GithubIcon from "@/src/assets/icons/github.svg";
import EnvelopeIcon from "@/src/assets/icons/envelope.svg";
import ArrowDiagonal from "@/src/assets/icons/arrow-diag.svg";
import { useTranslations } from "next-intl";

const CONNECT_LINKS = [
  {
    key: "linkedin",
    href: "https://www.linkedin.com/in/tejaswi-rastogi-159sb/",
    Icon: LinkedinIcon,
  },
  {
    key: "github",
    href: "https://github.com/Tejasshack",
    Icon: GithubIcon,
  },
  {
    key: "email",
    href: "mailto:tejaswi.dev.666@gmail.com",
    Icon: EnvelopeIcon,
  },
] as const;

export default function About() {
  const t = useTranslations("About");
  const hobbies = [
    { title: t("hobbies.pentesting"), emoji: "🛡️" },
    { title: t("hobbies.automating"), emoji: "⚙️" },
    { title: t("hobbies.gaming"), emoji: "🎮" },
    { title: t("hobbies.reading"), emoji: "📚" },
    { title: t("hobbies.exploring"), emoji: "🧪" },
    { title: t("hobbies.chess"), emoji: "♟️" },
    { title: t("hobbies.hiking"), emoji: "🏔️" },
    { title: t("hobbies.traveling"), emoji: "✈️" },
  ];

  return (
    <section id="about" className="pt-12 pb-12 lg:pt-16 lg:pb-16">
      <div className="container">
        <div className="relative">
          <SectionHeader
            eyebrow={t("sectionHeader.header")}
            title={t("sectionHeader.title")}
            description={t("sectionHeader.description")}
          />
          <div
            className="mt-6 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 dark:from-violet-300 dark:via-purple-300 dark:to-violet-300"
            aria-hidden
          />
        </div>

        <div className="mt-8 flex flex-col gap-6">
          {/* Skills + Books */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            <Card className="lg:col-span-2">
              <CardHeader
                title={t("toolboxCard.title")}
                description={t("toolboxCard.description")}
                className="px-6 pt-6 pb-3"
              />
              <Skills />
            </Card>
            <RotatingBookCovers />
          </div>

          {/* Hobbies, Education, Connect */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-0 flex flex-col md:col-span-2 lg:col-span-1">
              <CardHeader
                title={t("hobbies.hobbiesCard.title")}
                description={t("hobbies.hobbiesCard.description")}
                className="px-6 pt-6 pb-4"
              />
              <div className="px-6 pb-6 flex flex-wrap gap-2.5">
                {hobbies.map((hobby) => (
                  <span
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-yellow-300 to-yellow-400 dark:from-violet-300 dark:to-purple-400 rounded-full text-sm font-medium text-gray-950 shadow-sm"
                  >
                    {hobby.title}
                    <span aria-hidden>{hobby.emoji}</span>
                  </span>
                ))}
              </div>
            </Card>

            <Card className="p-0 flex flex-col">
              <CardHeader
                title={t("education.title")}
                description={t("education.degree")}
                className="px-6 pt-6 pb-3"
              />
              <div className="px-6 pb-6 flex flex-col gap-3 flex-1">
                <div className="space-y-1">
                  <p className="text-sm font-medium dark:text-white/90 text-black/90">
                    {t("education.school")}
                  </p>
                  <p className="text-sm dark:text-white/70 text-black/70">
                    {t("education.period")} · {t("education.cgpa")}
                  </p>
                </div>
                <hr className="border-t dark:border-white/15 border-black/15" />
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wider dark:text-white/60 text-black/60">
                    {t("certifications.title")}
                  </p>
                  <p className="text-sm dark:text-white/90 text-black/90 flex items-center gap-2">
                    <span className="text-base" aria-hidden>
                      🏆
                    </span>
                    {t("certifications.aws")}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-0 flex flex-col md:col-span-2 lg:col-span-1">
              <CardHeader
                title={t("connect.title")}
                description={t("connect.description")}
                className="px-6 pt-6 pb-4"
              />
              <div className="px-6 pb-6 flex flex-col gap-2.5">
                {CONNECT_LINKS.map(({ key, href, Icon }) => (
                  <a
                    key={key}
                    href={href}
                    target={key === "email" ? undefined : "_blank"}
                    rel={key === "email" ? undefined : "noreferrer"}
                    className="group flex items-center gap-3 rounded-xl border dark:border-white/10 border-black/10 dark:bg-white/[0.03] bg-black/[0.02] px-4 py-3 transition-all hover:border-yellow-500/40 dark:hover:border-violet-400/40 hover:shadow-md hover:shadow-yellow-500/5 dark:hover:shadow-violet-500/10"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-yellow-300 to-yellow-500 dark:from-violet-300 dark:to-purple-400">
                      <Icon className="size-5 fill-gray-950" />
                    </span>
                    <span className="flex-1 text-sm font-semibold dark:text-white/90 text-black/90">
                      {t(`connect.${key}`)}
                    </span>
                    <ArrowDiagonal className="size-3.5 rotate-45 dark:fill-white/40 fill-black/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:group-hover:fill-violet-300 group-hover:fill-yellow-600" />
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
