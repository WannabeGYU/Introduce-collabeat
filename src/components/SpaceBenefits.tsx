import { Lightbulb, TrendingUp, Camera, ShieldCheck } from 'lucide-react';

export function SpaceBenefits() {
  const benefits = [
    {
      icon: Lightbulb,
      title: '벽만 내줘도 브랜드 콘텐츠 확보',
      description: '공간의 빈 벽, 빈 코너가 브랜드 콜라보로 채워지며 새로운 콘텐츠 생성',
    },
    {
      icon: TrendingUp,
      title: '유입 고객 & 매출 증가',
      description: '브랜드 팬들이 공간을 방문하며 신규 고객 유입, 평균 체류 시간 증가',
    },
    {
      icon: Camera,
      title: '협업 콘텐츠가 공간 자산으로',
      description: '콜라보 사진, 영상이 공간의 마케팅 자산으로 계속 활용 가능',
    },
    {
      icon: ShieldCheck,
      title: '검증된 브랜드와만 매칭',
      description: '공간 분위기를 해치지 않는, 세계관이 맞는 브랜드만 연결',
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-purple-600 text-white rounded-full text-sm mb-4">
            공간 혜택
          </span>
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
            공간이<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
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
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border-2 border-purple-100 hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl mb-4 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-white rounded-3xl p-10 border-2 border-purple-100 shadow-lg">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl mb-4 text-gray-900">단순 임대가 아닌 브랜딩 협업</h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                공간을 빌려주는 게 아니라, 브랜드와 함께 공간의 가치를 높이는 협업.
                월세 수익이 아닌 장기적 브랜드 가치 상승.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📈</span>
                  </div>
                  <div>
                    <h4 className="text-lg text-gray-900 mb-1">고객 재방문율 증가</h4>
                    <p className="text-gray-600">새로운 콘텐츠로 '가봐야 할 이유' 제공</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🎯</span>
                  </div>
                  <div>
                    <h4 className="text-lg text-gray-900 mb-1">타겟 고객 확대</h4>
                    <p className="text-gray-600">브랜드 팬층이 새로운 고객으로 전환</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">💎</span>
                  </div>
                  <div>
                    <h4 className="text-lg text-gray-900 mb-1">공간 브랜딩 강화</h4>
                    <p className="text-gray-600">감각적인 브랜드와의 협업으로 공간 이미지 업그레이드</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-center text-gray-900 text-xl mb-6">평균 협업 효과</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <span className="text-gray-600">방문자 증가</span>
                  <span className="text-2xl text-purple-600">+35%</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <span className="text-gray-600">SNS 언급</span>
                  <span className="text-2xl text-purple-600">+180%</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <span className="text-gray-600">체류 시간</span>
                  <span className="text-2xl text-purple-600">+28%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">매출 증가</span>
                  <span className="text-2xl text-purple-600">+22%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
