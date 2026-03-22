import {
  BrainCircuit,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Zap,
} from "lucide-react";
import Image from "next/image";

const QH88_URL = process.env.NEXT_PUBLIC_QH88_URL ?? "";

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
