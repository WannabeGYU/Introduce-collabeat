import { Target, Database, Shield, TrendingUp } from 'lucide-react';

export function Solution() {
  const features = [
    {
      icon: Target,
      title: '세계관 매칭',
      description: '판매가 아닌 브랜딩·콘텐츠 효과 중심으로 브랜드와 공간을 연결합니다.',
      color: 'indigo',
    },
    {
      icon: Database,
      title: '데이터 기반 매칭',
      description: '공간의 고객층, 분위기, 피크타임, 콘텐츠 적합도를 데이터로 제공합니다.',
      color: 'purple',
    },
    {
      icon: Shield,
      title: '안전한 거래 구조',
      description: '계약 템플릿, 리뷰 시스템으로 검증된 상대와만 안전하게 협업합니다.',
      color: 'pink',
    },
    {
      icon: TrendingUp,
      title: '레퍼런스 축적',
      description: '한 번의 콜라보가 포트폴리오가 되어 다음 기회를 만듭니다.',
      color: 'blue',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
      indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600', border: 'border-indigo-200' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' },
      pink: { bg: 'bg-pink-100', text: 'text-pink-600', border: 'border-pink-200' },
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
    };
    return colors[color];
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm mb-4">
            우리의 솔루션
          </span>
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              검증된 매칭
            </span>으로<br />
            성공 확률을 높입니다
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            데이터와 검증 시스템으로 최적의 파트너를 찾아드립니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colors = getColorClasses(feature.color);
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 border-2 ${colors.border} hover:shadow-xl transition-all transform hover:-translate-y-1`}
              >
                <div className={`w-14 h-14 ${colors.bg} rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon className={`w-7 h-7 ${colors.text}`} />
                </div>
                <h3 className="text-2xl mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-10 text-white text-center">
          <h3 className="text-3xl mb-4">수수료 기반, 성공 기반 구조</h3>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            개별 연락보다 안정적으로, 검증된 상대와 매칭되어 시간과 비용을 절약합니다
          </p>
        </div>
      </div>
    </section>
  );
}
