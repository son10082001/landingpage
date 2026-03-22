"use client";

import {
  buttonScaleVariants,
  containerVariants,
  textVariants,
} from "@/ui/_animations";
import StyledButton from "@/ui/styled-button";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const QH88_CTA = process.env.NEXT_PUBLIC_QH88_URL ?? "";

type SlideBase = {
  id: string;
  title: string;
  tagline?: string;
};

const slides: SlideBase[] = [
  {
    id: "bruno",
    title:
      "Tôi là Bruno Fernandes, đại sứ thương hiệu QH88. Cùng tôi chinh phục World Cup!",
  },
  {
    id: "wc1",
    title: "Chiến thắng chưa bao giờ là điều ngẫu nhiên.",
    tagline: "Nó thuộc về những người đã sẵn sàng từ trước.",
  },
  {
    id: "wc2",
    title: "Hãy cùng tôi bước vào nhịp điệu chiến thắng.",
    tagline: "Tốc độ · Chính xác · Phán đoán — trên mọi đấu trường.",
  },
];

function VideoBackdrop({ src, isActive }: { src: string; isActive: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);

  const syncPlayback = useCallback(() => {
    const v = ref.current;
    if (!v) return;
    if (isActive) {
      void v.play().catch(() => {});
    } else {
      v.pause();
    }
  }, [isActive]);

  useEffect(() => {
    syncPlayback();
  }, [syncPlayback]);

  return (
    <video
      ref={ref}
      className="absolute inset-0 h-full w-full object-cover"
      src={src}
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden
    />
  );
}

const Hero = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="relative min-h-svh w-full overflow-hidden bg-gradient-to-br from-[#020617] via-[#0a1628] to-[#051a2e] lg:min-h-screen">
      <div
        className="-left-1/4 pointer-events-none absolute top-1/4 h-[min(80vw,520px)] w-[min(80vw,520px)] rounded-full bg-amber-500/25 blur-[100px]"
        aria-hidden
      />
      <div
        className="-right-1/4 pointer-events-none absolute bottom-1/3 h-[min(70vw,480px)] w-[min(70vw,480px)] rounded-full bg-cyan-500/20 blur-[100px]"
        aria-hidden
      />
      <div
        className="-translate-x-1/2 pointer-events-none absolute top-0 left-1/2 h-64 w-[120%] bg-gradient-to-b from-violet-600/15 to-transparent blur-2xl"
        aria-hidden
      />
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        speed={900}
        loop
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass:
            "hero-bullet inline-block h-2 w-2 rounded-full bg-white/30 ring-1 ring-white/20 transition-all duration-300 md:h-2.5 md:w-2.5",
          bulletActiveClass:
            "!w-8 !max-h-2.5 !rounded-full !bg-gradient-to-r !from-amber-400 !via-yellow-300 !to-cyan-400 !opacity-100 !shadow-[0_0_16px_rgba(251,191,36,0.55)] md:!max-h-3",
        }}
        onSlideChange={(s) => setActive(s.realIndex)}
        className="hero-swiper h-[100svh] min-h-[560px] w-full"
      >
        <SwiperSlide className="!h-full">
          <div className="relative h-full min-h-[100svh] w-full">
            <VideoBackdrop src="/video-wc2.mp4" isActive={active === 0} />
            <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/92 via-blue-950/55 to-violet-600/5" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/86 via-transparent to-amber-900/25" />
            <SlideCopy slide={slides[1]} />
          </div>
        </SwiperSlide>
        <SwiperSlide className="!h-full">
          <div className="relative h-full min-h-[100svh] w-full">
            <Image
              src="/images/bruno.png"
              alt="Bruno Fernandes — QH88"
              className="absolute inset-0 h-full w-full object-cover object-top md:object-center"
              fill
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/92 via-indigo-950/50 to-amber-900/20" />
            <div className="absolute inset-0 bg-heroOverlay opacity-95" />
            <SlideCopy slide={slides[0]} />
          </div>
        </SwiperSlide>
        <SwiperSlide className="!h-full">
          <div className="relative h-full min-h-[100svh] w-full">
            <VideoBackdrop src="/video-wc1.mp4" isActive={active === 2} />
            <div className="absolute inset-0 bg-gradient-to-l from-[#020617]/90 via-cyan-950/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/88 via-amber-950/15 to-cyan-950/30" />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-fuchsia-600/10 to-amber-500/10" />
            <SlideCopy slide={slides[2]} emphasizeCta />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

function SlideCopy({
  slide,
  emphasizeCta,
}: {
  slide: SlideBase;
  emphasizeCta?: boolean;
}) {
  return (
    <motion.div
      className="app-container pointer-events-none relative z-10 flex h-full min-h-[100svh] flex-col items-center justify-end pt-navbar pb-28 text-center md:justify-center md:pb-20 md:text-left"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="pointer-events-auto flex max-w-[920px] flex-col items-center md:items-start">
        {slide.tagline ? (
          <motion.p
            className="mb-3 bg-gradient-to-r from-amber-200 via-yellow-200 to-cyan-200 bg-clip-text font-semibold text-transparent text-xs uppercase tracking-[0.2em] drop-shadow-[0_0_24px_rgba(251,191,36,0.35)] md:text-sm"
            variants={textVariants}
          >
            {slide.tagline}
          </motion.p>
        ) : null}
        <motion.h1
          className="font-bold text-2xl leading-tight md:text-4xl lg:text-5xl lg:leading-[1.15]"
          variants={textVariants}
        >
          <span className="bg-gradient-to-r from-white via-amber-100 to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_2px_32px_rgba(34,211,238,0.2)]">
            {slide.title}
          </span>
        </motion.h1>
        <motion.div
          className={`mt-8 ${emphasizeCta ? "md:mt-10" : ""}`}
          variants={buttonScaleVariants}
        >
          <StyledButton
            variant={emphasizeCta ? "solid" : "outline"}
            className={
              emphasizeCta
                ? "border-0 bg-gradient-to-r from-amber-400 via-yellow-400 to-cyan-400 text-black shadow-[0_8px_32px_rgba(251,191,36,0.45),0_0_0_1px_rgba(255,255,255,0.15)_inset] hover:brightness-110"
                : "border-amber-300/50 text-white shadow-[0_0_24px_rgba(34,211,238,0.12)] hover:border-cyan-300/60 hover:bg-gradient-to-r hover:from-cyan-500/15 hover:to-amber-500/10"
            }
            onClick={() => {
              if (QH88_CTA.startsWith("http")) {
                window.open(QH88_CTA, "_blank", "noopener,noreferrer");
              }
            }}
          >
            Cùng QH88 — World Cup
          </StyledButton>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Hero;
