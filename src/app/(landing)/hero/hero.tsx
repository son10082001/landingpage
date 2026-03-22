'use client';

import { buttonScaleVariants, containerVariants, textVariants } from '@/ui/_animations';
import StyledButton from '@/ui/styled-button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const QH88_CTA = process.env.NEXT_PUBLIC_QH88_URL ?? '';

type SlideBase = {
  id: string;
  title: string;
  tagline?: string;
};

const slides: SlideBase[] = [
  {
    id: 'bruno',
    title: 'Tôi là Bruno Fernandes, đại sứ thương hiệu QH88. Cùng tôi chinh phục World Cup!',
  },
  {
    id: 'wc1',
    title: 'Chiến thắng chưa bao giờ là điều ngẫu nhiên.',
    tagline: 'Nó thuộc về những người đã sẵn sàng từ trước.',
  },
  {
    id: 'wc2',
    title: 'Hãy cùng tôi bước vào nhịp điệu chiến thắng.',
    tagline: 'Tốc độ · Chính xác · Phán đoán — trên mọi đấu trường.',
  },
];

function VideoBackdrop({
  src,
  isActive,
}: {
  src: string;
  isActive: boolean;
}) {
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
      className='absolute inset-0 h-full w-full object-cover'
      src={src}
      muted
      loop
      playsInline
      preload='metadata'
      aria-hidden
    />
  );
}

const Hero = () => {
  const [active, setActive] = useState(0);

  return (
    <section className='relative min-h-svh w-full overflow-hidden bg-[#00091f] lg:min-h-screen'>
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect='fade'
        speed={900}
        loop
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass:
            'hero-bullet inline-block h-2 w-2 rounded-full bg-white/35 transition-all duration-300 md:h-2.5 md:w-2.5',
          bulletActiveClass: '!w-8 !bg-amber-400 !opacity-100',
        }}
        onSlideChange={(s) => setActive(s.realIndex)}
        className='hero-swiper h-[100svh] min-h-[560px] w-full'
      >
        <SwiperSlide className='!h-full'>
          <div className='relative h-full min-h-[100svh] w-full'>
            <Image
              src='/images/bruno.png'
              alt='Bruno Fernandes — QH88'
              className='absolute inset-0 h-full w-full object-cover object-top md:object-center'
              fill
              priority
              sizes='100vw'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-[#00091f]/95 via-[#00091f]/45 to-[#00091f]/25' />
            <div className='absolute inset-0 bg-heroOverlay opacity-90' />
            <SlideCopy slide={slides[0]} />
          </div>
        </SwiperSlide>

        <SwiperSlide className='!h-full'>
          <div className='relative h-full min-h-[100svh] w-full'>
            <VideoBackdrop src='/video-wc1.mp4' isActive={active === 1} />
            <div className='absolute inset-0 bg-gradient-to-r from-[#00091f]/90 via-[#00091f]/55 to-transparent' />
            <div className='absolute inset-0 bg-gradient-to-t from-[#00091f]/85 via-transparent to-[#00091f]/30' />
            <SlideCopy slide={slides[1]} />
          </div>
        </SwiperSlide>

        <SwiperSlide className='!h-full'>
          <div className='relative h-full min-h-[100svh] w-full'>
            <VideoBackdrop src='/video-wc2.mp4' isActive={active === 2} />
            <div className='absolute inset-0 bg-gradient-to-l from-[#00091f]/88 via-[#00091f]/45 to-transparent' />
            <div className='absolute inset-0 bg-gradient-to-t from-[#00091f]/90 via-[#00091f]/25 to-[#00091f]/35' />
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
      className='app-container pointer-events-none relative z-10 flex h-full min-h-[100svh] flex-col items-center justify-end pt-navbar pb-28 text-center md:justify-center md:pb-20 md:text-left'
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <div className='pointer-events-auto flex max-w-[920px] flex-col items-center md:items-start'>
        {slide.tagline ? (
          <motion.p
            className='mb-3 font-medium text-amber-300/95 text-xs uppercase tracking-[0.2em] md:text-sm'
            variants={textVariants}
          >
            {slide.tagline}
          </motion.p>
        ) : null}
        <motion.h1
          className='font-bold text-2xl leading-tight md:text-4xl lg:text-5xl lg:leading-[1.15]'
          variants={textVariants}
        >
          <span className='bg-gradient-to-r from-white via-white to-white/85 bg-clip-text text-transparent'>
            {slide.title}
          </span>
        </motion.h1>
        <motion.div className={`mt-8 ${emphasizeCta ? 'md:mt-10' : ''}`} variants={buttonScaleVariants}>
          <StyledButton
            variant={emphasizeCta ? 'solid' : 'outline'}
            className={
              emphasizeCta
                ? 'border-0 bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-amber-900/40 shadow-lg hover:brightness-110'
                : 'border-white/80 text-white hover:bg-white/10'
            }
            onClick={() => {
              if (QH88_CTA.startsWith('http')) {
                window.open(QH88_CTA, '_blank', 'noopener,noreferrer');
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
