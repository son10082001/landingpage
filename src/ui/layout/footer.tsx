"use client";

import { navLinkItems } from "@/ui/layout/navbar";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const legalLinks = [
  { label: "Chính sách bảo mật", href: "#" },
  { label: "Điều khoản sử dụng", href: "#" },
  { label: "Cá cược có trách nhiệm", href: "#" },
];

const supportLinks = [
  { label: "Trung tâm trợ giúp", href: "#" },
  { label: "Liên hệ hỗ trợ", href: "#" },
  { label: "Câu hỏi thường gặp", href: "#" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-white/10 border-t bg-[#020814] text-white/85">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"
      />

      <div className="app-container relative py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block">
              <Image
                src="/images/qh88-logo.png"
                width={160}
                height={40}
                className="h-10 w-auto"
                alt="QH88"
              />
            </Link>
            <p className="mt-5 max-w-md text-pretty text-sm text-white/70 leading-relaxed">
              Đối tác World Cup — cùng Bruno Fernandes chinh phục từng khoảnh
              khắc. Trải nghiệm thể thao & giải trí trực tuyến với giao diện
              hiện đại, tốc độ và độ tin cậy.
            </p>
            <a
              href="mailto:support@qh88.example"
              className="mt-6 inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4 shrink-0 text-white/70" aria-hidden />
              <span>support@qh88.example</span>
            </a>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
            <div>
              <h2 className="mb-4 font-semibold text-amber-500/95 text-xs uppercase tracking-[0.2em]">
                Khám phá
              </h2>
              <ul className="flex flex-col gap-3">
                {navLinkItems.map((item) => {
                  const href = typeof item.href === "string" ? item.href : "/";
                  return (
                    <li key={item.label}>
                      <Link
                        href={href}
                        className="text-sm text-white/75 transition-colors hover:text-amber-400"
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <h2 className="mb-4 font-semibold text-amber-500/95 text-xs uppercase tracking-[0.2em]">
                Hỗ trợ
              </h2>
              <ul className="flex flex-col gap-3">
                {supportLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-white/75 transition-colors hover:text-amber-400"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sm:col-span-2 lg:col-span-1">
              <h2 className="mb-4 font-semibold text-amber-500/95 text-xs uppercase tracking-[0.2em]">
                Pháp lý
              </h2>
              <ul className="flex flex-col gap-3">
                {legalLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-white/75 transition-colors hover:text-amber-400"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-white/10 border-t pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-white/50 text-xs md:text-sm">
            © {year} QH88. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs md:text-sm">
            <a
              href="#"
              className="text-white/55 transition-colors hover:text-amber-400"
            >
              Cookies
            </a>
            <a
              href="#"
              className="text-white/55 transition-colors hover:text-amber-400"
            >
              Sitemap
            </a>
            <a
              href="#"
              className="text-white/55 transition-colors hover:text-amber-400"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
