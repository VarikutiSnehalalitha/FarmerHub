// Speech recognition and Text-to-Speech utilities for Indian Farmers

export function speakText(text: string, languageCode: string = 'hi-IN') {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported in this browser.');
    return;
  }

  window.speechSynthesis.cancel(); // Stop any active speech

  const cleanText = text.replace(/[*_#`[\]()]/g, '');
  const utterance = new SpeechSynthesisUtterance(cleanText);

  // Set appropriate voice rate and pitch for elderly/rural clarity
  utterance.rate = 0.9;
  utterance.pitch = 1.0;

  // Map to browser voice
  const voices = window.speechSynthesis.getVoices();
  const matchedVoice = voices.find((v) => v.lang.startsWith(languageCode.slice(0, 2)));
  if (matchedVoice) {
    utterance.voice = matchedVoice;
  }
  utterance.lang = languageCode;

  window.speechSynthesis.speak(utterance);
}

export function stopSpeaking() {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

export function isSpeechRecognitionSupported(): boolean {
  if (typeof window === 'undefined') return false;
  return 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window;
}

export function startSpeechRecognition(
  langCode: string,
  onResult: (transcript: string) => void,
  onError?: (err: any) => void
): () => void {
  if (typeof window === 'undefined') return () => {};

  const SpeechRec = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
  if (!SpeechRec) {
    if (onError) onError(new Error('Speech recognition not supported in this browser.'));
    return () => {};
  }

  const recognition = new SpeechRec();
  recognition.lang = langCode || 'hi-IN';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onresult = (event: any) => {
    const transcript = event.results[0][0].transcript;
    onResult(transcript);
  };

  recognition.onerror = (event: any) => {
    console.error('Speech recognition error:', event.error);
    if (onError) onError(event);
  };

  try {
    recognition.start();
  } catch (err) {
    console.warn('Recognition start exception:', err);
  }

  return () => {
    try {
      recognition.stop();
    } catch (e) {
      // Ignore
    }
  };
}
