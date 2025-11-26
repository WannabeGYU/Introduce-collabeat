import { Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20 px-6 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Logo/Brand */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles className="w-8 h-8 text-indigo-600" />
          <h1 className="text-2xl tracking-tight text-indigo-600">Collabeat</h1>
        </div>
        
        {/* Main Headline */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-6 text-gray-900 leading-tight">
            브랜드와 공간을<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              콘텐츠로 연결
            </span>합니다
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            판매가 아닌 브랜딩. 단순 임대가 아닌 협업.<br />
            창작 콜라보레이션으로 브랜드와 공간 모두를 성장시키는 매칭 플랫폼
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all transform hover:scale-105 shadow-lg">
            브랜드로 시작하기
          </button>
          <button className="px-8 py-4 bg-white text-indigo-600 border-2 border-indigo-600 rounded-full hover:bg-indigo-50 transition-all">
            공간으로 시작하기
          </button>
        </div>
        
        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl text-indigo-600 mb-2">350+</div>
            <div className="text-gray-600">등록 브랜드</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-indigo-600 mb-2">180+</div>
            <div className="text-gray-600">협업 공간</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-indigo-600 mb-2">520+</div>
            <div className="text-gray-600">성공 매칭</div>
          </div>
        </div>
      </div>
    </section>
  );
}
