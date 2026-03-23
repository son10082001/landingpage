import {
  ArrowRight,
  BadgePercent,
  BrainCircuit,
  Crown,
  Megaphone,
  ShieldCheck,
  Sparkles,
  Target,
  Ticket,
  TrendingUp,
  Trophy,
  Zap,
} from "lucide-react";
import Image from "next/image";

const QH88_URL = process.env.NEXT_PUBLIC_QH88_URL ?? "";
const isExternalQH88 = QH88_URL.startsWith("http");

const highlights = [
  {
    title: "Tốc độ",
    description:
      "Giao diện tối ưu, thao tác mượt — bạn không bỏ lỡ nhịp trận hay tỷ lệ kịp thời.",
    icon: Zap,
  },
  {
    title: "Chính xác",
    description:
      "Thông tin trận đấu, tỷ số và thống kê được trình bày rõ ràng để bạn quyết định đúng lúc.",
    icon: Target,
  },
  {
    title: "Phán đoán",
    description:
      "Theo dõi diễn biến, phân tích xu hướng và tận hưởng trải nghiệm thể thao có chiều sâu.",
    icon: BrainCircuit,
  },
];

const steps = [
  {
    step: "01",
    title: "Tạo tài khoản",
    text: "Đăng ký nhanh với vài bước, xác minh để bảo vệ tài khoản của bạn.",
  },
  {
    step: "02",
    title: "Nạp & nhận ưu đãi",
    text: "Lựa chọn phương thức thanh toán phù hợp và theo dõi khuyến mãi theo mùa giải.",
  },
  {
    step: "03",
    title: "Vào sân cùng World Cup",
    text: "Xem trực tiếp, đặt cược có trách nhiệm và tận hưởng không khí giải đấu.",
  },
];

const sponsorAds = [
  {
    label: "Ưu đãi theo trận",
    name: "QH88 Premier",
    tagline:
      "Kích hoạt bonus đúng thời điểm trận đấu bắt đầu. Theo dõi gói đang chạy ngay tại đây.",
    imageSrc: "/images/9.jpg",
    orbClass: "bg-amber-500/20",
    dotClass: "bg-amber-400/90",
    cta: "Nhận ưu đãi",
  },
  {
    label: "Flash Deal",
    name: "World Cup Opening",
    tagline:
      "Ưu đãi theo giờ cho trận mở màn. Nhanh tay để không bỏ lỡ deal trong ngày.",
    imageSrc: "/images/7.jpg",
    orbClass: "bg-cyan-500/20",
    dotClass: "bg-cyan-400/90",
    cta: "Xem deal",
  },
  {
    label: "Quyền lợi VIP",
    name: "VIP Club",
    tagline:
      "Quà tặng định kỳ và quyền lợi ưu tiên. Nhận quyền VIP phù hợp lịch của bạn.",
    imageSrc: "/images/5.webp",
    orbClass: "bg-violet-500/20",
    dotClass: "bg-violet-400/90",
    cta: "Mở VIP",
  },
  {
    label: "Săn deal theo ngày",
    name: "Daily Bonus",
    tagline:
      "Mỗi ngày có một deal nổi bật. Chỉ cần chọn gói, kích hoạt và theo dõi cập nhật.",
    imageSrc: "/images/8.webp",
    orbClass: "bg-amber-500/20",
    dotClass: "bg-amber-400/90",
    cta: "Xem bonus",
  },
  {
    label: "Chiến dịch giới thiệu",
    name: "Invite & Win",
    tagline:
      "Rủ bạn cùng vào sân. Nhận quà theo chương trình và theo dõi tiến độ ở trang này.",
    imageSrc: "/images/10.jpg",
    orbClass: "bg-cyan-500/20",
    dotClass: "bg-cyan-400/90",
    cta: "Tham gia",
  },
  {
    label: "Ưu đãi sự kiện",
    name: "Stadium Special",
    tagline:
      "Gói ưu đãi theo sự kiện trong tuần. Tối ưu trải nghiệm và nhận quyền lợi nhanh.",
    imageSrc: "/images/6.jpg",
    orbClass: "bg-violet-500/20",
    dotClass: "bg-violet-400/90",
    cta: "Xem ưu đãi",
  },
];

export default function LandingSections() {
  return (
    <div className="relative">
      <section
        id="dac-diem"
        className="scroll-mt-24 border-white/10 border-t bg-gradient-to-b from-[#020617]/95 via-[#0a1628]/98 to-[#020617] py-16 backdrop-blur-md lg:py-24"
        aria-labelledby="highlights-heading"
      >
        <div className="app-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-semibold text-amber-400/95 text-xs uppercase tracking-[0.2em]">
              Tại sao đồng hành cùng QH88
            </p>
            <h2
              id="highlights-heading"
              className="mt-3 bg-gradient-to-r from-white via-amber-100 to-cyan-200 bg-clip-text font-bold text-2xl text-transparent md:text-3xl"
            >
              Chiến thắng không ngẫu nhiên — mỗi quyết định đều có chuẩn bị
            </h2>
            <p className="mt-4 text-pretty text-sm text-white/70 leading-relaxed md:text-base">
              Đồng hành cùng đại sứ Bruno Fernandes và hàng triệu người hâm mộ
              trên hành trình World Cup: tốc độ, chính xác và phán đoán trên mọi
              đấu trường.
            </p>
          </div>

          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <li key={item.title}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] transition-colors hover:border-amber-500/30 hover:bg-white/[0.05]">
                  <div
                    aria-hidden
                    className="-right-8 -top-8 pointer-events-none absolute h-32 w-32 rounded-full bg-amber-500/10 blur-2xl transition-opacity group-hover:opacity-100"
                  />
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/25 to-cyan-500/20 text-amber-300">
                    <item.icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="relative mt-4 font-semibold text-lg text-white">
                    {item.title}
                  </h3>
                  <p className="relative mt-2 text-pretty text-sm text-white/65 leading-relaxed">
                    {item.description}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="uu-dai"
        className="scroll-mt-24 border-white/10 border-t bg-gradient-to-b from-[#0c1220] via-[#020617] to-[#0c1220] py-16 lg:py-24"
        aria-labelledby="ads-heading"
      >
        <div className="app-container">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <div className="inline-flex animate-[pulse_2.2s_ease-in-out_infinite] items-center gap-2 rounded-full border border-amber-500/25 bg-amber-500/10 px-3 py-1 font-medium text-amber-200/95 text-xs shadow-[0_0_24px_rgba(251,191,36,0.18)] ring-1 ring-amber-300/20">
                <Megaphone className="h-3.5 w-3.5" aria-hidden />
                Ưu đãi đang chạy
              </div>
              <h2
                id="ads-heading"
                className="mt-4 bg-gradient-to-r from-white via-amber-100 to-cyan-200 bg-clip-text font-bold text-2xl text-transparent md:text-3xl"
              >
                Sự kiện theo mùa giải, cập nhật liên tục
              </h2>
              <p className="mt-4 text-pretty text-sm text-white/70 leading-relaxed md:text-base">
                Đây là trang quảng cáo tập trung vào ưu đãi. Bạn có thể chọn một
                gói khuyến mãi phù hợp và nhận thông tin theo từng đợt sự kiện.
              </p>

              <ul className="mt-6 flex flex-col gap-3 text-sm text-white/75">
                <li className="flex gap-2">
                  <BadgePercent
                    className="mt-0.5 h-4 w-4 shrink-0 text-amber-400"
                    aria-hidden
                  />
                  <span>
                    Khuyến mãi theo thời điểm: nhanh, rõ ràng, dễ theo dõi.
                  </span>
                </li>
                <li className="flex gap-2">
                  <TrendingUp
                    className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400"
                    aria-hidden
                  />
                  <span>
                    Nâng cấp trải nghiệm với các lợi ích theo mùa giải.
                  </span>
                </li>
              </ul>

              <div className="mt-8">
                {isExternalQH88 ? (
                  <a
                    href={QH88_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex animate-[pulse_1.6s_ease-in-out_infinite] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-300 to-cyan-400 px-6 py-3 font-medium text-black shadow-[0_0_0_1px_rgba(251,191,36,0.25),0_10px_40px_rgba(251,191,36,0.22)] ring-1 ring-amber-300/40 transition-[filter] hover:brightness-125"
                  >
                    Nhận ưu đãi ngay
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </a>
                ) : (
                  <a
                    href="#uu-dai"
                    className="inline-flex animate-[pulse_2.1s_ease-in-out_infinite] items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.03] px-6 py-3 font-medium text-sm text-white/75 shadow-[0_0_0_1px_rgba(34,211,238,0.18),0_10px_30px_rgba(34,211,238,0.12)] ring-1 ring-cyan-200/20 transition-colors hover:border-cyan-300/60"
                  >
                    Xem gói ưu đãi
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </a>
                )}
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                <AdCard
                  icon={Ticket}
                  title="Nạp lần đầu"
                  badge="Bonus lần đầu"
                  description="Chọn đúng gói, kích hoạt bonus nhanh theo thời điểm bạn tham gia."
                  accent="from-amber-500/20 to-yellow-400/10"
                  cta="Kích hoạt ngay"
                  mediaSrc="/images/1.webp"
                />
                <AdCard
                  icon={Crown}
                  title="Đặc quyền VIP"
                  badge="Hạng VIP"
                  description="Quà tặng định kỳ và ưu đãi riêng cho thành viên VIP."
                  accent="from-cyan-500/20 to-violet-500/10"
                  cta="Xem quyền lợi"
                  mediaSrc="/images/2.webp"
                />
                <AdCard
                  icon={Sparkles}
                  title="Săn deal theo trận"
                  badge="Theo trận"
                  description="Ưu đãi được gợi ý đúng thời điểm trận đấu quan trọng."
                  accent="from-violet-500/20 to-amber-500/10"
                  cta="Xem deal"
                  mediaSrc="/images/3.webp"
                />
                <AdCard
                  icon={Megaphone}
                  title="Chiến dịch giới thiệu"
                  badge="Mời bạn"
                  description="Rủ bạn vào cuộc chơi và nhận quà theo tiến độ chiến dịch."
                  accent="from-cyan-500/20 to-emerald-500/10"
                  cta="Tham gia ngay"
                  mediaSrc="/images/4.jpg"
                />
              </div>

              <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/20 to-cyan-500/15 text-amber-200">
                    <Target className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Chọn đúng ưu đãi</p>
                    <p className="mt-1 text-sm text-white/65 leading-relaxed">
                      Ưu đãi được sắp xếp theo thời điểm và chiến dịch nổi bật
                      trong tuần. Nhấn vào thẻ để xem chi tiết gói đang chạy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="world-cup"
        className="scroll-mt-24 border-white/10 border-t bg-[#020617]/90 py-16 lg:py-24"
        aria-labelledby="wc-heading"
      >
        <div className="app-container">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-green-500/25 bg-green-500/10 px-3 py-1 font-medium text-green-200/95 text-xs">
                <Trophy className="h-3.5 w-3.5" aria-hidden />
                Đối tác hành trình World Cup
              </div>
              <h2
                id="wc-heading"
                className="mt-4 font-bold text-2xl text-white leading-tight md:text-3xl"
              >
                Cùng nhịp điệu giải đấu lớn nhất hành tinh
              </h2>
              <p className="mt-4 text-pretty text-sm text-white/70 leading-relaxed md:text-base">
                Từ vòng bảng đến trận chung kết — theo dõi đội bóng yêu thích,
                cập nhật lịch thi đấu và không khí sân cỏ mọi lúc. QH88 mang đến
                trải nghiệm thể thao trực tuyến gọn gàng, tập trung vào nội dung
                bạn quan tâm.
              </p>
              <ul className="mt-6 flex flex-col gap-3 text-sm text-white/75">
                <li className="flex gap-2">
                  <Sparkles
                    className="mt-0.5 h-4 w-4 shrink-0 text-yellow-400"
                    aria-hidden
                  />
                  <span>
                    Ưu đãi và sự kiện theo mùa giải — luôn cập nhật trên trang
                    khuyến mãi.
                  </span>
                </li>
                <li className="flex gap-2">
                  <ShieldCheck
                    className="mt-0.5 h-4 w-4 shrink-0 text-green-400"
                    aria-hidden
                  />
                  <span>
                    Chơi có trách nhiệm: đặt giới hạn, tìm hiểu luật chơi và chỉ
                    dùng tiền bạn sẵn sàng chi.
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 lg:aspect-auto lg:min-h-[320px]">
              <Image
                src="/images/bruno.png"
                alt="Bruno Fernandes — đại sứ thương hiệu QH88"
                fill
                className="object-cover object-top md:object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-transparent to-[#020617]/20" />
              <p className="absolute right-4 bottom-4 left-4 text-pretty rounded-lg bg-black/45 px-3 py-2 text-white/90 text-xs backdrop-blur-sm">
                &ldquo;Cùng tôi chinh phục World Cup&rdquo; — Bruno Fernandes,
                đại sứ QH88
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="nha-tai-tro"
        className="scroll-mt-24 border-white/10 border-t bg-[#020617] py-16 lg:py-24"
        aria-labelledby="sponsors-heading"
      >
        <div className="app-container">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-semibold text-amber-400/95 text-xs uppercase tracking-[0.2em]">
                Nhà tài trợ & đối tác
              </p>
              <h2
                id="sponsors-heading"
                className="mt-3 bg-gradient-to-r from-white via-amber-100 to-cyan-200 bg-clip-text font-bold text-2xl text-transparent md:text-3xl"
              >
                6 thương hiệu đồng hành cùng World Cup
              </h2>
              <p className="mt-4 max-w-xl text-pretty text-sm text-white/70 leading-relaxed md:text-base">
                Đây là khu banner hiển thị các chiến dịch ưu đãi đang chạy. Nhấn
                vào mỗi thẻ để xem gói phù hợp với thời điểm và sự kiện.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/70">
              <ShieldCheck className="h-4 w-4 text-cyan-300" aria-hidden />
              Vị trí Brand Placement
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sponsorAds.map((ad) => (
              <div
                key={ad.name}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-6"
              >
                <Image
                  src={ad.imageSrc}
                  alt={ad.name}
                  fill
                  className="pointer-events-none absolute inset-0 object-cover opacity-30 saturate-160"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
                <div
                  aria-hidden
                  className={`-right-12 -top-12 pointer-events-none absolute h-32 w-32 rounded-full blur-2xl ${ad.orbClass}`}
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020617]/70 via-transparent to-transparent"
                />

                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-semibold text-white/70 text-xs uppercase tracking-[0.18em]">
                        {ad.label}
                      </p>
                      <p className="mt-2 font-bold text-lg text-white">
                        {ad.name}
                      </p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/20">
                      <div
                        className={`h-2.5 w-2.5 rounded-full ${ad.dotClass}`}
                      />
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-white leading-relaxed">
                    {ad.tagline}
                  </p>

                  <a
                    href="#uu-dai"
                    className="mt-5 inline-flex animate-[pulse_2.0s_ease-in-out_infinite] items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 font-medium text-sm text-white/90 shadow-[0_0_24px_rgba(251,191,36,0.16)] ring-1 ring-amber-300/30 transition-colors hover:border-amber-500/30 hover:bg-white/[0.06]"
                  >
                    {ad.cta}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-r from-amber-500/10 via-cyan-500/10 to-violet-500/10 p-8">
            <div className="grid gap-6 md:grid-cols-2 md:items-center">
              <div>
                <p className="font-semibold text-amber-200/95 text-xs uppercase tracking-[0.2em]">
                  Media & Branding
                </p>
                <p className="mt-3 font-bold text-white/90 text-xl">
                  Banner ưu đãi đang chạy ngay trên trang
                </p>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">
                  Chọn một thẻ ở phần Nhà tài trợ để mở nhanh gói ưu đãi theo
                  thời điểm. Nếu bạn có link chiến dịch QH88, nút bên dưới sẽ
                  chuyển sang trang đối tác.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                {isExternalQH88 ? (
                  <a
                    href={QH88_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex animate-[pulse_1.7s_ease-in-out_infinite] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-300 to-cyan-400 px-6 py-3 font-medium text-black shadow-[0_0_0_1px_rgba(251,191,36,0.22),0_12px_50px_rgba(251,191,36,0.18)] ring-1 ring-amber-300/40 transition-[filter] hover:brightness-125"
                  >
                    Mở chiến dịch
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </a>
                ) : (
                  <a
                    href="#nha-tai-tro"
                    className="inline-flex animate-[pulse_2.3s_ease-in-out_infinite] items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.03] px-6 py-3 font-medium text-sm text-white/75 shadow-[0_0_24px_rgba(34,211,238,0.14)] ring-1 ring-cyan-300/25 transition-colors hover:border-amber-500/40"
                  >
                    Khám phá banner
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </a>
                )}
                <a
                  href="#uu-dai"
                  className="inline-flex animate-[pulse_1.9s_ease-in-out_infinite] items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3 font-medium text-sm text-white/80 shadow-[0_0_24px_rgba(251,191,36,0.14)] ring-1 ring-amber-300/25 transition-colors hover:bg-white/[0.06]"
                >
                  Xem ưu đãi
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-white/10 border-t bg-gradient-to-br from-[#0c1220] to-[#020617] py-16 lg:py-20"
        aria-labelledby="steps-heading"
      >
        <div className="app-container">
          <h2
            id="steps-heading"
            className="text-center font-bold text-2xl text-white md:text-3xl"
          >
            Bắt đầu trong vài phút
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-white/65">
            Ba bước đơn giản để đồng hành cùng cộng đồng và tận hưởng mùa giải.
          </p>
          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <li key={s.step} className="relative flex flex-col items-start">
                <span className="font-bold text-4xl text-amber-400/90 tabular-nums leading-none opacity-90">
                  {s.step}
                </span>
                <h3 className="mt-3 font-semibold text-lg text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-pretty text-sm text-white/65 leading-relaxed">
                  {s.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}

function AdCard({
  icon: Icon,
  badge,
  title,
  description,
  accent,
  cta,
  mediaSrc,
}: {
  icon: typeof Megaphone;
  badge: string;
  title: string;
  description: string;
  accent: string;
  cta: string;
  mediaSrc: string;
}) {
  return (
    <article className="group relative h-full min-h-[200px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <Image
        src={mediaSrc}
        alt={`${badge} - ${title}`}
        fill
        aria-hidden
        className="pointer-events-none absolute inset-0 object-cover opacity-30 saturate-150"
        sizes="(max-width: 1024px) 50vw, 33vw"
      />
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 bottom-0 bg-gradient-to-br ${accent} opacity-0 transition-opacity group-hover:opacity-100`}
      />
      <div className="relative">
        <div className="flex items-center justify-between gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] text-amber-200">
            <Icon className="h-5 w-5" aria-hidden />
          </div>
          <span className="animate-[pulse_1.9s_ease-in-out_infinite] rounded-full border border-white/10 bg-black/20 px-3 py-1 text-white/75 text-xs shadow-[0_0_24px_rgba(251,191,36,0.18)] ring-1 ring-amber-300/25">
            {badge}
          </span>
        </div>
        <h3 className="mt-4 font-bold text-lg text-white">{title}</h3>
        <p className="mt-2 text-sm text-white/65 leading-relaxed">
          {description}
        </p>
        <div className="mt-5 flex items-end">
          <span className="inline-flex animate-[pulse_1.7s_ease-in-out_infinite] items-center gap-2 rounded-xl border border-white/10 bg-red-500 px-4 py-2 text-sm text-white shadow-[0_0_28px_rgba(251,191,36,0.18)] ring-1 ring-amber-300/25 transition-colors hover:brightness-125 group-hover:border-amber-500/30 group-hover:text-white">
            {cta}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </span>
        </div>
      </div>
    </article>
  );
}
