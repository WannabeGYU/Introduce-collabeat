import { X, Check } from 'lucide-react';

export function Comparison() {
  const comparisons = [
    {
      aspect: '상대방 찾기',
      old: 'DM, 이메일로 일일이 연락',
      new: '데이터 기반 자동 매칭 추천',
    },
    {
      aspect: '정보 파악',
      old: '상대방 정보 불확실',
      new: '고객층, 분위기, 리뷰 데이터 제공',
    },
    {
      aspect: '계약 과정',
      old: '계약서 직접 작성, 조율',
      new: '표준 계약 템플릿 제공',
    },
    {
      aspect: '신뢰도',
      old: '상대방 검증 어려움',
      new: '리뷰, 포트폴리오 기반 검증',
    },
    {
      aspect: '협업 후',
      old: '관계 단절, 재시작',
      new: '레퍼런스 축적, 재매칭 용이',
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm mb-4">
            비교 분석
          </span>
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
            개별 연락 vs <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Collabeat</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            더 빠르고, 더 안전하고, 더 효과적인 협업
          </p>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
          {/* Header */}
          <div className="grid grid-cols-3 border-b-2 border-gray-200">
            <div className="p-6"></div>
            <div className="p-6 text-center bg-gray-50">
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <X className="w-5 h-5" />
                <span>개별 DM</span>
              </div>
            </div>
            <div className="p-6 text-center bg-gradient-to-br from-indigo-50 to-purple-50">
              <div className="flex items-center justify-center gap-2 text-indigo-600">
                <Check className="w-5 h-5" />
                <span>Collabeat</span>
              </div>
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-3 border-b border-gray-100 hover:bg-gray-50 transition-colors"
            >
              <div className="p-6 text-gray-900">{item.aspect}</div>
              <div className="p-6 text-center text-gray-600 bg-gray-50 flex items-center justify-center">
                <span className="text-sm">{item.old}</span>
              </div>
              <div className="p-6 text-center text-indigo-600 bg-indigo-50/30 flex items-center justify-center">
                <span className="text-sm">{item.new}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-lg text-gray-600">
            결론: <span className="text-indigo-600">시간 70% 절약, 성공률 3배 증가</span>
          </p>
        </div>
      </div>
    </section>
  );
}
