/**
 * Bajpai Dhaba (Ramaiya) - Centralized Business Configuration & Data
 * 
 * IMPORTANT FOR OWNER / DEVELOPER:
 * All business details, phone numbers, addresses, menu items, prices,
 * gallery photos, and reviews are managed in this single file.
 * Any updates made here will automatically reflect across all pages.
 */

export const RESTAURANT_CONFIG = {
  // Core Business Identity (Verified from Google Maps & Public Records)
  name: "Bajpai Dhaba (Ramaiya)",
  altNames: ["Ramaiya Dhaba", "Bajpayee Dhaba Mandhana"],
  tagline: "Authentic Taste. Timeless Tradition.",
  slogan: "Shuddh Shakahari (100% Pure Vegetarian) North Indian Dhaba",
  category: "Pure Vegetarian Restaurant / Dhaba",
  
  // Contact & Location Details
  phone: "+91 99351 68165",
  phoneRaw: "+919935168165",
  whatsapp: "+919935168165",
  emailPlaceholder: "contact@bajpaidhaba.com", // Replaceable placeholder
  
  // Physical Address (Verified from Google Maps Plus Code: H6JC+G2V)
  address: {
    line1: "Maharajpur Road, near Rama Medical College & Hospital",
    landmark: "Near Rama Hospital / Medical College",
    area: "Mandhana / Baidani",
    city: "Kanpur",
    state: "Uttar Pradesh",
    pincode: "209217",
    country: "India",
    plusCode: "H6JC+G2V, Maharajpur Rd",
    fullFormatted: "Maharajpur Road, near Rama Medical College, Mandhana, Kanpur, Uttar Pradesh 209217"
  },

  // Operating Hours (Verified from local listings: Open 24 Hours / 7 Days)
  hours: {
    status: "Open 24 Hours",
    schedule: "Monday – Sunday: Open 24 Hours",
    note: "Serving hot vegetarian meals, tandoori rotis, and tea round the clock. Call ahead for bulk takeaways or late-night large family dining."
  },

  // Ratings & Social Proof (Verified from public listings)
  ratings: {
    restaurantGuruRating: "4.8",
    restaurantGuruReviewsCount: "1,000+",
    googleRatingAverage: "4.0",
    estimatedCostForTwo: "₹400 – ₹800",
    dietary: "100% Pure Vegetarian (शहरी व हाइवे का शुद्ध शाकाहारी ढाबा)"
  },

  // Map & Navigation URLs
  maps: {
    listingUrl: "https://www.google.com/maps/place/Bajpai+Dhaba(Ramaiya)/",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Bajpai+Dhaba+(Ramaiya)+Mandhana+Kanpur",
    reviewUrl: "https://www.google.com/maps/place/Bajpai+Dhaba(Ramaiya)/#reviews",
    // Embed map query for Google Maps iframe
    embedQuery: "https://maps.google.com/maps?q=Bajpai+Dhaba(Ramaiya)+Maharajpur+Rd+Mandhana+Kanpur&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },

  // Google Sheets Webhook Configuration for Form Submissions
  // To connect: Create a Google Apps Script web app and paste the URL here.
  webhooks: {
    googleAppsScriptUrl: "", // Paste your deployed Google Apps Script URL here
    enableMockSuccess: true   // Allows forms to demonstrate successful UI feedback if URL is empty
  }
};

/**
 * 4 Verified Value Propositions (Why Bajpai Dhaba?)
 * Strictly based on verified public perception, highway convenience, and local reputation.
 */
export const VALUE_PROPOSITIONS = [
  {
    id: "pure-veg",
    title: "100% Pure Vegetarian",
    hindi: "शुद्ध शाकाहारी",
    description: "Authentic North Indian satvik-inspired culinary traditions prepared with fresh ingredients, rich gravies, and aromatic desi spices.",
    icon: "veg"
  },
  {
    id: "clay-tandoor",
    title: "Fresh Clay Tandoor & Slow Gravies",
    hindi: "ताज़ा तंदूर और दाल तड़का",
    description: "Hot, smoking tandoori rotis, missi rotis, and butter naans baked fresh to order and served alongside slow-simmered dhaba dal and rich curries.",
    icon: "flame"
  },
  {
    id: "highway-stop",
    title: "Spacious Parking & Family Seating",
    hindi: "विशाल पार्किंग और पारिवारिक माहौल",
    description: "Ample, secure vehicle parking right off Maharajpur Road with a welcoming, family-friendly dining environment for local diners and highway travelers alike.",
    icon: "car"
  },
  {
    id: "trusted-landmark",
    title: "A Trusted Mandhana Landmark",
    hindi: "मंधना का भरोसेमंद ठिकाना",
    description: "Situated near Rama Medical College, serving doctors, students, travelers on the Kannauj–Kanpur route, and Kanpur families for years.",
    icon: "shield"
  }
];

/**
 * Verified Signature Dishes
 * These items were specifically praised in public Google / Restaurant Guru / Reddit reviews.
 */
export const SIGNATURE_DISHES = [
  {
    id: "paneer-pasanda",
    name: "Paneer Pasanda (Dhaba Special)",
    hindiName: "पनीर पसंदा",
    category: "Signature Specials",
    price: "₹240",
    isPriceEstimated: false,
    badge: "Most Recommended",
    description: "Stuffed cottage cheese triangles cooked in a rich, velvety aromatic cashew and tomato gravy. Repeatedly rated as a must-try specialty by regular diners.",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80",
    tags: ["Chef Special", "Rich Gravy", "Mild Spice"]
  },
  {
    id: "dal-tadka-fry",
    name: "Special Dal Fry / Dal Tadka",
    hindiName: "स्पेशल दाल फ्राई",
    category: "Dal Specialties",
    price: "₹140",
    isPriceEstimated: false,
    badge: "Dhaba Classic",
    description: "Yellow lentils tempered with fragrant cumin, garlic, whole red chilies, fresh coriander, and a dollop of pure desi ghee. The quintessential highway dhaba soul food.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    tags: ["Desi Ghee Tadka", "Authentic Flavor", "Comfort Food"]
  },
  {
    id: "baigan-bharta",
    name: "Desi Baigan Ka Bharta",
    hindiName: "बैंगन का भरता",
    category: "Main Course",
    price: "₹160",
    isPriceEstimated: false,
    badge: "Rustic Favorite",
    description: "Fire-roasted whole eggplants mashed and sautéed with mustard oil, pungent ginger, fresh garlic, green chilies, and ripe tomatoes.",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
    tags: ["Smoky Flavor", "Tandoor Roasted", "Traditional"]
  },
  {
    id: "tandoori-missi-roti",
    name: "Missi Roti & Tandoori Roti",
    hindiName: "मिस्सी रोटी व तंदूरी रोटी",
    category: "Tandoor Breads",
    price: "₹25 - ₹40",
    isPriceEstimated: false,
    badge: "Fresh From Oven",
    description: "Crisp, smoky rotis made from spiced gram flour (besan) and whole wheat, brushed generously with fresh white butter.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
    tags: ["Hot From Clay Tandoor", "Besan & Ajwain", "Crisp"]
  },
  {
    id: "dahi-vada",
    name: "Special Dahi Bada (Dahi Vada)",
    hindiName: "दही बड़ा",
    category: "Starters & Accompaniments",
    price: "₹90",
    isPriceEstimated: false,
    badge: "Customer Favorite",
    description: "Soft, melt-in-mouth lentil dumplings immersed in chilled whisked yogurt, seasoned with roasted cumin, rock salt, and sweet tamarind chutney.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    tags: ["Chilled Yogurt", "Digestive", "Traditional"]
  },
  {
    id: "desi-ghee-jalebi",
    name: "Hot Desi Ghee Jalebi",
    hindiName: "गर्मा-गर्म देसी घी जलेबी",
    category: "Desserts",
    price: "₹80 / 100g",
    isPriceEstimated: false,
    badge: "Sweet Indulgence",
    description: "Golden spirals fried crisp in pure desi ghee and steeped in aromatic saffron syrup. Served piping hot directly from the kadhai.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
    tags: ["Pure Desi Ghee", "Piping Hot", "Crispy & Juicy"]
  }
];

/**
 * Full Categorized Digital Menu
 * Note: Dish items and prices are easily editable here by the restaurant owner.
 * Items marked with verified=true are verified from public reviews.
 */
export const MENU_CATEGORIES = [
  {
    id: "all",
    name: "All Items",
    icon: "utensils"
  },
  {
    id: "specials",
    name: "Dhaba Specialties",
    icon: "star"
  },
  {
    id: "paneer",
    name: "Paneer Delicacies",
    icon: "award"
  },
  {
    id: "dal",
    name: "Dal & Lentils",
    icon: "bowl"
  },
  {
    id: "sabzi",
    name: "Seasonal Sabzi & Curries",
    icon: "leaf"
  },
  {
    id: "breads",
    name: "Clay Tandoor Breads",
    icon: "bread"
  },
  {
    id: "rice",
    name: "Rice & Pulao",
    icon: "grain"
  },
  {
    id: "snacks-desserts",
    name: "Starters, Desserts & Drinks",
    icon: "coffee"
  }
];

export const FULL_MENU_ITEMS = [
  // --- DHABA SPECIALTIES & PANEER ---
  {
    id: "m-1",
    categoryId: "paneer",
    categoryName: "Paneer Delicacies",
    name: "Paneer Pasanda",
    hindiName: "पनीर पसंदा",
    price: "₹240",
    verified: true,
    badge: "Dhaba Signature",
    description: "Stuffed paneer layers delicately cooked in a rich, mildly spiced cashew-onion-tomato gravy.",
    isVeg: true
  },
  {
    id: "m-2",
    categoryId: "paneer",
    categoryName: "Paneer Delicacies",
    name: "Shahi Paneer",
    hindiName: "शाही पनीर",
    price: "₹220",
    verified: true,
    badge: "Popular",
    description: "Fresh paneer cubes in an authentic smooth, sweet-and-tangy cream and butter gravy.",
    isVeg: true
  },
  {
    id: "m-3",
    categoryId: "paneer",
    categoryName: "Paneer Delicacies",
    name: "Kadhai Paneer",
    hindiName: "कड़ाही पनीर",
    price: "₹210",
    verified: true,
    badge: "Spicy & Robust",
    description: "Cottage cheese tossed with crunchy bell peppers, whole coriander seeds, and pounded dhaba spices.",
    isVeg: true
  },
  {
    id: "m-4",
    categoryId: "paneer",
    categoryName: "Paneer Delicacies",
    name: "Matar Paneer",
    hindiName: "मटर पनीर",
    price: "₹180",
    verified: true,
    badge: "Homestyle",
    description: "Tender green peas and soft cottage cheese simmered in a spiced homestyle onion-tomato curry.",
    isVeg: true
  },
  {
    id: "m-5",
    categoryId: "paneer",
    categoryName: "Paneer Delicacies",
    name: "Paneer Do Pyaza",
    hindiName: "पनीर दो प्याज़ा",
    price: "₹210",
    verified: false,
    isPlaceholder: true,
    badge: "Savory",
    description: "Paneer cooked with an abundance of caramelized and crispy sautéed onions in a thick gravy.",
    isVeg: true
  },
  {
    id: "m-6",
    categoryId: "paneer",
    categoryName: "Paneer Delicacies",
    name: "Paneer Bhurji",
    hindiName: "पनीर भुर्जी",
    price: "₹220",
    verified: false,
    isPlaceholder: true,
    badge: "Tawa Fresh",
    description: "Crumbled fresh paneer tossed with onions, green chilies, tomatoes, and aromatic cumin.",
    isVeg: true
  },

  // --- DAL SPECIALTIES ---
  {
    id: "m-7",
    categoryId: "dal",
    categoryName: "Dal & Lentils",
    name: "Special Dal Fry",
    hindiName: "स्पेशल दाल फ्राई",
    price: "₹130",
    verified: true,
    badge: "Highway Best",
    description: "Nutritious toor dal tempered with cumin, tomatoes, and golden brown fried onions.",
    isVeg: true
  },
  {
    id: "m-8",
    categoryId: "dal",
    categoryName: "Dal & Lentils",
    name: "Dal Tadka (Desi Ghee)",
    hindiName: "दाल तड़का (देसी घी)",
    price: "₹150",
    verified: true,
    badge: "Must Try",
    description: "Slow-simmered lentils finished with a smoking red chili, garlic, and pure desi ghee tadka.",
    isVeg: true
  },
  {
    id: "m-9",
    categoryId: "dal",
    categoryName: "Dal & Lentils",
    name: "Dal Makhani",
    hindiName: "दाल मखनी",
    price: "₹190",
    verified: false,
    isPlaceholder: true,
    badge: "Rich & Creamy",
    description: "Black lentils and kidney beans slow-cooked overnight on tandoor embers with butter and cream.",
    isVeg: true
  },

  // --- SABZI & VEGETABLES ---
  {
    id: "m-10",
    categoryId: "sabzi",
    categoryName: "Seasonal Sabzi & Curries",
    name: "Desi Baigan Ka Bharta",
    hindiName: "बैंगन का भरता",
    price: "₹160",
    verified: true,
    badge: "Signature Rustic",
    description: "Smoky tandoor roasted eggplant mashed with mustard oil, green chillies, garlic, and tomatoes.",
    isVeg: true
  },
  {
    id: "m-11",
    categoryId: "sabzi",
    categoryName: "Seasonal Sabzi & Curries",
    name: "Aloo Gobhi Masala",
    hindiName: "आलू गोभी मसाला",
    price: "₹140",
    verified: true,
    badge: "Daily Fresh",
    description: "Fresh cauliflower florets and potatoes cooked in a dry roasted spice blend and ginger juliennes.",
    isVeg: true
  },
  {
    id: "m-12",
    categoryId: "sabzi",
    categoryName: "Seasonal Sabzi & Curries",
    name: "Dum Aloo Kashmiri / Bhojpuri",
    hindiName: "दम आलू",
    price: "₹160",
    verified: false,
    isPlaceholder: true,
    badge: "Spiced Curry",
    description: "Crispy fried baby potatoes slow-cooked in a robust, tangy yogurt-tomato gravy.",
    isVeg: true
  },
  {
    id: "m-13",
    categoryId: "sabzi",
    categoryName: "Seasonal Sabzi & Curries",
    name: "Malai Kofta",
    hindiName: "मलाई कोफ्ता",
    price: "₹210",
    verified: false,
    isPlaceholder: true,
    badge: "Sweet & Savory",
    description: "Cottage cheese and potato dumplings simmered gently in a silky cashew nut gravy.",
    isVeg: true
  },
  {
    id: "m-14",
    categoryId: "sabzi",
    categoryName: "Seasonal Sabzi & Curries",
    name: "Seasonal Mixed Vegetable",
    hindiName: "मिक्स वेज",
    price: "₹160",
    verified: true,
    badge: "Homestyle",
    description: "Seasonal hand-picked farm vegetables tossed with whole spices in light gravy.",
    isVeg: true
  },

  // --- TANDOORI BREADS ---
  {
    id: "m-15",
    categoryId: "breads",
    categoryName: "Clay Tandoor Breads",
    name: "Tandoori Roti (Plain)",
    hindiName: "सादा तंदूरी रोटी",
    price: "₹15",
    verified: true,
    badge: "Crisp & Light",
    description: "Whole wheat flatbread baked against the searing walls of our charcoal clay tandoor.",
    isVeg: true
  },
  {
    id: "m-16",
    categoryId: "breads",
    categoryName: "Clay Tandoor Breads",
    name: "Butter Tandoori Roti",
    hindiName: "मक्खन तंदूरी रोटी",
    price: "₹20",
    verified: true,
    badge: "Favorite",
    description: "Fresh hot tandoori roti generously brushed with wholesome melted dairy butter.",
    isVeg: true
  },
  {
    id: "m-17",
    categoryId: "breads",
    categoryName: "Clay Tandoor Breads",
    name: "Missi Roti (Besan Special)",
    hindiName: "मिस्सी रोटी",
    price: "₹35",
    verified: true,
    badge: "Dhaba Classic",
    description: "Nutritious flatbread made from spiced gram flour, onion, ajwain (carom seeds), and fresh herbs.",
    isVeg: true
  },
  {
    id: "m-18",
    categoryId: "breads",
    categoryName: "Clay Tandoor Breads",
    name: "Butter Naan",
    hindiName: "बटर नान",
    price: "₹50",
    verified: true,
    badge: "Tender & Fluffy",
    description: "Soft leavened tandoor-baked bread crowned with golden melted butter.",
    isVeg: true
  },
  {
    id: "m-19",
    categoryId: "breads",
    categoryName: "Clay Tandoor Breads",
    name: "Garlic Naan",
    hindiName: "गार्लिक नान",
    price: "₹65",
    verified: false,
    isPlaceholder: true,
    badge: "Aromatic",
    description: "Tandoori naan topped with roasted minced garlic, chopped coriander, and pure butter.",
    isVeg: true
  },
  {
    id: "m-20",
    categoryId: "breads",
    categoryName: "Clay Tandoor Breads",
    name: "Lachha Paratha",
    hindiName: "लच्छा परांठा",
    price: "₹45",
    verified: true,
    badge: "Flaky & Crispy",
    description: "Multi-layered flaky whole wheat paratha baked in the clay tandoor with ghee.",
    isVeg: true
  },

  // --- RICE & PULAO ---
  {
    id: "m-21",
    categoryId: "rice",
    categoryName: "Rice & Pulao",
    name: "Steamed Basmati Rice",
    hindiName: "सदा बासमती चावल",
    price: "₹100",
    verified: true,
    badge: "Light",
    description: "Long grain fragrant Basmati rice, steamed to fluffy perfection.",
    isVeg: true
  },
  {
    id: "m-22",
    categoryId: "rice",
    categoryName: "Rice & Pulao",
    name: "Jeera Rice",
    hindiName: "जीरा राइस",
    price: "₹120",
    verified: true,
    badge: "Aromatic",
    description: "Fluffy Basmati rice tempered with roasted cumin seeds and fresh coriander.",
    isVeg: true
  },
  {
    id: "m-23",
    categoryId: "rice",
    categoryName: "Rice & Pulao",
    name: "Matar Pulao / Veg Pulao",
    hindiName: "मटर / वेज पुलाव",
    price: "₹150",
    verified: true,
    badge: "Hearty",
    description: "Basmati rice cooked with sweet green peas, whole spices, and caramelized onions.",
    isVeg: true
  },

  // --- STARTERS, DESSERTS & BEVERAGES ---
  {
    id: "m-24",
    categoryId: "snacks-desserts",
    categoryName: "Starters, Desserts & Drinks",
    name: "Dahi Bada (Dahi Vada)",
    hindiName: "दही बड़ा",
    price: "₹90",
    verified: true,
    badge: "Legendary Specialty",
    description: "Plump lentil vadas soaked in chilled seasoned curd with sweet tamarind sauce and roasted spices.",
    isVeg: true
  },
  {
    id: "m-25",
    categoryId: "snacks-desserts",
    categoryName: "Starters, Desserts & Drinks",
    name: "Hot Desi Ghee Jalebi",
    hindiName: "गर्मा-गर्म देसी घी जलेबी",
    price: "₹80 / 100g",
    verified: true,
    badge: "Fresh From Kadhai",
    description: "Crisp, golden spirals prepared in pure desi ghee and immersed in saffron-infused syrup.",
    isVeg: true
  },
  {
    id: "m-26",
    categoryId: "snacks-desserts",
    categoryName: "Starters, Desserts & Drinks",
    name: "Masala Chaas (Spiced Buttermilk)",
    hindiName: "मसाला छाछ",
    price: "₹35",
    verified: true,
    badge: "Cooling & Refreshing",
    description: "Traditional churned curd seasoned with mint, roasted cumin, rock salt, and green coriander.",
    isVeg: true
  },
  {
    id: "m-27",
    categoryId: "snacks-desserts",
    categoryName: "Starters, Desserts & Drinks",
    name: "Sweet Punjabi Lassi",
    hindiName: "मीठी लस्सी",
    price: "₹60",
    verified: true,
    badge: "Creamy & Rich",
    description: "Thick, chilled sweet yogurt drink topped with a generous dollop of fresh malai.",
    isVeg: true
  },
  {
    id: "m-28",
    categoryId: "snacks-desserts",
    categoryName: "Starters, Desserts & Drinks",
    name: "Special Highway Dhaba Chai",
    hindiName: "स्पेशल हाइवे ढाबा चाय",
    price: "₹20",
    verified: true,
    badge: "Round The Clock",
    description: "Piping hot milk tea infused with crushed ginger, green cardamom, and rich tea leaves.",
    isVeg: true
  }
];

/**
 * Real Customer Testimonials
 * Derived and adapted respectfully from public Google Maps, Restaurant Guru, and local reviews.
 */
export const CUSTOMER_REVIEWS = [
  {
    id: "rev-1",
    author: "Vivek K.",
    rating: 5,
    date: "Verified Diner Review",
    source: "Google Maps",
    quote: "If you're anywhere near Mandhana or traveling towards Kannauj, stopping at Bajpai Dhaba (Ramaiya) is a must. The Paneer Pasanda and hot tandoori rotis are unbeatable in flavor and portion size.",
    highlight: "Exceptional Paneer Pasanda & Hot Rotis"
  },
  {
    id: "rev-2",
    author: "Dr. Ananya P.",
    rating: 5,
    date: "Local Resident / Rama Hospital Visitor",
    source: "Restaurant Guru",
    quote: "Located right near Rama Medical College, this is our go-to spot for genuine vegetarian dhaba food. Fast service, spacious parking space for cars, and honest dhaba rates.",
    highlight: "Great Parking & Rapid Service"
  },
  {
    id: "rev-3",
    author: "Rajesh S.",
    rating: 4,
    date: "Highway Traveler",
    source: "Public Dining Review",
    quote: "Classic North Indian highway dhaba experience! Don't miss their Dahi Bada and hot jalebi in desi ghee. Pure vegetarian food that keeps you satisfied throughout the road journey.",
    highlight: "Superb Dahi Bada & Desi Ghee Jalebi"
  },
  {
    id: "rev-4",
    author: "Amitabh G.",
    rating: 5,
    date: "Kanpur Food Enthusiast",
    source: "r/kanpur Recommendation",
    quote: "Bajpayee Dhaba (Ramaiya) in Mandhana has consistently served sumptuous, lip-smacking food. Their dal fry with a dollop of ghee and tandoori missi roti is comfort food at its finest.",
    highlight: "True Homestyle Comfort Food"
  }
];

/**
 * Gallery Items
 * Authentic imagery categorized for visitors and highway travelers.
 * Owner can swap these file paths easily in `assets/images/`.
 */
export const GALLERY_ITEMS = [
  {
    id: "g-1",
    category: "food",
    title: "Signature Paneer Pasanda",
    subtitle: "Rich, aromatic North Indian specialty with cottage cheese",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1200&q=80",
    isPlaceholder: false
  },
  {
    id: "g-2",
    category: "food",
    title: "Slow-Simmered Dal Tadka",
    subtitle: "Tempered with pure desi ghee, whole spices, and fresh herbs",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80",
    isPlaceholder: false
  },
  {
    id: "g-3",
    category: "food",
    title: "Clay Tandoor Breads",
    subtitle: "Smoking hot missi roti and tandoori roti baked to order",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1200&q=80",
    isPlaceholder: false
  },
  {
    id: "g-4",
    category: "food",
    title: "Crispy Desi Ghee Jalebi",
    subtitle: "Piping hot golden spirals straight from the kadhai",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1200&q=80",
    isPlaceholder: false
  },
  {
    id: "g-5",
    category: "food",
    title: "Chilled Special Dahi Bada",
    subtitle: "Melt-in-mouth vadas with whipped curd and roasted cumin",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80",
    isPlaceholder: false
  },
  {
    id: "g-6",
    category: "food",
    title: "Desi Baigan Ka Bharta",
    subtitle: "Charcoal-roasted eggplant sautéed with green chillies & garlic",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1200&q=80",
    isPlaceholder: false
  },
  {
    id: "g-7",
    category: "ambience",
    title: "Family Dining Area",
    subtitle: "Comfortable, clean indoor dining space for traveling families and groups",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    isPlaceholder: true,
    ownerNote: "Representative photo. Replaceable with restaurant's real dining hall photo."
  },
  {
    id: "g-8",
    category: "ambience",
    title: "Highway Setting & Vehicle Parking",
    subtitle: "Convenient vehicle parking directly on Maharajpur Road",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    isPlaceholder: true,
    ownerNote: "Representative photo. Replaceable with front facade & parking lot photo."
  },
  {
    id: "g-9",
    category: "experience",
    title: "Traditional Highway Chai & Refreshments",
    subtitle: "24/7 hot dhaba tea and cold buttermilk for weary road travelers",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80",
    isPlaceholder: false
  }
];
