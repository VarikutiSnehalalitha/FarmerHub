import { LanguageCode, LanguageInfo } from '@/types';

export const INDIAN_LANGUAGES: LanguageInfo[] = [
  { code: 'hi', name: 'हिन्दी', englishName: 'Hindi', script: 'Devanagari', speechCode: 'hi-IN' },
  { code: 'en', name: 'English', englishName: 'English', script: 'Latin', speechCode: 'en-IN' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ', englishName: 'Punjabi', script: 'Gurmukhi', speechCode: 'pa-IN' },
  { code: 'bn', name: 'বাংলা', englishName: 'Bengali', script: 'Bengali', speechCode: 'bn-IN' },
  { code: 'mr', name: 'मराठी', englishName: 'Marathi', script: 'Devanagari', speechCode: 'mr-IN' },
  { code: 'te', name: 'తెలుగు', englishName: 'Telugu', script: 'Telugu', speechCode: 'te-IN' },
  { code: 'ta', name: 'தமிழ்', englishName: 'Tamil', script: 'Tamil', speechCode: 'ta-IN' },
  { code: 'gu', name: 'ગુજરાતી', englishName: 'Gujarati', script: 'Gujarati', speechCode: 'gu-IN' },
  { code: 'kn', name: 'ಕನ್ನಡ', englishName: 'Kannada', script: 'Kannada', speechCode: 'kn-IN' },
  { code: 'or', name: 'ଓଡ଼ିଆ', englishName: 'Odia', script: 'Odia', speechCode: 'or-IN' },
  { code: 'ml', name: 'മലയാളം', englishName: 'Malayalam', script: 'Malayalam', speechCode: 'ml-IN' },
  { code: 'as', name: 'অসমীয়া', englishName: 'Assamese', script: 'Bengali-Assamese', speechCode: 'as-IN' },
  { code: 'ur', name: 'اردو', englishName: 'Urdu', script: 'Perso-Arabic', isRtl: true, speechCode: 'ur-IN' },
  { code: 'ks', name: 'کٲشُر / कॉशुर', englishName: 'Kashmiri', script: 'Perso-Arabic/Devanagari', isRtl: true, speechCode: 'ks-IN' },
  { code: 'ne', name: 'नेपाली', englishName: 'Nepali', script: 'Devanagari', speechCode: 'ne-NP' },
  { code: 'sd', name: 'سنڌي / सिन्धी', englishName: 'Sindhi', script: 'Perso-Arabic/Devanagari', isRtl: true, speechCode: 'sd-IN' },
  { code: 'sa', name: 'संस्कृतम्', englishName: 'Sanskrit', script: 'Devanagari', speechCode: 'sa-IN' },
  { code: 'kok', name: 'कोंकणी', englishName: 'Konkani', script: 'Devanagari', speechCode: 'kok-IN' },
  { code: 'mai', name: 'मैथिली', englishName: 'Maithili', script: 'Devanagari', speechCode: 'mai-IN' },
  { code: 'doi', name: 'डोगरी', englishName: 'Dogri', script: 'Devanagari', speechCode: 'doi-IN' },
  { code: 'brx', name: 'बड़ो', englishName: 'Bodo', script: 'Devanagari', speechCode: 'brx-IN' },
  { code: 'mni', name: 'মৈতৈলোন্', englishName: 'Manipuri (Meitei)', script: 'Meetei Mayek/Bengali', speechCode: 'mni-IN' },
  { code: 'sat', name: 'ᱥᱟᱱᱛᱟᱲᱤ', englishName: 'Santali', script: 'Ol Chiki', speechCode: 'sat-IN' },
];

export const getLanguageByCode = (code: string): LanguageInfo => {
  return INDIAN_LANGUAGES.find((l) => l.code === code) || INDIAN_LANGUAGES[0];
};
