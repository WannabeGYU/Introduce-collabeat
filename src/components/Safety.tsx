import { FileText, Star, BadgeCheck, HeadphonesIcon } from 'lucide-react';

export function Safety() {
  const features = [
    {
      icon: FileText,
      title: '표준 계약 템플릿',
      description: '법률 검토를 거친 계약서 템플릿으로 분쟁 위험 최소화',
    },
    {
      icon: Star,
      title: '리뷰 시스템',
      description: '협업 후 양측이 남기는 리뷰로 신뢰도 검증',
    },
    {
      icon: BadgeCheck,
      title: '포트폴리오 검증',
      description: '과거 협업 이력과 성과를 투명하게 공개',
    },
    {
      icon: HeadphonesIcon,
      title: '분쟁 중재 지원',
      description: '문제 발생 시 플랫폼이 중재자로 개입하여 해결',
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm mb-4">
            안전한 거래
          </span>
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">
              신뢰할 수 있는
            </span><br />
            협업 환경을 제공합니다
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            계약부터 협업 후까지, 모든 과정에서 안전장치 마련
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">🛡️</span>
            </div>
            <h3 className="text-2xl mb-4 text-gray-900">브랜드 보호</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span>공간의 위생, 분위기, 고객 리뷰 사전 확인</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span>계약 조건 명확히 명시 (진열 위치, 기간, 비용)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span>제품 손상, 분실 시 보상 규정 포함</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">🏠</span>
            </div>
            <h3 className="text-2xl mb-4 text-gray-900">공간 보호</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span>브랜드의 과거 협업 이력, 고객 반응 확인</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span>브랜드 콘셉트가 공간 분위기와 맞는지 사전 검증</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span>인테리어 훼손 방지 조항, 원상복구 의무</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-green-600 to-teal-600 rounded-3xl p-8 text-white text-center">
          <h3 className="text-2xl mb-3">100% 검증된 매칭만 제공</h3>
          <p className="text-lg opacity-90">
            플랫폼 심사를 통과한 브랜드와 공간만 등록되어, 처음부터 신뢰할 수 있는 협업이 가능합니다
          </p>
        </div>
      </div>
    </section>
  );
}
