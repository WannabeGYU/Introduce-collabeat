import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

export function UseCases() {
  const cases = [
    {
      id: 1,
      brand: '감각적인 향수 브랜드',
      space: '브런치 카페 (강남)',
      collaboration: '향수 디스플레이 + 시향 체험존',
      result: '브랜드: 300명 시향 경험 제공\n카페: 인스타그램 게시물 200% 증가',
      tags: ['향수', '카페', '체험'],
    },
    {
      id: 2,
      brand: '수제 도자기 브랜드',
      space: '갤러리 카페 (성수)',
      collaboration: '2주간 팝업 전시 + 판매',
      result: '브랜드: 신제품 50개 완판\n카페: 평균 방문자 40% 증가',
      tags: ['도자기', '갤러리', '전시'],
    },
    {
      id: 3,
      brand: '로컬 패션 브랜드',
      space: '편집숍 & 카페 (홍대)',
      collaboration: '의류 전시 + 포토존 설치',
      result: '브랜드: SNS 팔로워 1,200명 증가\n공간: 주말 매출 25% 상승',
      tags: ['패션', '편집숍', '포토존'],
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm mb-4">
            협업 사례
          </span>
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
            이런 콜라보레이션이<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">
              실제로 일어납니다
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            브랜드와 공간 모두가 성장하는 윈-윈 협업 예시
          </p>
        </div>

        <div className="space-y-6">
          {cases.map((item) => (
            <div
              key={item.id}
              className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border-2 border-gray-100 hover:border-green-200 hover:shadow-xl transition-all"
            >
              <div className="grid md:grid-cols-[2fr,1fr,2fr] gap-8 items-center">
                {/* Brand */}
                <div>
                  <div className="text-sm text-indigo-600 mb-2">브랜드</div>
                  <h3 className="text-2xl text-gray-900 mb-3">{item.brand}</h3>
                  <div className="flex gap-2">
                    {item.tags.slice(0, 2).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow & Collaboration */}
                <div className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <ArrowRight className="w-8 h-8 text-green-500" />
                  </div>
                  <div className="text-sm text-gray-600 bg-green-50 rounded-xl p-3">
                    {item.collaboration}
                  </div>
                </div>

                {/* Space */}
                <div>
                  <div className="text-sm text-purple-600 mb-2">공간</div>
                  <h3 className="text-2xl text-gray-900 mb-3">{item.space}</h3>
                  <div className="flex gap-2">
                    {item.tags.slice(1).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Result */}
              <div className="mt-6 pt-6 border-t-2 border-gray-100">
                <div className="text-sm text-green-600 mb-2">협업 결과</div>
                <p className="text-gray-700 whitespace-pre-line">{item.result}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            당신의 브랜드와 공간도 이런 성공 스토리를 만들 수 있습니다
          </p>
          <button className="px-8 py-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg">
            성공 사례 더 보기
          </button>
        </div>
      </div>
    </section>
  );
}
