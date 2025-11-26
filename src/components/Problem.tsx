import { X, AlertCircle, MessageSquare, TrendingDown } from 'lucide-react';

export function Problem() {
  const problems = [
    {
      icon: MessageSquare,
      title: 'DM, 이메일로 개별 연락',
      description: '수십 개의 브랜드와 공간에 일일이 연락하며 시간을 낭비합니다.',
    },
    {
      icon: AlertCircle,
      title: '상대방 정보 부족',
      description: '브랜드의 콘셉트, 공간의 분위기, 고객층을 제대로 파악하지 못합니다.',
    },
    {
      icon: TrendingDown,
      title: '잘못된 매칭의 리스크',
      description: '맞지 않는 협업으로 브랜드 이미지가 하락하고 공간 분위기가 손상됩니다.',
    },
    {
      icon: X,
      title: '일회성 이벤트로 끝',
      description: '한 번의 협업 후 관계가 단절되어 다시 처음부터 찾아야 합니다.',
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm mb-4">
            현재의 문제
          </span>
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
            지금 브랜드-공간 협업은<br />
            <span className="text-red-600">무질서하고 리스크가 높습니다</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            좋은 의도로 시작한 협업이 실패하는 이유
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-red-200 transition-all"
              >
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl mb-3 text-gray-900">{problem.title}</h3>
                <p className="text-gray-600 leading-relaxed">{problem.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-red-50 border-2 border-red-200 rounded-2xl p-8 text-center">
          <p className="text-lg text-gray-700">
            결과: <span className="text-red-600">시간과 비용 낭비, 브랜드 이미지 손상, 기회 상실</span>
          </p>
        </div>
      </div>
    </section>
  );
}
