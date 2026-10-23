'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useFarmer } from '@/context/FarmerContext';
import {
  Newspaper,
  Volume2,
  VolumeX,
  Share2,
  AlertTriangle,
  TrendingUp,
  Tag,
  Clock,
  Sparkles,
  ShieldAlert,
  Sprout
} from 'lucide-react';

interface DailyPost {
  id: string;
  category: 'weather_alert' | 'pest_warning' | 'mandi_spike' | 'scheme_update' | 'crop_tip';
  categoryLabel: string;
  title: string;
  summary: string;
  detailedText: string;
  source: string;
  date: string;
}

const SAMPLE_POSTS: DailyPost[] = [
  {
    id: 'post-1',
    category: 'weather_alert',
    categoryLabel: 'मौसम चेतावनी',
    title: 'आगामी 48 घंटों में उत्तर-पश्चिमी भारत में शुष्क मौसम, रबी बुवाई का उपयुक्त समय',
    summary: 'मौसम विभाग (IMD) के अनुसार पंजाब, हरियाणा, राजस्थान और पश्चिमी मध्य प्रदेश में अगले 3-4 दिन मौसम साफ और धूप खिली रहेगी। किसान भाई गेहूं व चने की पलेवा सिंचाई समय पर पूरी करें।',
    detailedText: 'मौसम विभाग के नवीनतम कृषि बुलेटिन के अनुसार उत्तर-पश्चिम मैदानी भागों में बारिश की संभावना नहीं है। दिन का तापमान 28-30 डिग्री और रात का तापमान 15-18 डिग्री सेल्सियस रहने की संभावना है, जो गेहूं और सरसों के अंकुरण के लिए अत्यंत अनुकूल है। किसान भाइयों को सलाह दी जाती है कि वे बुवाई से पूर्व बीजोपचार अवश्य करें।',
    source: 'भारत मौसम विज्ञान विभाग (IMD Agromet Bulletin)',
    date: '21 अक्टूबर 2026, 09:30 AM'
  },
  {
    id: 'post-2',
    category: 'mandi_spike',
    categoryLabel: 'मंडी भाव हलचल',
    title: 'मध्य प्रदेश व राजस्थान की मंडियों में सरसों के भाव में ₹150 प्रति क्विंटल की तेजी',
    summary: 'त्योहारी मांग और खाद्य तेल आयात शुल्क बढ़ने से हाजिर मंडियों में सरसों का मॉडल भाव ₹5,650 से ₹5,800 के स्तर पर पहुंच गया है। अच्छी गुणवत्ता वाली सूखी सरसों बेचने पर किसानों को बेहतर मुनाफा मिल रहा है।',
    detailedText: 'आज राजस्थान की भरतपुर मंडी और मध्य प्रदेश की मुरैना मंडी में 42% तेल वाली काली सरसों का अधिकतम भाव ₹5,850 प्रति क्विंटल दर्ज किया गया। कृषि विशेषज्ञों का सुझाव है कि किसान अपनी उपज को साफ एवं 8-9% नमी पर सुखाकर ही मंडी लाएं ताकि व्यापारियों द्वारा किसी प्रकार की कटौती न की जाए।',
    source: 'कृषि विपणन निदेशालय (AGMARKNET Daily Summary)',
    date: '21 अक्टूबर 2026, 08:15 AM'
  },
  {
    id: 'post-3',
    category: 'pest_warning',
    categoryLabel: 'कीट एवं रोग अलर्ट',
    title: 'गेहूं उत्पादक किसान सावधान: सुबह के समय पीला रतुआ (Yellow Rust) की निगरानी करें',
    summary: 'फसल की पत्तियों पर पीले रंग की रेखाएं या पाउडर दिखने पर तुरंत कृषि विज्ञान केंद्र से संपर्क करें या फसल डॉक्टर फीचर से फोटो लेकर प्रमाणित दवा का छिड़काव करें।',
    detailedText: 'आईसीएआर गेहूं अनुसंधान संस्थान द्वारा जारी परामर्श के अनुसार तराई एवं सिंचित क्षेत्रों में रात में नमी और सुबह की ओस से रतुआ फफूंद के फैलने की संभावना रहती है। प्राथमिक अवस्था में प्रोपिकोनाज़ोल 25% ईसी (200 मिली प्रति एकड़) का छिड़काव करने से रोग 100% नियंत्रित हो जाता है।',
    source: 'आईसीएआर - भारतीय गेहूं एवं जौ अनुसंधान संस्थान (IIWBR Karnal)',
    date: '20 अक्टूबर 2026, 04:00 PM'
  },
  {
    id: 'post-4',
    category: 'scheme_update',
    categoryLabel: 'सरकारी घोषणा',
    title: 'पीएम किसान 19वीं किस्त: लाभार्थी किसान जल्द पूरी करें आधार बैंक लिंकिंग (e-KYC)',
    summary: 'कृषि मंत्रालय ने सभी किसानों को सूचित किया है कि अगली ₹2,000 की किस्त केवल आधार आधारित डीबीटी से ही भेजी जाएगी। नजदीकी सीएससी सेंटर पर जाकर बायोमेट्रिक सत्यापन कराएं।',
    detailedText: 'पीएम-किसान सम्मान निधि योजना के तहत केंद्र सरकार ने अपात्रता छंटनी के बाद पात्र किसानों के लिए आधार आधारित भुगतान अनिवार्य कर दिया है। जिन किसानों का लैंड सीडिंग या बैंक खाता एनपीसीआई से लिंक नहीं है, वे पीएम किसान पोर्टल अथवा पीएम किसान मोबाइल ऐप के माध्यम से फेस ऑथेंटिकेशन द्वारा घर बैठे ई-केवाईसी पूर्ण कर सकते हैं।',
    source: 'कृषि एवं किसान कल्याण मंत्रालय, भारत सरकार',
    date: '20 अक्टूबर 2026, 11:30 AM'
  }
];

export default function UpdatesPage() {
  const { currentLocation } = useFarmer();
  const { t, speak, stopAudio } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activePlayingId, setActivePlayingId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'सभी समाचार व अलर्ट' },
    { id: 'weather_alert', label: 'मौसम अलर्ट' },
    { id: 'mandi_spike', label: 'मंडी हलचल' },
    { id: 'pest_warning', label: 'कीट रोग चेतावनी' },
    { id: 'scheme_update', label: 'सरकारी योजनाएं' },
  ];

  const filteredPosts = SAMPLE_POSTS.filter((post) => {
    return selectedCategory === 'all' ? true : post.category === selectedCategory;
  });

  const handlePlayAudio = (post: DailyPost) => {
    if (activePlayingId === post.id) {
      stopAudio();
      setActivePlayingId(null);
    } else {
      stopAudio();
      setActivePlayingId(post.id);
      speak(`${post.title}. ${post.summary}`);
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 flex items-center gap-2">
            <Newspaper className="w-8 h-8 text-kisan-700" />
            <span>दैनिक कृषि अपडेट एवं समाचार (Daily Advisories)</span>
          </h1>
          <p className="text-sm text-slate-500 font-medium">
            मौसम चेतावनी, मंडी भाव के रुझान, नई सरकारी योजनाएं एवं कृषि वैज्ञानिकों की दैनिक सलाह
          </p>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setSelectedCategory(c.id)}
            className={`text-xs px-4 py-2.5 rounded-full font-bold whitespace-nowrap transition-all ${
              selectedCategory === c.id
                ? 'bg-kisan-700 text-white shadow-sm'
                : 'bg-white border border-slate-200 text-slate-600 hover:border-kisan-400'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Updates Feed */}
      <div className="space-y-4">
        {filteredPosts.map((post) => {
          const isPlaying = activePlayingId === post.id;
          return (
            <article
              key={post.id}
              className="bg-white rounded-3xl p-6 sm:p-7 shadow-md border-2 border-slate-200 hover:border-kisan-300 transition-all space-y-4"
            >
              {/* Post Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span
                    className={`text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full ${
                      post.category === 'weather_alert'
                        ? 'bg-sky-100 text-sky-900 border border-sky-200'
                        : post.category === 'pest_warning'
                        ? 'bg-rose-100 text-rose-900 border border-rose-200'
                        : post.category === 'mandi_spike'
                        ? 'bg-amber-100 text-amber-900 border border-amber-200'
                        : 'bg-emerald-100 text-emerald-900 border border-emerald-200'
                    }`}
                  >
                    {post.categoryLabel}
                  </span>
                  <span className="text-xs text-slate-400 font-medium hidden sm:inline">
                    {post.date}
                  </span>
                </div>

                {/* Audio Listen Button */}
                <button
                  onClick={() => handlePlayAudio(post)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shadow-xs ${
                    isPlaying
                      ? 'bg-red-600 text-white animate-pulse'
                      : 'bg-cream-100 hover:bg-cream-200 text-earth-900 border border-earth-300'
                  }`}
                >
                  {isPlaying ? (
                    <>
                      <VolumeX className="w-3.5 h-3.5" />
                      <span>रोकें (Stop)</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5 text-kisan-700" />
                      <span>बोलकर सुनें (Listen)</span>
                    </>
                  )}
                </button>
              </div>

              {/* Title & Summary */}
              <div>
                <h2 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
                  {post.title}
                </h2>
                <p className="text-sm text-slate-600 font-medium mt-2 leading-relaxed">
                  {post.summary}
                </p>
              </div>

              {/* Detailed Breakdown */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-700 font-normal leading-relaxed">
                {post.detailedText}
              </div>

              {/* Source & Date Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs text-slate-400 font-medium">
                <span className="font-semibold text-slate-600">स्रोत: {post.source}</span>
                <span className="sm:hidden">{post.date}</span>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
