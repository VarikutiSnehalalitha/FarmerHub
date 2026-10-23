'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useFarmer } from '@/context/FarmerContext';
import { Mic, MicOff, Volume2, VolumeX, X, Sparkles, Send } from 'lucide-react';
import { startSpeechRecognition, isSpeechRecognitionSupported, stopSpeaking } from '@/lib/speech';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  sender: 'farmer' | 'assistant';
  text: string;
}

const QUICK_QUESTIONS: Record<string, string[]> = {
  hi: [
    'आज गेहूं का मंडी भाव क्या है?',
    'क्या आज कीटनाशक का छिड़काव कर सकते हैं?',
    'गेहूं में पीला रतुआ लग गया है, क्या करें?',
    'पीएम किसान की अगली 2000 रुपये की किस्त कब आएगी?'
  ],
  en: [
    'What is the mandi price of wheat today?',
    'Is today suitable for pesticide spraying?',
    'How to control yellow rust in wheat?',
    'What are the eligibility criteria for PM-KISAN?'
  ],
  pa: [
    'ਅੱਜ ਕਣਕ ਦਾ ਮੰਡੀ ਭਾਅ ਕੀ ਹੈ?',
    'ਕੀ ਅੱਜ ਸਪਰੇਅ ਕੀਤੀ ਜਾ ਸਕਦੀ ਹੈ?',
    'ਪੀਲਾ ਰਤੂਆ ਰੋਗ ਦਾ ਇਲਾਜ ਦੱਸੋ'
  ]
};

export default function VoiceAssistantModal({ isOpen, onClose }: Props) {
  const { currentLanguage, languageInfo, speak, stopAudio } = useLanguage();
  const { currentLocation, crops } = useFarmer();
  const [isListening, setIsListening] = useState(false);
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'assistant',
      text:
        currentLanguage === 'hi'
          ? `नमस्ते किसान भाई! मैं आपका डिजिटल कृषि साथी हूँ। आप मुझसे बोलकर मौसम, मंडी भाव या फसल रोग के बारे में पूछ सकते हैं।`
          : `Namaste Farmer! I am your Kisan Sahayak AI assistant. Ask me anything about crop diseases, mandi prices, or weather.`
    }
  ]);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      stopSpeaking();
      setIsListening(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleToggleListen = () => {
    if (isListening) {
      setIsListening(false);
      return;
    }

    if (!isSpeechRecognitionSupported()) {
      alert('Your browser does not support live speech recognition. You can type your question below.');
      return;
    }

    setIsListening(true);
    const stopRec = startSpeechRecognition(
      languageInfo.speechCode || 'hi-IN',
      (transcript) => {
        setIsListening(false);
        setInputText(transcript);
        processFarmerQuery(transcript);
      },
      (err) => {
        setIsListening(false);
      }
    );
  };

  const processFarmerQuery = (query: string) => {
    const userMsg: Message = { sender: 'farmer', text: query };
    const q = query.toLowerCase();

    let responseText = '';

    if (q.includes('भाव') || q.includes('मंडी') || q.includes('rate') || q.includes('price')) {
      responseText =
        currentLanguage === 'hi'
          ? `आज ${currentLocation.district} मंडी में शरबती गेहूं का मॉडल भाव ₹2,580 प्रति क्विंटल है (न्यूनतम ₹2,420, अधिकतम ₹2,750)। सरसों ₹5,650 और सोयाबीन ₹4,520 चल रही है।`
          : `Today in ${currentLocation.district} APMC, Sharbati wheat modal price is ₹2,580/quintal (Min ₹2,420, Max ₹2,750). Mustard is ₹5,650/q and Soybean is ₹4,520/q.`;
    } else if (q.includes('मौसम') || q.includes('छिड़काव') || q.includes('spray') || q.includes('weather') || q.includes('बारिश')) {
      responseText =
        currentLanguage === 'hi'
          ? `आज ${currentLocation.district} में मौसम साफ है। हवा की गति 11 किमी/घंटा और बारिश की संभावना केवल 15% है। आज कीटनाशक एवं टॉनिक के छिड़काव के लिए मौसम पूरी तरह अनुकूल है।`
          : `Today weather in ${currentLocation.district} is clear with wind speed 11 km/h and rain chance 15%. Weather is favorable for foliar spraying.`;
    } else if (q.includes('रतुआ') || q.includes('rust') || q.includes('रोग') || q.includes('दवा') || q.includes('कीड़ा') || q.includes('pest')) {
      responseText =
        currentLanguage === 'hi'
          ? `गेहूं में पीला रतुआ दिखने पर प्रोपिकोनाज़ोल 25% ईसी (टिल्ट / बम्पर) 200 मिली प्रति 200 लीटर पानी में मिलाकर प्रति एकड़ छिड़काव करें। साथ ही यूरिया की अधिक मात्रा न डालें।`
          : `For Yellow Rust in wheat, spray Propiconazole 25% EC @ 200 ml in 200 L water per acre. Avoid excess nitrogen fertilizer.`;
    } else if (q.includes('पीएम किसान') || q.includes('pm kisan') || q.includes('किस्त') || q.includes('रुपये')) {
      responseText =
        currentLanguage === 'hi'
          ? `पीएम किसान योजना के तहत पात्र किसानों को साल में 6,000 रुपये 3 किस्तों में मिलते हैं। अपनी ई-केवाईसी और बैंक खाते में आधार लिंकिंग ज़रूर जांच लें। समस्या होने पर हेल्पलाइन 155261 पर कॉल करें।`
          : `Under PM-KISAN, ₹6,000 is credited in 3 installments of ₹2,000. Ensure your e-KYC and Aadhaar seeding is active. Call 155261 for status.`;
    } else {
      responseText =
        currentLanguage === 'hi'
          ? `मैंने आपका सवाल दर्ज कर लिया है: "${query}"। इसके लिए आप हमारे कृषि विशेषज्ञ को कॉल कर सकते हैं: टोल-फ्री 1800-180-1551 (किसान कॉल सेंटर) या फसल डॉक्टर में फोटो खींचकर तुरंत समाधान पाएं।`
          : `I have noted your query: "${query}". You can also call the national Kisan Call Centre toll-free at 1800-180-1551 or use Crop Doctor with a leaf photo.`;
    }

    const assistantMsg: Message = { sender: 'assistant', text: responseText };
    setMessages((prev) => [...prev, userMsg, assistantMsg]);
    setInputText('');

    // Speak response out loud
    setIsSpeaking(true);
    speak(responseText);
  };

  const handleSend = () => {
    if (!inputText.trim()) return;
    processFarmerQuery(inputText);
  };

  const sampleQuestions = QUICK_QUESTIONS[currentLanguage] || QUICK_QUESTIONS['hi'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] flex flex-col shadow-2xl border-2 border-kisan-200 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-kisan-700 via-kisan-800 to-kisan-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-yellow-400 text-kisan-950 flex items-center justify-center shadow-lg font-bold">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold flex items-center gap-2">
                किसान सहायक AI
                <span className="text-xs px-2 py-0.5 rounded-full bg-kisan-500/40 text-yellow-200 border border-yellow-300/30">
                  Voice & Audio
                </span>
              </h3>
              <p className="text-xs text-kisan-100">बोलकर पूछें और बोलकर जवाब सुनें ({languageInfo.name})</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/20 transition-colors text-white"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Chat message history */}
        <div className="flex-1 p-5 overflow-y-auto space-y-4 bg-slate-50/70">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-3 ${msg.sender === 'farmer' ? 'flex-row-reverse' : ''}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                  msg.sender === 'farmer' ? 'bg-earth-600 text-white' : 'bg-kisan-700 text-white shadow-md'
                }`}
              >
                {msg.sender === 'farmer' ? '👨‍🌾' : '🤖'}
              </div>
              <div
                className={`max-w-[82%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.sender === 'farmer'
                    ? 'bg-earth-700 text-white rounded-tr-none'
                    : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none font-medium'
                }`}
              >
                {msg.text}
                {msg.sender === 'assistant' && (
                  <div className="mt-2 pt-2 border-t border-slate-100 flex items-center gap-2">
                    <button
                      onClick={() => speak(msg.text)}
                      className="text-xs text-kisan-700 font-bold flex items-center gap-1 hover:underline"
                    >
                      <Volume2 className="w-3.5 h-3.5" /> पुनः सुनें (Listen Again)
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-5 py-2.5 bg-cream-50 border-t border-cream-200 overflow-x-auto flex gap-2 no-scrollbar">
          {sampleQuestions.map((sq, i) => (
            <button
              key={i}
              onClick={() => processFarmerQuery(sq)}
              className="text-xs px-3 py-1.5 rounded-full bg-white border border-kisan-300 text-kisan-900 hover:bg-kisan-50 font-medium whitespace-nowrap shadow-xs transition-colors"
            >
              💬 {sq}
            </button>
          ))}
        </div>

        {/* Microphone and input action bar */}
        <div className="p-4 bg-white border-t border-slate-200 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={isListening ? 'सुन रहे हैं... कृपया बोलें' : 'यहाँ टाइप करें या माइक दबाकर बोलें...'}
              className="flex-1 px-4 py-3 border-2 border-slate-300 rounded-2xl focus:border-kisan-600 focus:outline-hidden text-sm text-slate-900 placeholder-slate-400 font-medium"
            />
            <button
              onClick={handleSend}
              className="p-3 bg-kisan-700 text-white rounded-2xl hover:bg-kisan-800 transition-colors shadow-md disabled:opacity-50"
              disabled={!inputText.trim()}
              aria-label="Send"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>

          {/* Large Touch Friendly Mic Button */}
          <div className="flex items-center justify-center">
            <button
              onClick={handleToggleListen}
              className={`flex items-center gap-3 px-6 py-3.5 rounded-full font-bold text-base shadow-xl transition-all ${
                isListening
                  ? 'bg-red-600 text-white animate-pulse ring-4 ring-red-300'
                  : 'bg-gradient-to-r from-kisan-600 to-kisan-700 text-white hover:from-kisan-700 hover:to-kisan-800'
              }`}
            >
              {isListening ? (
                <>
                  <MicOff className="w-6 h-6 animate-bounce" />
                  <span>सुन रहे हैं... (रोकने के लिए दबाएं)</span>
                </>
              ) : (
                <>
                  <Mic className="w-6 h-6 text-yellow-300" />
                  <span>माइक दबाएं और बोलें (Press Mic & Speak)</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
