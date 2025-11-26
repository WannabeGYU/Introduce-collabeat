import { Sparkles, ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 border-2 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 border-2 border-white rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles className="w-10 h-10 text-white" />
        </div>

        <h2 className="text-4xl md:text-6xl mb-6 text-white leading-tight">
          당신의 브랜드, 당신의 공간,<br />
          새로운 가능성을 발견하세요
        </h2>

        <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          지금 Collabeat에 관심 등록하고,<br />
          완벽한 협업 파트너를 만나보세요
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="px-10 py-5 bg-white text-indigo-600 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl flex items-center gap-3 text-lg">
            <span>브랜드로 관심 등록</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-10 py-5 bg-transparent text-white border-2 border-white rounded-full hover:bg-white/10 transition-all flex items-center gap-3 text-lg">
            <span>공간으로 관심 등록</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-white/80 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>가입비 무료</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>매칭 성공 시에만 수수료</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>언제든 탈퇴 가능</span>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-white/20">
          <p className="text-white/70 mb-4">궁금한 점이 있으신가요?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:hello@collabeat.com" className="text-white hover:text-white/80 transition-colors">
              📧 hello@collabeat.com
            </a>
            <span className="text-white/50 hidden sm:block">|</span>
            <a href="tel:+82-10-1234-5678" className="text-white hover:text-white/80 transition-colors">
              📞 +82-10-1234-5678
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
