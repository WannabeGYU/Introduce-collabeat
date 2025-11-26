import { Palette, Users, BarChart3, Sparkles } from 'lucide-react';

export function BrandBenefits() {
  const benefits = [
    {
      icon: Palette,
      title: '브랜드 스토리를 보여줄 무대',
      description: '단순 판매가 아니라 브랜드의 세계관과 철학을 직접 전달하는 공간',
    },
    {
      icon: Users,
      title: '고객에게 직접 경험 제공',
      description: '제품을 만지고, 느끼고, 경험하게 하여 브랜드 로열티 구축',
    },
    {
      icon: BarChart3,
      title: '데이터 기반 매칭으로 실패 최소화',
      description: '공간의 고객층, 분위기 데이터를 보고 브랜드와 맞는 곳을 선택',
    },
    {
      icon: Sparkles,
      title: '카페·공간을 마케팅 채널로',
      description: '인디 브랜드도 오프라인 마케팅 경험 없이 쉽게 노출 확대',
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-full text-sm mb-4">
            브랜드 혜택
          </span>
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
            브랜드가<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Collabeat에 가입해야 하는 이유
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl mb-4 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-3xl p-10 shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-3xl mb-4 text-gray-900">온라인에서 오프라인으로</h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                온라인 브랜드가 실제 공간에서 고객을 만나는 가장 쉬운 방법.
                팝업스토어 비용 없이, 리스크 없이 시작하세요.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  </div>
                  <span>초기 비용 최소화 (임대료, 인테리어 비용 없음)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  </div>
                  <span>공간의 기존 고객층을 마케팅 타겟으로 활용</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  </div>
                  <span>협업 콘텐츠로 SNS 마케팅 효과 배가</span>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">🎨</div>
                <p className="text-gray-700 text-lg">
                  평균 협업 기간: 2-4주<br />
                  브랜드 노출 효과: 전통 팝업 대비 60% 비용 절감
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
