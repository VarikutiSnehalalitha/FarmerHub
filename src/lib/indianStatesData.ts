export interface DistrictInfo {
  state: string;
  district: string;
  teluguName?: string;
  hindiName?: string;
  majorCrops: string;
}

export const AP_DISTRICTS: DistrictInfo[] = [
  { state: 'Andhra Pradesh', district: 'Guntur', teluguName: 'గుంటూరు', majorCrops: 'Chilli, Cotton, Paddy, Tobacco' },
  { state: 'Andhra Pradesh', district: 'NTR (Vijayawada)', teluguName: 'ఎన్టీఆర్ (విజయవాడ)', majorCrops: 'Paddy, Mango, Black Gram, Sugarcane' },
  { state: 'Andhra Pradesh', district: 'Kurnool', teluguName: 'కర్నూలు', majorCrops: 'Groundnut, Cotton, Sunflower, Onion' },
  { state: 'Andhra Pradesh', district: 'Ananthapuramu (Anantapur)', teluguName: 'అనంతపురం', majorCrops: 'Groundnut, Sweet Orange, Pomegranate' },
  { state: 'Andhra Pradesh', district: 'Tirupati', teluguName: 'తిరుపతి', majorCrops: 'Groundnut, Sugarcane, Paddy, Vegetables' },
  { state: 'Andhra Pradesh', district: 'Chittoor', teluguName: 'చిత్తూరు', majorCrops: 'Tomato, Mango, Jaggery, Dairy' },
  { state: 'Andhra Pradesh', district: 'East Godavari (Rajamahendravaram)', teluguName: 'తూర్పు గోదావరి', majorCrops: 'Paddy, Oil Palm, Banana, Coconut' },
  { state: 'Andhra Pradesh', district: 'West Godavari (Bhimavaram)', teluguName: 'పశ్చిమ గోదావరి', majorCrops: 'Paddy, Aqua-culture, Coconut, Cocoa' },
  { state: 'Andhra Pradesh', district: 'Krishna (Machilipatnam)', teluguName: 'కృష్ణా (మచిలీపట్నం)', majorCrops: 'Paddy, Black Gram, Guava, Fish' },
  { state: 'Andhra Pradesh', district: 'Kakinada', teluguName: 'కాకినాడ', majorCrops: 'Paddy, Coconut, Oil Palm, Pulses' },
  { state: 'Andhra Pradesh', district: 'Dr. B.R. Ambedkar Konaseema', teluguName: 'డా. బి.ఆర్. అంబేద్కర్ కోనసీమ', majorCrops: 'Coconut, Paddy, Banana, Spices' },
  { state: 'Andhra Pradesh', district: 'Eluru', teluguName: 'ఏలూరు', majorCrops: 'Paddy, Oil Palm, Tobacco, Cocoa' },
  { state: 'Andhra Pradesh', district: 'Prakasam (Ongole)', teluguName: 'ప్రకాశం (ఒంగోలు)', majorCrops: 'Tobacco, Bengal Gram, Cotton, Red Gram' },
  { state: 'Andhra Pradesh', district: 'Sri Potti Sriramulu Nellore', teluguName: 'శ్రీ పొట్టి శ్రీరాములు నెల్లూరు', majorCrops: 'Paddy (Molagolukulu), Lemon, Aqua' },
  { state: 'Andhra Pradesh', district: 'YSR Kadapa', teluguName: 'వైఎస్ఆర్ కడప', majorCrops: 'Bengal Gram, Banana, Turmeric, Papaya' },
  { state: 'Andhra Pradesh', district: 'Nandyal', teluguName: 'నంద్యాల', majorCrops: 'Bengal Gram, Jowar, Sunflower, Cotton' },
  { state: 'Andhra Pradesh', district: 'Palnadu (Narasaraopet)', teluguName: 'పల్నాడు', majorCrops: 'Chilli, Cotton, Paddy, Red Gram' },
  { state: 'Andhra Pradesh', district: 'Bapatla', teluguName: 'బాపట్ల', majorCrops: 'Paddy, Black Gram, Cashew, Groundnut' },
  { state: 'Andhra Pradesh', district: 'Annamayya', teluguName: 'అన్నమయ్య', majorCrops: 'Tomato, Groundnut, Mango, Papaya' },
  { state: 'Andhra Pradesh', district: 'Sri Sathya Sai', teluguName: 'శ్రీ సత్యసాయి', majorCrops: 'Groundnut, Mulberry (Sericulture), Maize' },
  { state: 'Andhra Pradesh', district: 'Visakhapatnam', teluguName: 'విశాఖపట్నం', majorCrops: 'Sugarcane, Paddy, Vegetables' },
  { state: 'Andhra Pradesh', district: 'Anakapalli', teluguName: 'అనకాపల్లి', majorCrops: 'Sugarcane (Jaggery Hub), Paddy, Sesame' },
  { state: 'Andhra Pradesh', district: 'Vizianagaram', teluguName: 'విజయనగరం', majorCrops: 'Mesta, Groundnut, Paddy, Mango' },
  { state: 'Andhra Pradesh', district: 'Srikakulam', teluguName: 'శ్రీకాకుళం', majorCrops: 'Paddy, Cashew, Coconut, Black Gram' },
  { state: 'Andhra Pradesh', district: 'Parvathipuram Manyam', teluguName: 'పార్వతీపురం మన్యం', majorCrops: 'Paddy, Millets, Cashew, Turmeric' },
  { state: 'Andhra Pradesh', district: 'Alluri Sitharama Raju', teluguName: 'అల్లూరి సీతారామరాజు', majorCrops: 'Coffee, Pepper, Turmeric, Millets' }
];

export const TELANGANA_DISTRICTS: DistrictInfo[] = [
  { state: 'Telangana', district: 'Warangal', teluguName: 'వరంగల్', majorCrops: 'Cotton, Chilli, Paddy, Red Gram' },
  { state: 'Telangana', district: 'Hanumakonda', teluguName: 'హనుమకొండ', majorCrops: 'Cotton, Paddy, Maize, Pulses' },
  { state: 'Telangana', district: 'Nizamabad', teluguName: 'నిజామాబాద్', majorCrops: 'Turmeric (Haldi), Paddy, Soybean, Maize' },
  { state: 'Telangana', district: 'Khammam', teluguName: 'ఖమ్మం', majorCrops: 'Chilli, Cotton, Maize, Mango' },
  { state: 'Telangana', district: 'Karimnagar', teluguName: 'కరీంనగర్', majorCrops: 'Paddy, Maize, Cotton, Groundnut' },
  { state: 'Telangana', district: 'Suryapet', teluguName: 'సూర్యాపేట', majorCrops: 'Paddy (Sona Masoori), Cotton, Green Gram' },
  { state: 'Telangana', district: 'Nalgonda', teluguName: 'నల్గొండ', majorCrops: 'Paddy, Cotton, Sweet Orange (Mosambi)' },
  { state: 'Telangana', district: 'Mahabubnagar', teluguName: 'మహబూబ్‌నగర్', majorCrops: 'Castor, Jowar, Red Gram, Groundnut' },
  { state: 'Telangana', district: 'Siddipet', teluguName: 'సిద్దిపేట', majorCrops: 'Paddy, Maize, Cotton, Vegetables' },
  { state: 'Telangana', district: 'Sangareddy', teluguName: 'సంగారెడ్డి', majorCrops: 'Sugarcane, Ginger, Soyabean, Cotton' },
  { state: 'Telangana', district: 'Medak', teluguName: 'మెదక్', majorCrops: 'Paddy, Maize, Cotton, Pulses' },
  { state: 'Telangana', district: 'Rangareddy', teluguName: 'రంగారెడ్డి', majorCrops: 'Vegetables, Flowers, Maize, Red Gram' },
  { state: 'Telangana', district: 'Adilabad', teluguName: 'ఆదిలాబాద్', majorCrops: 'Cotton (White Gold), Soybean, Red Gram' },
  { state: 'Telangana', district: 'Nirmal', teluguName: 'నిర్మల్', majorCrops: 'Soybean, Cotton, Paddy, Turmeric' },
  { state: 'Telangana', district: 'Mancherial', teluguName: 'మంచిర్యాల', majorCrops: 'Cotton, Paddy, Red Gram, Mango' },
  { state: 'Telangana', district: 'Kumuram Bheem Asifabad', teluguName: 'కొమరంభీమ్ ఆసిఫాబాద్', majorCrops: 'Cotton, Soybean, Jowar, Millets' },
  { state: 'Telangana', district: 'Jagtial', teluguName: 'జగిత్యాల', majorCrops: 'Mango, Turmeric, Paddy, Maize' },
  { state: 'Telangana', district: 'Peddapalli', teluguName: 'పెద్దపల్లి', majorCrops: 'Paddy, Cotton, Maize, Chillies' },
  { state: 'Telangana', district: 'Rajanna Sircilla', teluguName: 'రాజన్న సిరిసిల్ల', majorCrops: 'Paddy, Cotton, Maize, Castor' },
  { state: 'Telangana', district: 'Kamareddy', teluguName: 'కామారెడ్డి', majorCrops: 'Paddy, Sugarcane, Soybean, Maize' },
  { state: 'Telangana', district: 'Bhadradri Kothagudem', teluguName: 'భద్రాద్రి కొత్తగూడెం', majorCrops: 'Paddy, Chilli, Cotton, Oil Palm' },
  { state: 'Telangana', district: 'Mahabubabad', teluguName: 'మహబూబాబాద్', majorCrops: 'Chilli, Cotton, Paddy, Turmeric' },
  { state: 'Telangana', district: 'Jangaon', teluguName: 'జనగామ', majorCrops: 'Cotton, Paddy, Red Gram, Groundnut' },
  { state: 'Telangana', district: 'Jayashankar Bhupalpally', teluguName: 'జయశంకర్ భూపాలపల్లి', majorCrops: 'Paddy, Cotton, Chillies' },
  { state: 'Telangana', district: 'Mulugu', teluguName: 'ములుగు', majorCrops: 'Paddy, Cotton, Chillies, Millets' },
  { state: 'Telangana', district: 'Yadadri Bhuvanagiri', teluguName: 'యాదాద్రి భువనగిరి', majorCrops: 'Cotton, Paddy, Castor, Vegetables' },
  { state: 'Telangana', district: 'Vikarabad', teluguName: 'వికారాబాద్', majorCrops: 'Red Gram (Tandur Pappu GI Tag), Cotton' },
  { state: 'Telangana', district: 'Medchal-Malkajgiri', teluguName: 'మేడ్చల్-మల్కాజ్‌గిరి', majorCrops: 'Vegetables, Dairy, Poultry, Flowers' },
  { state: 'Telangana', district: 'Hyderabad', teluguName: 'హైదరాబాద్', majorCrops: 'Urban horticulture, Agri-tech, Seed hub' },
  { state: 'Telangana', district: 'Nagarkurnool', teluguName: 'నాగర్‌కర్నూల్', majorCrops: 'Groundnut, Castor, Cotton, Millets' },
  { state: 'Telangana', district: 'Wanaparthy', teluguName: 'వనపర్తి', majorCrops: 'Groundnut, Paddy, Mango, Cotton' },
  { state: 'Telangana', district: 'Jogulamba Gadwal', teluguName: 'జోగులాంబ గద్వాల్', majorCrops: 'Cotton, Groundnut, Paddy, Chilli' },
  { state: 'Telangana', district: 'Narayanpet', teluguName: 'నారాయణపేట', majorCrops: 'Cotton, Red Gram, Castor, Jowar' }
];

export const OTHER_INDIAN_DISTRICTS: DistrictInfo[] = [
  // Punjab
  { state: 'Punjab', district: 'Ludhiana', hindiName: 'लुधियाना', majorCrops: 'Wheat, Paddy, Maize, Dairy' },
  { state: 'Punjab', district: 'Amritsar', hindiName: 'अमृतसर', majorCrops: 'Basmati Rice, Wheat, Vegetables' },
  { state: 'Punjab', district: 'Bathinda', hindiName: 'बठिंडा', majorCrops: 'Cotton, Wheat, Mustard' },
  // Haryana
  { state: 'Haryana', district: 'Karnal', hindiName: 'करनाल', majorCrops: 'Basmati Paddy, Wheat, Sugarcane' },
  { state: 'Haryana', district: 'Sirsa', hindiName: 'सिरसा', majorCrops: 'Cotton, Wheat, Mustard' },
  // Madhya Pradesh
  { state: 'Madhya Pradesh', district: 'Sehore', hindiName: 'सीहोर', majorCrops: 'Sharbati Wheat, Soybean, Gram' },
  { state: 'Madhya Pradesh', district: 'Bhopal', hindiName: 'भोपाल', majorCrops: 'Wheat, Soybean, Vegetables' },
  { state: 'Madhya Pradesh', district: 'Hoshangabad', hindiName: 'नर्मदापुरम', majorCrops: 'Paddy, Wheat, Moong' },
  // Maharashtra
  { state: 'Maharashtra', district: 'Nashik', hindiName: 'नासिक', majorCrops: 'Onion, Grapes, Pomegranate, Tomato' },
  { state: 'Maharashtra', district: 'Latur', hindiName: 'लातूर', majorCrops: 'Soybean, Tur / Red Gram, Sugarcane' },
  { state: 'Maharashtra', district: 'Nagpur', hindiName: 'नागपुर', majorCrops: 'Orange (Santra), Cotton, Soybean' },
  // Rajasthan
  { state: 'Rajasthan', district: 'Bharatpur', hindiName: 'भरतपुर', majorCrops: 'Mustard, Wheat, Bajra' },
  { state: 'Rajasthan', district: 'Alwar', hindiName: 'अलवर', majorCrops: 'Mustard, Onion, Barley' },
  // Gujarat
  { state: 'Gujarat', district: 'Rajkot', hindiName: 'राजकोट', majorCrops: 'Cotton, Groundnut, Cumin, Sesame' },
  // Karnataka
  { state: 'Karnataka', district: 'Kolar', hindiName: 'कोलार', majorCrops: 'Tomato, Silk (Mulberry), Mango' },
  { state: 'Karnataka', district: 'Belagavi', hindiName: 'बेलगावी', majorCrops: 'Sugarcane, Soybean, Maize' },
  // Tamil Nadu
  { state: 'Tamil Nadu', district: 'Thanjavur', hindiName: 'तंजாவూర్', majorCrops: 'Paddy (Rice Bowl of TN), Coconut' },
  { state: 'Tamil Nadu', district: 'Madurai', hindiName: 'மதுரை', majorCrops: 'Jasmine, Paddy, Cotton, Pulses' },
  // Uttar Pradesh
  { state: 'Uttar Pradesh', district: 'Agra', hindiName: 'आगरा', majorCrops: 'Potato, Mustard, Bajra, Wheat' },
  { state: 'Uttar Pradesh', district: 'Varanasi', hindiName: 'वाराणसी', majorCrops: 'Vegetables, Paddy, Wheat, Mango' }
];

export const ALL_DISTRICTS: DistrictInfo[] = [
  ...AP_DISTRICTS,
  ...TELANGANA_DISTRICTS,
  ...OTHER_INDIAN_DISTRICTS
];
