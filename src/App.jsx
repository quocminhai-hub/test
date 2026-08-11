import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Sparkles,
  Zap,
  Brain,
  Workflow,
  Play,
  Star,
  Quote,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl shadow-2xl shadow-black/40 ${className}`}
    >
      {children}
    </div>
  );
}

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-300px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-white/[0.07] blur-[140px]" />
        <div className="absolute right-[-200px] top-[30%] h-[500px] w-[500px] rounded-full bg-white/[0.04] blur-[120px]" />
        <div className="absolute bottom-[-200px] left-[-150px] h-[500px] w-[500px] rounded-full bg-white/[0.04] blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="mx-auto mt-4 max-w-6xl px-5">
          <nav className="flex items-center justify-between rounded-full border border-white/10 bg-black/50 px-5 py-3 backdrop-blur-xl">
            <a href="#" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black">
                <Sparkles size={17} />
              </div>
              <span className="font-semibold tracking-tight">
                AI<span className="text-white/40">.ACADEMY</span>
              </span>
            </a>
            <div className="hidden items-center gap-8 text-sm text-white/60 md:flex">
              <a href="#program" className="transition hover:text-white">Chương trình</a>
              <a href="#results" className="transition hover:text-white">Kết quả</a>
              <a href="#pricing" className="transition hover:text-white">Học phí</a>
            </div>
            <a href="#pricing" className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:bg-white/80">
              Tham gia
            </a>
          </nav>
        </div>
      </header>

      <section className="relative flex min-h-screen items-center px-5 pb-20 pt-36">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_.9fr]">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp} className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/60 backdrop-blur-xl">
                <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
                AI MASTERCLASS 2026
              </motion.div>

              <motion.h1 variants={fadeUp} className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
                Làm chủ AI.
                <br />
                <span className="bg-gradient-to-r from-white via-white/70 to-white/20 bg-clip-text text-transparent">
                  Dẫn đầu tương lai.
                </span>
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-8 max-w-xl text-lg leading-8 text-white/50">
                Một chương trình đào tạo AI chuyên sâu dành cho những người muốn biến AI thành lợi thế thực sự trong công việc, kinh doanh và cuộc sống.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="#pricing" className="group flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-black transition hover:scale-[1.02]">
                  Bắt đầu học ngay
                  <ArrowRight size={18} className="transition group-hover:translate-x-1" />
                </a>
                <a href="#program" className="flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-7 py-4 font-medium text-white backdrop-blur-xl transition hover:bg-white/[0.08]">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20">
                    <Play size={12} fill="currentColor" />
                  </span>
                  Xem chương trình
                </a>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-10 flex items-center gap-6 text-sm text-white/40">
                <div className="flex -space-x-2">
                  {["M", "A", "L", "T"].map((letter, i) => (
                    <div key={i} className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#050505] bg-white/10 text-xs text-white">
                      {letter}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-white">
                    {[1,2,3,4,5].map(i => <Star key={i} size={13} fill="currentColor" />)}
                  </div>
                  <span>1,200+ học viên</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative">
              <div className="absolute inset-0 rounded-full bg-white/[0.08] blur-[100px]" />
              <motion.div animate={{ y: [0, -15, 0], rotate: [0, 1, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="relative">
                <GlassCard className="relative overflow-hidden p-4">
                  <div className="aspect-[4/5] overflow-hidden rounded-[22px] bg-gradient-to-br from-white/[0.12] via-white/[0.03] to-transparent">
                    <div className="flex h-full flex-col justify-between p-7">
                      <div className="flex justify-between">
                        <span className="text-xs tracking-[0.25em] text-white/40">AI / 01</span>
                        <Sparkles size={18} className="text-white/60" />
                      </div>
                      <div>
                        <div className="mb-5 h-px w-20 bg-white/30" />
                        <h2 className="text-4xl font-semibold tracking-tight">THINK<br />DIFFERENT.</h2>
                        <p className="mt-5 max-w-xs text-sm leading-6 text-white/40">
                          AI không thay thế bạn. Người biết sử dụng AI sẽ thay thế những người không biết.
                        </p>
                      </div>
                      <div className="flex items-end justify-between">
                        <span className="text-xs text-white/30">AI ACADEMY</span>
                        <div className="h-16 w-16 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-xl" />
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.06] py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-5 px-5 text-sm uppercase tracking-[0.2em] text-white/20">
          <span>AI WORKFLOW</span><span>PROMPT ENGINEERING</span><span>AI AUTOMATION</span><span>AI BUSINESS</span>
        </div>
      </section>

      <section id="program" className="px-5 py-32">
        <div className="mx-auto max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            <motion.div variants={fadeUp}>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-white/30">The Program</p>
              <h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
                Không học AI.<br /><span className="text-white/30">Học cách dùng AI.</span>
              </h2>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-16 grid gap-5 md:grid-cols-3">
              <Feature icon={<Brain />} number="01" title="AI Thinking" description="Xây dựng tư duy làm việc cùng AI và biết cách phân rã mọi vấn đề thành hệ thống có thể tự động hóa." />
              <Feature icon={<Zap />} number="02" title="Prompt Mastery" description="Tạo prompt chất lượng cao để AI tạo ra kết quả chính xác, nhất quán và có thể tái sử dụng." />
              <Feature icon={<Workflow />} number="03" title="AI Workflow" description="Thiết kế workflow AI giúp giảm hàng chục giờ công việc lặp lại mỗi tuần." />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="results" className="px-5 py-32">
        <div className="mx-auto max-w-6xl">
          <GlassCard className="overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 sm:p-14 lg:p-20">
                <p className="text-sm uppercase tracking-[0.3em] text-white/30">What You Get</p>
                <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                  Một hệ thống AI<br /><span className="text-white/30">dành riêng cho bạn.</span>
                </h2>
                <div className="mt-10 space-y-5">
                  {["30+ bài học AI thực chiến","200+ prompt premium","AI workflow templates","Case study kinh doanh thực tế","Cộng đồng học viên riêng","Cập nhật nội dung trọn đời"].map(item => (
                    <div key={item} className="flex items-center gap-3 text-white/60">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-black"><Check size={14} /></span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative min-h-[450px] overflow-hidden border-t border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent lg:border-l lg:border-t-0">
                <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/[0.03] shadow-[0_0_120px_rgba(255,255,255,0.08)] backdrop-blur-xl" />
                <div className="absolute left-[15%] top-[20%] h-24 w-24 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl" />
                <div className="absolute bottom-[15%] right-[15%] h-32 w-32 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <Sparkles className="mx-auto mb-4" size={34} />
                  <div className="text-2xl font-semibold">AI OS</div>
                  <div className="mt-1 text-sm text-white/30">Your unfair advantage</div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      <section className="px-5 py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-white/30">Student Stories</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
              Những người đang<br /><span className="text-white/30">đi trước một bước.</span>
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <Testimonial text="Trước đây tôi mất hàng giờ để xử lý content. Bây giờ phần lớn quy trình đã được AI hỗ trợ." name="Minh Anh" role="Marketing Director" />
            <Testimonial text="Điều giá trị nhất không phải là học thêm một công cụ AI, mà là học cách tư duy với AI." name="Quốc Minh" role="Founder" />
            <Testimonial text="Tôi đã xây dựng được workflow giúp team tiết kiệm khoảng 20 giờ mỗi tuần." name="Thanh Nam" role="Business Owner" />
          </div>
        </div>
      </section>

      <section id="pricing" className="px-5 py-32">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-white/30">Investment</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
              Đầu tư vào lợi thế<br /><span className="text-white/30">của chính bạn.</span>
            </h2>
          </div>
          <GlassCard className="relative overflow-hidden p-8 sm:p-12">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-white/[0.05] blur-[100px]" />
            <div className="relative grid gap-12 md:grid-cols-2 md:items-center">
              <div>
                <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/50">Premium Access</div>
                <h3 className="text-3xl font-semibold">AI Masterclass</h3>
                <p className="mt-4 max-w-md leading-7 text-white/40">
                  Tất cả những gì bạn cần để biến AI thành một phần không thể thiếu trong hệ thống làm việc của mình.
                </p>
              </div>
              <div className="text-left md:text-right">
                <div className="text-sm text-white/30 line-through">9.990.000₫</div>
                <div className="mt-1 text-5xl font-semibold tracking-tight">4.990.000₫</div>
                <p className="mt-2 text-sm text-white/30">Thanh toán một lần · Truy cập trọn đời</p>
                <a href="mailto:hello@example.com?subject=Đăng ký AI Masterclass" className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-black transition hover:scale-[1.02] md:w-auto">
                  Đăng ký ngay <ArrowRight size={17} />
                </a>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      <section className="relative px-5 py-40 text-center">
        <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.05] blur-[120px]" />
        <div className="mx-auto max-w-4xl">
          <p className="text-sm uppercase tracking-[0.3em] text-white/30">Your Next Level</p>
          <h2 className="mt-6 text-5xl font-semibold tracking-[-0.04em] sm:text-7xl">
            Tương lai không<br /><span className="text-white/30">chờ đợi ai.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-8 text-white/40">
            Học cách sử dụng AI ngay hôm nay để trở thành người tạo ra tương lai thay vì chỉ thích nghi với nó.
          </p>
          <a href="#pricing" className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-[1.03]">
            Bắt đầu hành trình <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <footer className="border-t border-white/[0.06] px-5 py-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm text-white/30 sm:flex-row">
          <span>© 2026 AI Academy</span>
          <span>Built for the AI generation.</span>
        </div>
      </footer>
    </main>
  );
}

function Feature({ icon, number, title, description }) {
  return (
    <GlassCard className="group p-8 transition duration-500 hover:-translate-y-2 hover:bg-white/[0.07]">
      <div className="flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06]">{icon}</div>
        <span className="text-sm text-white/20">{number}</span>
      </div>
      <h3 className="mt-8 text-xl font-semibold">{title}</h3>
      <p className="mt-4 leading-7 text-white/40">{description}</p>
    </GlassCard>
  );
}

function Testimonial({ text, name, role }) {
  return (
    <GlassCard className="p-8 transition hover:-translate-y-1">
      <Quote size={25} className="text-white/30" />
      <p className="mt-7 min-h-[110px] leading-7 text-white/60">“{text}”</p>
      <div className="mt-8 border-t border-white/10 pt-6">
        <div className="font-medium">{name}</div>
        <div className="mt-1 text-sm text-white/30">{role}</div>
      </div>
    </GlassCard>
  );
}

export default App;