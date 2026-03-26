import { useState } from "react";
import {
  Sparkles,
  TrendingUp,
  Award,
  BookOpen,
  Lightbulb,
  Target,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  Star,
  BarChart3,
  Users,
  DollarSign,
  Megaphone,
  Instagram,
  Globe,
  MessageSquare,
  ThumbsUp,
  Eye,
  Zap,
  Brain,
  Send,
  Copy,
  RefreshCw,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from "recharts";

// AI 마케팅 조언
const aiPrompts = [
  "우리 가게 인스타그램 게시물 문구 추천해줘",
  "배달앱 리뷰 답변 잘 쓰는 법 알려줘",
  "소상공인 네이버 블로그 마케팅 전략",
  "단골 고객 만드는 멤버십 프로그램 설계",
  "비수기 매출 올리는 프로모션 아이디어",
];

const aiSampleResponse = {
  question: "우리 가게 인스타그램 마케팅 전략을 알려줘",
  answer: `## 소상공인 인스타그램 마케팅 5단계 전략

**1단계: 프로필 최적화**
- 가게 이름 + 위치 + 대표 메뉴를 프로필에 명시
- 영업시간, 주소, 전화번호를 액션 버튼으로 설정
- 하이라이트로 메뉴판/후기/이벤트 정리

**2단계: 콘텐츠 전략 (주 3-4회)**
- 월: 신메뉴/추천 메뉴 소개
- 수: 주방 비하인드/조리 과정
- 금: 고객 후기 리그램/이벤트
- 일: 사장님 일상/가게 스토리

**3단계: 해시태그 활용**
- 지역 해시태그: #전주맛집 #한옥마을맛집
- 업종 해시태그: #카페추천 #브런치맛집
- 트렌드 해시태그: #오늘뭐먹지 #맛스타그램

**4단계: 릴스(숏폼) 적극 활용**
- 15~30초 조리 과정 타임랩스
- Before/After 비주얼 변화
- 고객 반응 모먼트 캡처

**5단계: 성과 측정**
- 주간 팔로워 증감 체크
- 게시물별 도달률/저장수 분석
- 인스타 → 실제 방문 전환율 추적`,
};

// 성공 자영업 사례
const successStories = [
  {
    id: 1,
    title: "월매출 300만 → 2,000만원으로 성장한 동네 빵집",
    business: "효자동 밀가루공방",
    avatar: "🥐",
    category: "베이커리",
    period: "2년",
    revenueBefore: 300,
    revenueAfter: 2000,
    keyFactors: [
      { factor: "SNS 마케팅", score: 95 },
      { factor: "메뉴 차별화", score: 90 },
      { factor: "고객 소통", score: 88 },
      { factor: "원가 관리", score: 75 },
      { factor: "입지 활용", score: 82 },
      { factor: "브랜딩", score: 92 },
    ],
    strategies: [
      "인스타그램 릴스로 빵 만드는 과정 공개 → 팔로워 1.2만 확보",
      "시그니처 메뉴 3개에 집중, 매일 한정 수량 운영",
      "단골 고객 전용 카카오톡 채널 → 신메뉴 선공개",
      "인근 카페와 콜라보 세트 메뉴 출시",
    ],
    quote: "처음엔 하루 10개도 안 팔렸지만, SNS에 진심을 담으니 손님이 찾아오기 시작했어요.",
  },
  {
    id: 2,
    title: "폐업 위기에서 동네 핫플로 부활한 분식집",
    business: "남부시장 엄마분식",
    avatar: "🍜",
    category: "외식업",
    period: "1년 6개월",
    revenueBefore: 500,
    revenueAfter: 3500,
    keyFactors: [
      { factor: "SNS 마케팅", score: 80 },
      { factor: "메뉴 차별화", score: 92 },
      { factor: "고객 소통", score: 95 },
      { factor: "원가 관리", score: 88 },
      { factor: "입지 활용", score: 78 },
      { factor: "브랜딩", score: 85 },
    ],
    strategies: [
      "기존 메뉴 30개 → 10개로 축소, 핵심 메뉴 품질 극대화",
      "블로그 체험단 운영 → 네이버 지도 리뷰 300개 달성",
      "배달앱 쿠폰 전략으로 재주문율 45% 달성",
      "주변 상가 직원 대상 점심 정기배달 시스템 구축",
    ],
    quote: "메뉴를 줄이는 게 무서웠지만, 적게 하되 잘 하자는 마음으로 도전했습니다.",
  },
  {
    id: 3,
    title: "온라인 전환으로 매출 5배 성장한 전통 반찬가게",
    business: "금암동 정성반찬",
    avatar: "🥘",
    category: "소매업",
    period: "1년",
    revenueBefore: 400,
    revenueAfter: 2200,
    keyFactors: [
      { factor: "SNS 마케팅", score: 85 },
      { factor: "메뉴 차별화", score: 78 },
      { factor: "고객 소통", score: 90 },
      { factor: "원가 관리", score: 92 },
      { factor: "입지 활용", score: 60 },
      { factor: "브랜딩", score: 88 },
    ],
    strategies: [
      "네이버 스마트스토어 입점 → 전국 배송 시스템 구축",
      "구독 모델 도입: 주간/월간 반찬 정기배송",
      "유튜브 '엄마의 반찬 레시피' 채널 운영 → 구독자 8천명",
      "포장 디자인 리뉴얼 → 선물용 반찬 세트 출시",
    ],
    quote: "동네 반찬가게도 온라인으로 전국 고객을 만날 수 있다는 걸 증명하고 싶었어요.",
  },
];

// 성공 공통 특징
const commonTraits = [
  { trait: "SNS 마케팅 적극 활용", percentage: 94, icon: Instagram, description: "인스타그램/유튜브 등 최소 1개 이상 SNS 채널을 적극 운영" },
  { trait: "메뉴/상품 집중 전략", percentage: 87, icon: Target, description: "핵심 메뉴 5~10개에 집중, 퀄리티를 극대화하는 '선택과 집중'" },
  { trait: "단골 관리 시스템", percentage: 91, icon: Users, description: "카카오톡 채널, 멤버십, 포인트 등 단골 유지를 위한 체계적 관리" },
  { trait: "데이터 기반 의사결정", percentage: 78, icon: BarChart3, description: "매출/원가/고객 데이터를 분석하여 메뉴 구성 및 가격 결정" },
  { trait: "차별화된 브랜드 스토리", percentage: 85, icon: BookOpen, description: "가게만의 스토리와 정체성을 구축하여 경쟁 매장과 차별화" },
  { trait: "온라인·오프라인 융합", percentage: 82, icon: Globe, description: "오프라인 매장 + 배달앱/스마트스토어 등 온라인 채널 동시 운영" },
];

const commonTraitsChart = commonTraits.map((t) => ({
  name: t.trait.slice(0, 8),
  value: t.percentage,
}));

export function MarketingInsight() {
  const [activeTab, setActiveTab] = useState<"ai" | "success" | "traits">("ai");
  const [aiQuestion, setAiQuestion] = useState("");
  const [showAiResponse, setShowAiResponse] = useState(false);
  const [expandedStory, setExpandedStory] = useState<number | null>(null);
  const [copiedText, setCopiedText] = useState(false);

  const handleAiSubmit = () => {
    if (aiQuestion.trim()) {
      setShowAiResponse(true);
    }
  };

  const handleCopy = () => {
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-lg shadow-indigo-200">
          <Megaphone className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 700, letterSpacing: "-0.02em" }}>
            마케팅 인사이트
          </h2>
          <p className="text-gray-500" style={{ fontSize: "0.82rem" }}>
            AI 마케팅 조언 · 성공사례 분석 · 공통 특징
          </p>
        </div>
      </div>

      {/* Sub Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {[
          { key: "ai" as const, icon: Brain, label: "AI 마케팅 조언" },
          { key: "success" as const, icon: Award, label: "성공 사례" },
          { key: "traits" as const, icon: CheckCircle2, label: "성공 공통 특징" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl transition-all whitespace-nowrap ${
              activeTab === tab.key
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
            style={{ fontSize: "0.84rem", fontWeight: 600 }}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* ═══ AI Marketing ═══ */}
      {activeTab === "ai" && (
        <div className="space-y-5">
          {/* AI Chat */}
          <Card className="border-0 shadow-md ring-1 ring-indigo-100">
            <CardContent className="p-5">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-indigo-500" />
                <h4 style={{ fontSize: "0.95rem", fontWeight: 600 }}>AI 마케팅 어시스턴트</h4>
                <Badge className="bg-indigo-50 text-indigo-600 border-0" style={{ fontSize: "0.65rem" }}>Beta</Badge>
              </div>

              {/* Prompt Suggestions */}
              <div className="flex flex-wrap gap-2 mb-4">
                {aiPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => { setAiQuestion(prompt); setShowAiResponse(true); }}
                    className="px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors"
                    style={{ fontSize: "0.76rem", fontWeight: 500 }}
                  >
                    <Lightbulb className="w-3 h-3 inline mr-1" />{prompt}
                  </button>
                ))}
              </div>

              {/* Input */}
              <div className="flex gap-2">
                <input
                  className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300 placeholder:text-gray-400"
                  placeholder="마케팅에 대해 무엇이든 물어보세요..."
                  value={aiQuestion}
                  onChange={(e) => setAiQuestion(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleAiSubmit()}
                />
                <Button
                  className="bg-indigo-600 text-white rounded-xl h-auto px-4 hover:bg-indigo-700"
                  onClick={handleAiSubmit}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* AI Response */}
          {showAiResponse && (
            <Card className="border-0 shadow-md ring-1 ring-indigo-100">
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <span style={{ fontSize: "0.88rem", fontWeight: 600 }}>AI 응답</span>
                  </div>
                  <div className="flex gap-1.5">
                    <button
                      onClick={handleCopy}
                      className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
                      style={{ fontSize: "0.72rem" }}
                    >
                      <Copy className="w-3 h-3" /> {copiedText ? "복사됨!" : "복사"}
                    </button>
                    <button
                      onClick={() => setShowAiResponse(true)}
                      className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
                      style={{ fontSize: "0.72rem" }}
                    >
                      <RefreshCw className="w-3 h-3" /> 다시 생성
                    </button>
                  </div>
                </div>

                {/* Response Content */}
                <div className="prose prose-sm max-w-none">
                  {aiSampleResponse.answer.split("\n").map((line, i) => {
                    if (line.startsWith("## ")) {
                      return <h3 key={i} className="text-indigo-700 mt-0 mb-3" style={{ fontSize: "1rem", fontWeight: 700 }}>{line.replace("## ", "")}</h3>;
                    }
                    if (line.startsWith("**") && line.endsWith("**")) {
                      return <p key={i} className="mt-3 mb-1" style={{ fontSize: "0.88rem", fontWeight: 700 }}>{line.replace(/\*\*/g, "")}</p>;
                    }
                    if (line.startsWith("- ")) {
                      return <p key={i} className="text-gray-600 ml-3 mb-0.5" style={{ fontSize: "0.82rem", lineHeight: 1.6 }}>• {line.replace("- ", "")}</p>;
                    }
                    if (line.trim() === "") return <div key={i} className="h-2" />;
                    return <p key={i} className="text-gray-600" style={{ fontSize: "0.82rem", lineHeight: 1.6 }}>{line}</p>;
                  })}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2">
                  <span className="text-gray-400" style={{ fontSize: "0.72rem" }}>이 답변이 도움이 되었나요?</span>
                  <button className="p-1 rounded hover:bg-gray-100"><ThumbsUp className="w-3.5 h-3.5 text-gray-400" /></button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      )}

      {/* ═══ Success Stories ═══ */}
      {activeTab === "success" && (
        <div className="space-y-4">
          {successStories.map((story) => (
            <Card
              key={story.id}
              className={`border-0 shadow-sm ring-1 cursor-pointer transition-all hover:shadow-lg ${
                expandedStory === story.id ? "ring-indigo-200 shadow-md" : "ring-black/[0.04]"
              }`}
              onClick={() => setExpandedStory(expandedStory === story.id ? null : story.id)}
            >
              <CardContent className="p-5">
                <div className="flex items-start gap-3.5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center shrink-0" style={{ fontSize: "1.5rem" }}>
                    {story.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className="bg-amber-50 text-amber-600 border-0" style={{ fontSize: "0.68rem" }}>
                        <Award className="w-3 h-3 mr-0.5" /> 성공사례
                      </Badge>
                      <span className="text-gray-400" style={{ fontSize: "0.72rem" }}>{story.category} · {story.period}</span>
                    </div>
                    <h4 style={{ fontSize: "0.95rem", fontWeight: 600 }}>{story.title}</h4>
                    <p className="text-gray-500" style={{ fontSize: "0.82rem" }}>{story.business}</p>

                    {/* Revenue Highlight */}
                    <div className="flex items-center gap-3 mt-3">
                      <div className="flex items-center gap-2 bg-red-50 px-3 py-1.5 rounded-lg">
                        <span className="text-red-400" style={{ fontSize: "0.72rem" }}>Before</span>
                        <span className="text-red-600" style={{ fontSize: "0.92rem", fontWeight: 700 }}>월 {story.revenueBefore}만</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-300" />
                      <div className="flex items-center gap-2 bg-emerald-50 px-3 py-1.5 rounded-lg">
                        <span className="text-emerald-400" style={{ fontSize: "0.72rem" }}>After</span>
                        <span className="text-emerald-600" style={{ fontSize: "0.92rem", fontWeight: 700 }}>월 {story.revenueAfter.toLocaleString()}만</span>
                      </div>
                      <span className="text-indigo-600 bg-indigo-50 px-2 py-1 rounded-lg" style={{ fontSize: "0.72rem", fontWeight: 600 }}>
                        <TrendingUp className="w-3 h-3 inline mr-0.5" />
                        {Math.round((story.revenueAfter / story.revenueBefore - 1) * 100)}%↑
                      </span>
                    </div>
                  </div>
                </div>

                {/* Expanded Detail */}
                {expandedStory === story.id && (
                  <div className="mt-5 pt-5 border-t border-gray-100 space-y-5">
                    {/* Radar Chart */}
                    <div>
                      <h5 className="mb-3" style={{ fontSize: "0.88rem", fontWeight: 600 }}>성공 요인 분석</h5>
                      <ResponsiveContainer width="100%" height={250}>
                        <RadarChart data={story.keyFactors}>
                          <PolarGrid stroke="#e5e7eb" />
                          <PolarAngleAxis dataKey="factor" tick={{ fontSize: 11 }} />
                          <Radar name="점수" dataKey="score" stroke="#4f46e5" fill="#4f46e5" fillOpacity={0.15} strokeWidth={2} />
                        </RadarChart>
                      </ResponsiveContainer>
                    </div>

                    {/* Key Strategies */}
                    <div className="bg-indigo-50/50 rounded-xl p-4">
                      <h5 className="text-indigo-700 mb-3 flex items-center gap-1.5" style={{ fontSize: "0.85rem", fontWeight: 600 }}>
                        <Zap className="w-4 h-4" /> 핵심 전략
                      </h5>
                      <ul className="space-y-2">
                        {story.strategies.map((s, i) => (
                          <li key={i} className="flex items-start gap-2 text-indigo-700" style={{ fontSize: "0.82rem", lineHeight: 1.5 }}>
                            <CheckCircle2 className="w-4 h-4 mt-0.5 text-indigo-400 shrink-0" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Quote */}
                    <div className="bg-amber-50/50 rounded-xl p-4 border-l-4 border-amber-400">
                      <p className="text-amber-800 italic" style={{ fontSize: "0.85rem", lineHeight: 1.6 }}>
                        "{story.quote}"
                      </p>
                      <p className="text-amber-600 mt-2" style={{ fontSize: "0.78rem", fontWeight: 500 }}>— {story.business} 사장님</p>
                    </div>
                  </div>
                )}

                {expandedStory !== story.id && (
                  <div className="mt-3 flex items-center gap-1 text-indigo-500" style={{ fontSize: "0.78rem", fontWeight: 500 }}>
                    상세 분석 보기 <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* ═══ Common Traits ═══ */}
      {activeTab === "traits" && (
        <div className="space-y-5">
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-4 flex items-start gap-3 ring-1 ring-indigo-100">
            <BookOpen className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />
            <p className="text-indigo-700" style={{ fontSize: "0.82rem", lineHeight: 1.6 }}>
              전주 지역 <strong>성공한 소상공인 50곳</strong>을 분석하여 도출한 공통 특징입니다.
            </p>
          </div>

          {/* Chart */}
          <Card className="border-0 shadow-md ring-1 ring-black/[0.04]">
            <CardContent className="p-5">
              <h4 className="mb-4" style={{ fontSize: "0.95rem", fontWeight: 600 }}>성공 자영업 공통 특징 비율</h4>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={commonTraitsChart} layout="vertical" margin={{ left: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f1f1" horizontal={false} />
                  <XAxis type="number" tick={{ fontSize: 11 }} stroke="#9ca3af" unit="%" domain={[0, 100]} />
                  <YAxis dataKey="name" type="category" tick={{ fontSize: 11 }} stroke="#9ca3af" width={80} />
                  <Tooltip
                    contentStyle={{ borderRadius: 12, border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
                    formatter={(value: number) => [`${value}%`, "적용 비율"]}
                  />
                  <Bar dataKey="value" name="적용 비율" fill="#4f46e5" radius={[0, 6, 6, 0]} barSize={16} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Trait Cards */}
          <div className="space-y-3">
            {commonTraits.map((item, idx) => (
              <Card key={idx} className="border-0 shadow-sm ring-1 ring-black/[0.04] hover:shadow-md transition-all">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-indigo-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h5 style={{ fontSize: "0.9rem", fontWeight: 600 }}>{item.trait}</h5>
                        <span className="text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-lg" style={{ fontSize: "0.82rem", fontWeight: 700 }}>
                          {item.percentage}%
                        </span>
                      </div>
                      <p className="text-gray-500" style={{ fontSize: "0.8rem", lineHeight: 1.5 }}>{item.description}</p>
                      {/* Progress Bar */}
                      <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full transition-all"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
