"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";

export default function AdPopupModal() {
  const [open, setOpen] = useState(true);

  const ad = useMemo(
    () => ({
      imageSrc: "/images/bruno.png",
      title: "Chạy cùng chiến dịch World Cup",
      subtitle: "Bấm để mở gói ưu đãi theo thời điểm trận đấu",
      ctaHref: "/#uu-dai",
      ctaText: "Nhận ưu đãi",
    }),
    []
  );

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const close = () => {
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      aria-hidden={false}
      className="fixed inset-0 z-50 flex items-center justify-center px-4 py-10"
      role="dialog"
      aria-modal="true"
      aria-label="Quảng cáo"
    >
      <button
        type="button"
        aria-label="Đóng quảng cáo"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={close}
      />

      <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-[#020617] shadow-[0_25px_90px_rgba(0,0,0,0.7),0_0_48px_rgba(251,191,36,0.12)]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 animate-[pulse_1.8s_ease-in-out_infinite] rounded-3xl border border-amber-400/25"
        />
        <div className="absolute top-3 right-3 z-10">
          <button
            type="button"
            onClick={close}
            className="inline-flex h-11 w-11 animate-[pulse_3s_ease-in-out_infinite] items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-colors hover:border-white/25 hover:bg-white/10"
            aria-label="Tắt"
          >
            <span aria-hidden className="text-xl leading-none">
              ×
            </span>
          </button>
        </div>

        <div className="relative aspect-[16/9] h-auto min-h-[300px] w-full">
          <Image
            src={ad.imageSrc}
            alt={ad.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
            <p className="animate-[pulse_1.8s_ease-in-out_infinite] font-semibold text-amber-400/95 text-xs uppercase tracking-[0.2em]">
              Advertisement
            </p>
            <h3 className="mt-2 font-bold text-2xl text-white md:text-3xl">
              {ad.title}
            </h3>
            <p className="mt-2 max-w-2xl text-sm text-white/75 leading-relaxed">
              {ad.subtitle}
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={ad.ctaHref}
                onClick={close}
                className="inline-flex h-12 animate-[pulse_1.6s_ease-in-out_infinite] items-center justify-center rounded-xl bg-gradient-to-r from-amber-400 via-yellow-300 to-cyan-400 px-6 font-medium text-black shadow-[0_0_0_1px_rgba(251,191,36,0.25),0_10px_40px_rgba(251,191,36,0.22)] ring-1 ring-amber-300/40 transition-[filter] hover:brightness-125"
              >
                {ad.ctaText}
              </Link>
              <button
                type="button"
                onClick={close}
                className="inline-flex h-12 animate-[pulse_2.4s_ease-in-out_infinite] items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] px-6 font-medium text-white/80 transition-colors hover:border-white/25 hover:bg-white/[0.07]"
              >
                Tắt quảng cáo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
