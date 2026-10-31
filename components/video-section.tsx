'use client'

import { useLanguage } from '@/lib/language-context'

export function VideoSection() {
  const { t } = useLanguage()

  return (
    <section id="video" className="mx-auto max-w-6xl px-4 py-16 lg:px-6 lg:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-serif text-3xl font-semibold text-navy text-balance md:text-4xl">
          {t.beforeAfter.videoTour.heading}
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
          {t.beforeAfter.videoTour.subtitle}
        </p>
      </div>
      <div className="mx-auto mt-10 max-w-[560px]">
        <video
          className="aspect-square w-full rounded-3xl object-cover shadow-xl"
          src="/videos/clinic-tour-720.mp4"
          poster="/images/clinic-tour-poster.jpg"
          muted
          autoPlay
          loop
          playsInline
          preload="metadata"
        />
      </div>
    </section>
  )
}
