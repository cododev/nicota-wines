import React, { useState, useEffect, useCallback } from 'react';
import { Wine, ShoppingCart, Menu, X, ChevronDown, ChevronLeft, ChevronRight, Award, Thermometer, Utensils, Plus, Minus, ShoppingBag, Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter, ArrowRight, Calendar, Globe, Star, Check, Filter, Users, Heart, Send, Camera, Image } from 'lucide-react';

// ============================================
// COMPLETE WINE CATALOG (37 Products)
// ============================================

const wines = [
  // ITALY - Fina Miral Range
  { id: 1, name: "Fina Miral Nero D'Avola DOC 2023 Organic", country: "Italy", region: "Sicily", type: "Red", grape: "100% Nero D'Avola", price: 70000, pricePerCase: "₦70,000", description: "An organic Sicilian red showcasing the island's signature grape. Intense ruby red with violet hues, blooming with fresh red and dark berries, blood oranges, and red spices. Medium-bodied with a spicy, crunchy finish.", alcohol: "13.5%", pairing: "BBQ meats, beef stew, oxtail soup", serving: "16-18°C", awards: ["DOC Certified", "Organic"], featured: true, category: "red" },
  { id: 2, name: "Fina Miral Grillo DOC 2023 Organic", country: "Italy", region: "Sicily", type: "White", grape: "100% Grillo", price: 70000, pricePerCase: "₦70,000", description: "A fresh, aromatic white wine from Sicily's indigenous Grillo grape. Bright straw yellow with green reflections, offering citrus and tropical fruit notes with a mineral finish.", alcohol: "12.5%", pairing: "Seafood, light salads, appetizers", serving: "8-10°C", awards: ["DOC Certified", "Organic"], featured: false, category: "white" },
  { id: 3, name: "Fina Miral Chardonnay IGP 2023 Organic", country: "Italy", region: "Sicily", type: "White", grape: "100% Chardonnay", price: 70000, pricePerCase: "₦70,000", description: "A Sicilian interpretation of the classic Chardonnay. Golden straw color with elegant aromas of ripe apple, pear, and subtle vanilla notes.", alcohol: "13%", pairing: "Grilled fish, creamy pasta, poultry", serving: "10-12°C", awards: ["Organic"], featured: false, category: "white" },
  { id: 4, name: "Fina Miral Syrah IGP 2023 Organic", country: "Italy", region: "Sicily", type: "Red", grape: "100% Syrah", price: 70000, pricePerCase: "₦70,000", description: "A bold Sicilian Syrah with deep purple color and intense aromas of blackberry, pepper, and spice. Full-bodied with velvety tannins.", alcohol: "14%", pairing: "Grilled lamb, game meats, aged cheeses", serving: "16-18°C", awards: ["Organic"], featured: false, category: "red" },
  { id: 5, name: "Fina Kike IGP 2023", country: "Italy", region: "Sicily", type: "White", grape: "90% Gewürztraminer, 10% Sauvignon", price: 127400, pricePerCase: "₦127,400", description: "An aromatic blend featuring exotic lychee, rose petal, and ginger notes from Gewürztraminer, complemented by Sauvignon's freshness.", alcohol: "13%", pairing: "Asian cuisine, spicy dishes, foie gras", serving: "8-10°C", awards: ["IGP Certified"], featured: false, category: "white" },
  
  // ITALY - Scanavino & Others
  { id: 6, name: "Scanavino Moscato D'Asti DOCG 2024", country: "Italy", region: "Piedmont", type: "Sweet Sparkling White", grape: "100% Moscato Bianco", price: 160000, pricePerCase: "₦160,000", description: "A delightful sweet sparkling wine with intense straw-yellow color and golden glints. Rich aromas of musk, orange blossom, peach, and honey with appealing fresh sweetness.", alcohol: "5.5%", pairing: "Desserts, fruit salads, strong cheeses", serving: "4-6°C", awards: ["DOCG Certified"], featured: true, category: "sparkling" },
  { id: 7, name: "Scanavino Prosecco Extra Dry DOC", country: "Italy", region: "Veneto", type: "Sparkling", grape: "100% Glera", price: 80000, pricePerCase: "₦80,000", description: "A refreshing Prosecco with fine, persistent bubbles. Pale straw yellow with aromas of green apple, pear, and white flowers.", alcohol: "11%", pairing: "Aperitif, light appetizers, seafood", serving: "6-8°C", awards: ["DOC Certified"], featured: false, category: "sparkling" },
  { id: 8, name: "Lambrusco Grasparossa Amabile DOP", country: "Italy", region: "Emilia-Romagna", type: "Sweet Sparkling Red", grape: "100% Lambrusco Grasparossa", price: 70000, pricePerCase: "₦70,000", description: "A charming semi-sweet sparkling red with deep purple color and violet foam. Aromas of ripe berries and violets.", alcohol: "8%", pairing: "Cured meats, pizza, fruity desserts", serving: "10-12°C", awards: ["DOP Certified"], featured: false, category: "sparkling" },
  { id: 9, name: "Dolce Vita Blackberry Fruit Wine", country: "Italy", region: "Various", type: "Fruit Wine", grape: "100% Blackberry", price: 70000, pricePerCase: "₦70,000", description: "A luscious fruit wine bursting with natural blackberry flavors. Deep purple with intense berry aromas.", alcohol: "10%", pairing: "Chocolate desserts, cheesecake", serving: "8-10°C", awards: [], featured: false, category: "dessert" },
  { id: 10, name: "Dolce Vita Strawberry Fruit Wine", country: "Italy", region: "Various", type: "Fruit Wine", grape: "100% Strawberry", price: 70000, pricePerCase: "₦70,000", description: "A delightful fruit wine capturing the essence of ripe strawberries. Ruby red with fresh strawberry bouquet.", alcohol: "10%", pairing: "Fresh fruits, light desserts", serving: "6-8°C", awards: [], featured: false, category: "dessert" },
  { id: 11, name: "Torre Montepulciano D'Abruzzo DOC", country: "Italy", region: "Abruzzo", type: "Red", grape: "100% Montepulciano", price: 100000, pricePerCase: "₦100,000", description: "A classic Italian red with ruby color and purple highlights. Aromas of ripe plum, cherry, and subtle spice.", alcohol: "13%", pairing: "Pasta with meat sauce, grilled meats", serving: "16-18°C", awards: ["DOC Certified"], featured: false, category: "red" },
  { id: 12, name: "Torre Pecorino D'Abruzzo DOC", country: "Italy", region: "Abruzzo", type: "White", grape: "100% Pecorino", price: 100000, pricePerCase: "₦100,000", description: "An elegant white from the ancient Pecorino grape. Straw yellow with citrus, green apple, and almond notes.", alcohol: "13%", pairing: "Seafood risotto, grilled fish", serving: "8-10°C", awards: ["DOC Certified"], featured: false, category: "white" },
  { id: 13, name: "Eresi Sparkling Ikonic with Glitters", country: "Italy", region: "Various", type: "Sparkling", grape: "90% Chardonnay, 10% Riesling", price: 180000, pricePerCase: "₦180,000", description: "A spectacular sparkling wine with edible glitters creating a mesmerizing visual effect. Perfect for celebrations.", alcohol: "11.5%", pairing: "Celebrations, toasts, special occasions", serving: "6-8°C", awards: ["Premium Selection"], featured: true, category: "sparkling" },
  
  // FRANCE
  { id: 14, name: "Listra Médoc Petit Verdot AOC 2018", country: "France", region: "Bordeaux, Médoc", type: "Red", grape: "100% Petit Verdot", price: 140000, pricePerCase: "₦140,000", description: "A powerful Médoc red from 100% Petit Verdot. Deep purple with intense aromas of blackcurrant, violet, and spice.", alcohol: "14%", pairing: "Grilled steak, lamb chops, strong cheeses", serving: "16-18°C", awards: ["AOC Certified"], featured: false, category: "red" },
  { id: 15, name: "Grangeneuve AOC 2019 Organic Red", country: "France", region: "Bordeaux", type: "Red", grape: "65% Merlot, 35% Cabernet Franc", price: 156800, pricePerCase: "₦156,800", description: "An organic Bordeaux blend with deep garnet color. Complex aromas of blackberry, plum, and cedar.", alcohol: "13.5%", pairing: "Roast beef, duck, mushroom dishes", serving: "16-18°C", awards: ["AOC Certified", "Organic"], featured: false, category: "red" },
  { id: 16, name: "Grangeneuve AOC 2019 Organic White", country: "France", region: "Bordeaux", type: "White", grape: "40% Sauvignon, 60% Sémillon", price: 156800, pricePerCase: "₦156,800", description: "An organic white Bordeaux with golden straw color. Elegant aromas of citrus, white flowers, and honey.", alcohol: "12.5%", pairing: "Oysters, grilled fish, goat cheese", serving: "8-10°C", awards: ["AOC Certified", "Organic"], featured: false, category: "white" },
  { id: 17, name: "Château Saint Florin AOC 2020 Red", country: "France", region: "Bordeaux, Entre-Deux-Mers", type: "Red", grape: "80% Merlot, 20% Cabernet Sauvignon", price: 65000, pricePerCase: "₦65,000", description: "A classic Bordeaux red with ruby-purple color. Bouquet of red fruits, cherries, and blackcurrant.", alcohol: "13.5%", pairing: "Roast chicken, grilled meats, mature cheeses", serving: "15-17°C", awards: ["AOC Certified", "Gold Medal"], featured: true, category: "red" },
  { id: 18, name: "Château Saint Florin AOC 2022 Rosé", country: "France", region: "Bordeaux", type: "Rosé", grape: "60% Sauvignon, 20% Muscadelle, 20% Sémillon", price: 65000, pricePerCase: "₦65,000", description: "A delicate Bordeaux rosé with pale salmon color. Fresh aromas of strawberry, citrus, and white flowers.", alcohol: "12%", pairing: "Salads, grilled fish, light appetizers", serving: "8-10°C", awards: ["AOC Certified"], featured: false, category: "rose" },
  { id: 19, name: "Ballarin Black Pearl Brut Reserve AOC", country: "France", region: "Bordeaux", type: "Crémant de Bordeaux", grape: "Merlot, Cabernet Franc", price: 144000, pricePerCase: "₦144,000", description: "A prestigious Crémant from the historic Ballarin house, first to produce sparkling wine in Bordeaux in 1947.", alcohol: "12.5%", pairing: "Aperitif, shellfish, poultry", serving: "7°C", awards: ["AOC Certified", "Silver Medal"], featured: true, category: "sparkling" },
  { id: 20, name: "Ballarin Brut Rosé AOC", country: "France", region: "Bordeaux", type: "Crémant de Bordeaux Rosé", grape: "100% Cabernet", price: 120500, pricePerCase: "₦120,500", description: "An elegant rosé Crémant with delicate salmon pink color. Fine bubbles with aromas of red berries.", alcohol: "12%", pairing: "Aperitif, strawberry desserts", serving: "7°C", awards: ["AOC Certified"], featured: false, category: "sparkling" },
  { id: 21, name: "Célène Royal Cuvée Brut AOC Rosé", country: "France", region: "Bordeaux", type: "Crémant de Bordeaux Rosé", grape: "Merlot, Cabernet Franc", price: 120500, pricePerCase: "₦120,500", description: "A refined rosé Crémant with persistent fine bubbles. Delicate aromas of raspberry and rose.", alcohol: "12%", pairing: "Celebrations, brunch, light desserts", serving: "7°C", awards: ["AOC Certified"], featured: false, category: "sparkling" },
  { id: 22, name: "Dune Rosé 2022", country: "France", region: "Bordeaux", type: "Rosé", grape: "Merlot, Cabernet Franc", price: 118000, pricePerCase: "₦118,000", description: "A sophisticated Bordeaux rosé with pale pink color. Elegant aromas of peach, citrus, and white flowers.", alcohol: "12.5%", pairing: "Grilled seafood, salads, Mediterranean cuisine", serving: "8-10°C", awards: [], featured: false, category: "rose" },
  { id: 23, name: "Éclat D'Automne 2022", country: "France", region: "Bordeaux", type: "Sweet White", grape: "Sauvignon, Sémillon, Muscadelle", price: 65000, pricePerCase: "₦65,000", description: "A luscious sweet white with golden amber color. Rich aromas of apricot, honey, and candied citrus.", alcohol: "12%", pairing: "Foie gras, blue cheese, fruit tarts", serving: "8-10°C", awards: [], featured: false, category: "dessert" },
  { id: 24, name: "Château Les Belles Vignes 2022", country: "France", region: "Bordeaux", type: "Sweet White", grape: "Sauvignon, Sémillon, Muscadelle", price: 65000, pricePerCase: "₦65,000", description: "An elegant sweet Bordeaux with notes of acacia honey, peach, and exotic fruits.", alcohol: "12%", pairing: "Desserts, cheese plates, aperitif", serving: "8-10°C", awards: [], featured: false, category: "dessert" },
  { id: 25, name: "Typic IGP Sweet White", country: "France", region: "South West", type: "Sweet White", grape: "50% Gros Manseng, 50% Petit Manseng", price: 100000, pricePerCase: "₦100,000", description: "An aromatic sweet white from South West France. Golden color with exotic fruit and pineapple aromas.", alcohol: "11%", pairing: "Spicy Asian cuisine, fruit desserts", serving: "8-10°C", awards: ["IGP Certified"], featured: false, category: "dessert" },
  { id: 26, name: "Brandy J.L. Moriez", country: "France", region: "Various", type: "Brandy", grape: "Grapes", price: 60000, pricePerCase: "₦60,000", description: "A smooth French brandy with amber color and aromas of dried fruit, vanilla, and subtle oak.", alcohol: "40%", pairing: "After dinner, cigars, dark chocolate", serving: "Room temperature", awards: [], featured: false, category: "spirits" },
  
  // CANADA
  { id: 27, name: "Tawse Canadian Whisky Pinot Noir Barrel", country: "Canada", region: "Ontario", type: "Whisky", grape: "100% Corn", price: 600000, pricePerCase: "₦600,000", description: "A unique Canadian whisky finished in Pinot Noir barrels. Smooth with notes of caramel, vanilla, and red fruit.", alcohol: "40%", pairing: "Dark chocolate, cheese, after dinner", serving: "Room temperature", awards: ["Premium Selection"], featured: false, category: "spirits" },
  { id: 28, name: "Tawse Riesling VQA 2023 Organic", country: "Canada", region: "Niagara Peninsula", type: "White", grape: "100% Riesling", price: 260000, pricePerCase: "₦260,000", description: "An organic Riesling from award-winning Tawse Winery. Pale yellow with intense citrus, peach, and floral aromas.", alcohol: "10.5%", pairing: "Thai curry, seafood, goat cheese", serving: "8-10°C", awards: ["VQA Certified", "Organic"], featured: false, category: "white" },
  { id: 29, name: "Tawse Limestone Sparkling Riesling VQA", country: "Canada", region: "Niagara Peninsula", type: "Sparkling", grape: "100% Riesling", price: 150000, pricePerCase: "₦150,000", description: "A refreshing sparkling Riesling with fine bubbles. Bright citrus and green apple with a crisp mineral finish.", alcohol: "11%", pairing: "Aperitif, sushi, light appetizers", serving: "6-8°C", awards: ["VQA Certified", "Organic"], featured: false, category: "sparkling" },
  { id: 30, name: "Tawse Riesling Icewine VQA", country: "Canada", region: "Niagara Peninsula", type: "Icewine", grape: "100% Riesling", price: 300000, pricePerCase: "₦300,000", description: "A luxurious icewine from grapes harvested at -8°C. Intense marmalade, peach, and ginger with rich sweetness balanced by lively acidity.", alcohol: "10%", pairing: "Crème brûlée, fruit desserts, foie gras", serving: "8-10°C", awards: ["VQA Certified", "4x Winery of Year"], featured: true, category: "dessert" },
  { id: 31, name: "Lakeview Vidal Icewine VQA", country: "Canada", region: "Niagara Peninsula", type: "Icewine", grape: "100% Vidal", price: 300000, pricePerCase: "₦300,000", description: "A classic Canadian Vidal icewine with golden amber color. Luscious notes of apricot, honey, and tropical fruits.", alcohol: "10%", pairing: "Chocolate desserts, fruit tarts", serving: "8-10°C", awards: ["VQA Certified", "Trade Mission"], featured: true, category: "dessert" },
  { id: 32, name: "Lakeview Cabernet Franc Icewine VQA", country: "Canada", region: "Niagara Peninsula", type: "Red Icewine", grape: "100% Cabernet Franc", price: 300000, pricePerCase: "₦300,000", description: "A rare red icewine with stunning ruby color. Complex aromas of strawberry, cherry, and spice. Truly exceptional.", alcohol: "10%", pairing: "Dark chocolate, berry desserts, blue cheese", serving: "10-12°C", awards: ["VQA Certified", "Rare", "Trade Mission"], featured: true, category: "dessert" },
  { id: 33, name: "Lakeview Syrah VQA", country: "Canada", region: "Niagara Peninsula", type: "Red", grape: "100% Syrah", price: 180000, pricePerCase: "₦180,000", description: "A rich Canadian Syrah with deep purple color. Aromas of black plum, blackberry, dark chocolate, cedar, and spice.", alcohol: "13.5%", pairing: "Grilled meats, game, aged cheeses", serving: "16-18°C", awards: ["VQA Certified", "Trade Mission"], featured: false, category: "red" },
  { id: 34, name: "Lakeview Gewürztraminer VQA", country: "Canada", region: "Niagara Peninsula", type: "White", grape: "100% Gewürztraminer", price: 150000, pricePerCase: "₦150,000", description: "A classic Niagara Gewürztraminer with delicate aromas of ginger, lychee, and rose petal. Clean and refreshing.", alcohol: "12%", pairing: "Asian cuisine, spicy dishes, soft cheeses", serving: "8-10°C", awards: ["VQA Certified", "Trade Mission"], featured: false, category: "white" },
  { id: 35, name: "Kildara Triple Distilled Pot Still Whisky", country: "Canada", region: "Ontario", type: "Whisky", grape: "Triple Distilled", price: 600000, pricePerCase: "₦600,000", description: "A smooth triple-distilled pot still whisky with rich amber color. Notes of honey, vanilla, and toasted oak.", alcohol: "40%", pairing: "After dinner, cheese", serving: "Room temperature", awards: [], featured: false, category: "spirits" },
  { id: 36, name: "Cath-Nah-Aven Single Malt Whisky", country: "Canada", region: "Ontario", type: "Whisky", grape: "Single Malt", price: 600000, pricePerCase: "₦600,000", description: "A distinguished single malt with complex aromas of dried fruit, toffee, and subtle smoke.", alcohol: "40%", pairing: "Dark chocolate, cigars", serving: "Room temperature", awards: [], featured: false, category: "spirits" },
  { id: 37, name: "Sol Dugall Medium Peated Single Malt", country: "Canada", region: "Ontario", type: "Whisky", grape: "Peated Single Malt", price: 600000, pricePerCase: "₦600,000", description: "A peated single malt with balanced smokiness. Notes of peat, honey, and sea salt.", alcohol: "40%", pairing: "Strong cheeses, dark chocolate", serving: "Room temperature", awards: [], featured: false, category: "spirits" }
];

// ============================================
// GRAPE SLIDER DATA
// ============================================

const grapeSlides = [
  { id: 1, grape: "Nero d'Avola", region: "Sicily, Italy", color: "Deep Ruby", description: "Sicily's noble grape producing bold, spicy reds with notes of cherry, plum, and chocolate.", characteristics: ["Bold Tannins", "Spicy", "Cherry Notes"] },
  { id: 2, grape: "Moscato Bianco", region: "Piedmont, Italy", color: "Golden Straw", description: "The ancient aromatic grape creating Italy's beloved sweet sparkling wines with peach and honey notes.", characteristics: ["Aromatic", "Sweet", "Floral"] },
  { id: 3, grape: "Riesling", region: "Niagara, Canada", color: "Pale Green", description: "A versatile noble grape producing everything from bone-dry whites to luscious icewines.", characteristics: ["High Acidity", "Citrus", "Mineral"] },
  { id: 4, grape: "Merlot", region: "Bordeaux, France", color: "Deep Garnet", description: "The velvet grape of Bordeaux, creating smooth, plummy wines that blend beautifully.", characteristics: ["Soft Tannins", "Plum", "Chocolate"] },
  { id: 5, grape: "Vidal", region: "Niagara, Canada", color: "Golden Amber", description: "A hardy hybrid grape perfectly suited for Canada's icewine production.", characteristics: ["Winter Hardy", "Tropical", "Honey"] },
  { id: 6, grape: "Glera", region: "Veneto, Italy", color: "Pale Straw", description: "The grape behind Prosecco, producing refreshing sparkling wines.", characteristics: ["Crisp", "Apple", "Floral"] }
];

// ============================================
// TOUR GALLERY DATA
// ============================================

const tourGallery = [
  { id: 1, title: "Delegation Arrival", location: "Toronto, Canada", date: "September 3, 2025", description: "The NicotaWines delegation arrives in Canada to begin the historic trade mission." },
  { id: 2, title: "Lakeview Wine Co. Tour", location: "Niagara-on-the-Lake", date: "September 4, 2025", description: "Exploring the vast production facility with over 6 million litres of wine in maturation." },
  { id: 3, title: "Barrel Room Experience", location: "Niagara-on-the-Lake", date: "September 4, 2025", description: "Walking through the atmospheric barrel aging rooms learning about oak influence on wine." },
  { id: 4, title: "Tasting Session", location: "Lakeview Wine Co.", date: "September 4, 2025", description: "Professional wine evaluation session selecting wines for the Nigerian market." },
  { id: 5, title: "Deputy High Commissioner Visit", location: "Second Winery", date: "September 6, 2025", description: "High-profile winery visit with the Deputy High Commissioner of Canada in Nigeria." },
  { id: 6, title: "Vineyard Tour", location: "Niagara Peninsula", date: "September 5, 2025", description: "Experiencing the terroir firsthand in the beautiful Niagara vineyards." },
  { id: 7, title: "Toronto University Showcase", location: "Toronto", date: "September 8, 2025", description: "Presenting selected wines to Canadian and Nigerian dignitaries." },
  { id: 8, title: "Investor Networking", location: "Toronto", date: "September 8, 2025", description: "Building strategic relationships between Canadian and Nigerian business leaders." }
];

// ============================================
// EVENTS DATA
// ============================================

const recentEvents = [
  { id: 1, title: "Canada Trade Mission 2025", date: "September 3-10, 2025", location: "Ontario, Canada", type: "Trade Mission", status: "completed", description: "Historic trade mission with 10 Nigerian investors to Lakeview Wine Co. and other wineries. Resulted in 80+ cases ordered.", highlights: ["7 Days", "80+ Cases", "5 Wineries"], featured: true },
  { id: 2, title: "Italian Wine Evening", date: "December 15, 2025", time: "6:00 PM", location: "The Wheatbaker, Victoria Island", type: "Tasting", status: "upcoming", description: "Journey through Italy's finest wine regions.", price: "₦75,000", capacity: 30 },
  { id: 3, title: "Holiday Wine & Dine", date: "December 22, 2025", time: "7:00 PM", location: "Eko Hotel, Lagos", type: "Special Event", status: "upcoming", description: "Festive wine dinner with 5-course gourmet menu.", price: "₦150,000", capacity: 50 },
  { id: 4, title: "French Bordeaux Masterclass", date: "January 10, 2026", time: "5:00 PM", location: "The George, Ikoyi", type: "Masterclass", status: "upcoming", description: "Deep dive into Bordeaux appellations.", price: "₦85,000", capacity: 25 },
  { id: 5, title: "Valentine's Icewine Experience", date: "February 14, 2026", time: "7:00 PM", location: "Transcorp Hilton, Abuja", type: "Special Event", status: "upcoming", description: "Romantic evening with rare Canadian icewines and chocolates.", price: "₦95,000", capacity: 40 }
];

const tours = [
  { id: 1, title: "Piedmont Wine Experience", country: "Italy", duration: "5 Days", highlights: ["Moscato vineyards", "Private tastings", "Truffle hunting", "Local cuisine"], price: "From ₦2,500,000", description: "Immerse yourself in Piedmont's rolling hills.", includes: ["Luxury accommodation", "All meals", "Private transfers", "Expert guides"], bestTime: "Sept - Nov" },
  { id: 2, title: "Bordeaux Grand Tour", country: "France", duration: "7 Days", highlights: ["Saint-Émilion châteaux", "Médoc wine route", "Crémant cellars", "Gourmet dining"], price: "From ₦3,200,000", description: "Discover the world's most renowned wine region.", includes: ["5-star stays", "Michelin dining", "Private sommelier", "Wine shipping"], bestTime: "May - Oct" },
  { id: 3, title: "Canadian Icewine Journey", country: "Canada", duration: "6 Days", highlights: ["Niagara wineries", "Icewine harvest", "Niagara Falls", "Farm-to-table"], price: "From ₦4,100,000", description: "Experience Canadian icewine country.", includes: ["Boutique stays", "Tastings", "Culinary tours", "VIP access"], bestTime: "Jan or June - Sept" }
];

const countries = [
  { code: "CA", name: "Canada", flag: "🇨🇦", description: "World-renowned icewines and cool-climate wines", specialties: ["Icewine", "Riesling", "Pinot Noir"] },
  { code: "IT", name: "Italy", flag: "🇮🇹", description: "From Piedmont's Moscato to Sicily's Nero d'Avola", specialties: ["Moscato d'Asti", "Nero d'Avola", "Prosecco"] },
  { code: "FR", name: "France", flag: "🇫🇷", description: "Classic Bordeaux reds and elegant Crémants", specialties: ["Bordeaux Blends", "Crémant", "Sauternes"] }
];

// ============================================
// HOOKS
// ============================================

function useCart() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = useCallback((wine) => {
    setCart(c => {
      const existing = c.find(item => item.id === wine.id);
      if (existing) return c.map(item => item.id === wine.id ? { ...item, quantity: item.quantity + 1 } : item);
      return [...c, { ...wine, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((id) => setCart(c => c.filter(item => item.id !== id)), []);
  const updateQuantity = useCallback((id, delta) => setCart(c => c.map(item => item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item).filter(item => item.quantity > 0)), []);
  
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const formatPrice = (price) => new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', minimumFractionDigits: 0 }).format(price);

  return { cart, cartTotal, cartCount, isCartOpen, setIsCartOpen, addToCart, removeFromCart, updateQuantity, formatPrice };
}

// ============================================
// COMPONENTS
// ============================================

function Navigation({ activeSection, setActiveSection, cartCount, onCartClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' }, { id: 'collection', label: 'Collection' }, { id: 'events', label: 'Events' },
    { id: 'tours', label: 'Wine Tours' }, { id: 'gallery', label: 'Gallery' }, { id: 'about', label: 'About' }, { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button onClick={() => setActiveSection('home')} className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center group-hover:bg-amber-500 transition-colors">
              <Wine className="h-5 w-5 text-white" />
            </div>
            <div className="text-white">
              <span className="text-xl font-serif font-bold tracking-wide">NICOTA</span>
              <span className="block text-[10px] tracking-[0.3em] text-amber-500 uppercase">Wine Imports</span>
            </div>
          </button>

          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => setActiveSection(item.id)}
                className={`px-4 py-2 text-sm font-medium transition-colors ${activeSection === item.id ? 'text-amber-500' : 'text-white/80 hover:text-white'}`}>
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button onClick={onCartClick} className="relative p-2 text-white/80 hover:text-white">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">{cartCount}</span>}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-white">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-black/95 absolute top-full left-0 right-0 border-t border-white/10">
            <div className="px-6 py-4 space-y-1">
              {navItems.map((item) => (
                <button key={item.id} onClick={() => { setActiveSection(item.id); setMobileMenuOpen(false); }}
                  className={`block w-full text-left py-3 px-4 rounded-lg ${activeSection === item.id ? 'text-amber-500 bg-amber-500/10' : 'text-white/80'}`}>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function GrapeSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide(c => (c + 1) % grapeSlides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = grapeSlides[currentSlide];

  return (
    <section className="py-20 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-amber-500 text-sm tracking-[0.3em] uppercase font-medium">Discover Our Grapes</span>
          <h2 className="text-4xl font-serif font-bold mt-4">The Noble Varieties</h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[300px]">
          <div className="text-center lg:text-left">
            <div className="text-6xl mb-4">🍇</div>
            <h3 className="text-3xl font-serif font-bold mb-2">{slide.grape}</h3>
            <p className="text-amber-500 mb-4">{slide.region}</p>
            <p className="text-stone-300 mb-6">{slide.description}</p>
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {slide.characteristics.map((char, i) => (
                <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm">{char}</span>
              ))}
            </div>
          </div>
          
          <div className="hidden lg:flex justify-center">
            <div className="relative h-64 w-64 bg-gradient-to-br from-amber-900/30 to-stone-900 rounded-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-sm text-stone-400 mb-2">Color Profile</div>
                <div className="text-xl font-semibold text-amber-500">{slide.color}</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-8 space-x-2">
          {grapeSlides.map((_, i) => (
            <button key={i} onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-colors ${i === currentSlide ? 'bg-amber-500' : 'bg-white/30'}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Hero({ onExplore, onShop }) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-900/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-stone-800/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <span className="inline-block text-amber-500 text-sm tracking-[0.4em] uppercase font-medium mb-8">Premium Wine Imports</span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight">
          Exceptional Wines<br /><span className="text-amber-500">Three Continents</span>
        </h1>
        <p className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto mb-12">
          Nigeria's premier destination for curated wines from Canada, Italy, and France. Over 35 labels, exclusive tastings, and unforgettable wine tours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={onShop} className="px-10 py-4 bg-amber-600 hover:bg-amber-500 text-white font-semibold transition-all transform hover:scale-105">Explore Collection</button>
          <button onClick={onExplore} className="px-10 py-4 border-2 border-white/30 hover:border-white text-white font-semibold hover:bg-white/10">Wine Events</button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"><ChevronDown className="h-6 w-6" /></div>
    </section>
  );
}

function WineCard({ wine, onSelect, onAddToCart }) {
  const flags = { 'Italy': '🇮🇹', 'France': '🇫🇷', 'Canada': '🇨🇦' };
  return (
    <div className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
      <div className="relative h-56 bg-gradient-to-br from-stone-100 to-stone-200 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-36 bg-gradient-to-b from-stone-700 to-stone-900 rounded-t-full relative">
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-5 h-5 bg-stone-600 rounded-full" />
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-8 h-18 bg-stone-50" />
          </div>
        </div>
        <div className="absolute top-2 left-2 flex items-center space-x-1 bg-white/90 px-2 py-1 rounded-sm">
          <span className="text-sm">{flags[wine.country]}</span>
          <span className="text-[9px] font-semibold text-stone-700">{wine.country}</span>
        </div>
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button onClick={() => onSelect(wine)} className="px-4 py-2 bg-white text-stone-900 font-semibold text-xs hover:bg-amber-500 hover:text-white transition-colors">Details</button>
        </div>
      </div>
      <div className="p-3">
        <span className="text-[9px] font-medium text-amber-600 tracking-wide uppercase">{wine.type}</span>
        <h3 className="font-serif text-xs font-semibold text-stone-900 mt-1 mb-1 leading-snug line-clamp-2">{wine.name}</h3>
        <p className="text-[10px] text-stone-500 mb-2">{wine.region}</p>
        <div className="flex items-center justify-between pt-2 border-t border-stone-100">
          <span className="text-xs font-bold text-stone-900">{wine.pricePerCase}</span>
          <button onClick={() => onAddToCart(wine)} className="px-2 py-1 bg-stone-900 hover:bg-amber-600 text-white text-[10px] font-medium transition-colors">Add</button>
        </div>
      </div>
    </div>
  );
}

function WineModal({ wine, onClose, onAddToCart }) {
  if (!wine) return null;
  const flags = { 'Italy': '🇮🇹', 'France': '🇫🇷', 'Canada': '🇨🇦' };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-md"><X className="h-5 w-5" /></button>
        <div className="grid md:grid-cols-2">
          <div className="relative h-56 md:h-full min-h-[300px] bg-gradient-to-br from-stone-100 to-stone-200">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-48 bg-gradient-to-b from-stone-700 to-stone-900 rounded-t-full" />
            </div>
            <div className="absolute top-4 left-4 flex items-center space-x-2 bg-white/90 px-3 py-1.5 rounded-sm">
              <span className="text-lg">{flags[wine.country]}</span>
              <span className="text-sm font-semibold">{wine.country}</span>
            </div>
          </div>
          <div className="p-6">
            <span className="text-sm font-medium text-amber-600 tracking-wide uppercase">{wine.type}</span>
            <h2 className="font-serif text-xl font-bold text-stone-900 mt-2 mb-2">{wine.name}</h2>
            <p className="text-stone-500 text-sm mb-4">{wine.region}</p>
            {wine.awards?.length > 0 && (
              <div className="flex flex-wrap gap-1 mb-4">
                {wine.awards.map((award, i) => (
                  <span key={i} className="inline-flex items-center text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded-sm">
                    <Award className="h-3 w-3 mr-1" />{award}
                  </span>
                ))}
              </div>
            )}
            <p className="text-stone-600 text-sm leading-relaxed mb-4">{wine.description}</p>
            <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
              <div className="bg-stone-50 p-2 rounded-sm"><span className="text-stone-400 block">Grape</span><span className="font-medium">{wine.grape}</span></div>
              <div className="bg-stone-50 p-2 rounded-sm"><span className="text-stone-400 block">Alcohol</span><span className="font-medium">{wine.alcohol}</span></div>
              <div className="bg-stone-50 p-2 rounded-sm"><span className="text-stone-400 block">Serving</span><span className="font-medium">{wine.serving}</span></div>
              <div className="bg-stone-50 p-2 rounded-sm"><span className="text-stone-400 block">Pairing</span><span className="font-medium line-clamp-2">{wine.pairing}</span></div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t">
              <div>
                <span className="text-xs text-stone-400 block">Per Case</span>
                <span className="text-xl font-bold">{wine.pricePerCase}</span>
              </div>
              <button onClick={() => { onAddToCart(wine); onClose(); }} className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-white font-semibold">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CartSidebar({ isOpen, onClose, cart, cartTotal, onUpdateQuantity, onRemove, formatPrice }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center space-x-3"><ShoppingBag className="h-5 w-5" /><h2 className="text-xl font-serif font-bold">Your Cart</h2></div>
          <button onClick={onClose} className="p-2 hover:bg-stone-100 rounded-full"><X className="h-5 w-5" /></button>
        </div>
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-stone-400 p-8">
            <ShoppingBag className="h-16 w-16 mb-4 opacity-50" /><p className="text-lg font-medium">Cart empty</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <div className="w-12 h-16 bg-stone-100 rounded-sm flex items-center justify-center"><div className="w-3 h-10 bg-gradient-to-b from-stone-600 to-stone-800 rounded-t-full" /></div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-xs truncate">{item.name}</h4>
                    <p className="text-xs text-stone-500">{item.country}</p>
                    <p className="font-semibold text-amber-600 text-sm">{formatPrice(item.price)}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <button onClick={() => onUpdateQuantity(item.id, -1)} className="p-0.5 hover:bg-stone-100 rounded"><Minus className="h-3 w-3" /></button>
                      <span className="text-xs">{item.quantity}</span>
                      <button onClick={() => onUpdateQuantity(item.id, 1)} className="p-0.5 hover:bg-stone-100 rounded"><Plus className="h-3 w-3" /></button>
                    </div>
                  </div>
                  <button onClick={() => onRemove(item.id)} className="text-stone-400 hover:text-red-500"><X className="h-4 w-4" /></button>
                </div>
              ))}
            </div>
            <div className="border-t p-6 bg-stone-50">
              <div className="flex justify-between items-center mb-4"><span>Total:</span><span className="text-xl font-bold">{formatPrice(cartTotal)}</span></div>
              <button className="w-full py-3 bg-amber-600 hover:bg-amber-500 text-white font-semibold">Checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function Footer({ setActiveSection }) {
  return (
    <footer className="bg-stone-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-3 mb-4"><div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center"><Wine className="h-4 w-4 text-white" /></div><span className="text-lg font-serif font-bold">NICOTA</span></div>
            <p className="text-stone-400 text-sm mb-4">Nigeria's premier wine importer since 2015.</p>
            <div className="flex space-x-3"><a href="#" className="text-stone-400 hover:text-amber-500"><Instagram className="h-4 w-4" /></a><a href="#" className="text-stone-400 hover:text-amber-500"><Facebook className="h-4 w-4" /></a><a href="#" className="text-stone-400 hover:text-amber-500"><Twitter className="h-4 w-4" /></a></div>
          </div>
          <div><h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Explore</h4><ul className="space-y-2">{['collection', 'events', 'tours', 'gallery'].map((id) => <li key={id}><button onClick={() => setActiveSection(id)} className="text-stone-400 hover:text-amber-500 text-sm capitalize">{id}</button></li>)}</ul></div>
          <div><h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Wines</h4><ul className="space-y-2 text-stone-400 text-sm"><li>Italian</li><li>French</li><li>Canadian</li><li>Icewines</li></ul></div>
          <div><h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4><ul className="space-y-2 text-stone-400 text-sm"><li className="flex items-center"><MapPin className="h-3 w-3 text-amber-500 mr-2" />Victoria Island, Lagos</li><li className="flex items-center"><Phone className="h-3 w-3 text-amber-500 mr-2" />+234 (0) 800 NICOTA</li><li className="flex items-center"><Mail className="h-3 w-3 text-amber-500 mr-2" />info@nicotawines.com</li></ul></div>
        </div>
      </div>
      <div className="border-t border-stone-800 py-6"><div className="max-w-7xl mx-auto px-6 text-xs text-stone-500 flex justify-between"><p>© 2025 Nicota Wines</p><p>Drink Responsibly • 18+</p></div></div>
    </footer>
  );
}

// ============================================
// PAGES
// ============================================

function HomePage({ setActiveSection, onSelectWine, onAddToCart }) {
  const featuredWines = wines.filter(wine => wine.featured);
  return (
    <div>
      <Hero onExplore={() => setActiveSection('events')} onShop={() => setActiveSection('collection')} />
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[{ num: '37', label: 'Wine Labels' }, { num: '3', label: 'Continents' }, { num: '80+', label: 'Cases/Mission' }, { num: '500+', label: 'Happy Clients' }].map((s, i) => (
              <div key={i}><div className="text-3xl font-bold text-amber-600 mb-1">{s.num}</div><div className="text-stone-600 text-sm">{s.label}</div></div>
            ))}
          </div>
        </div>
      </section>
      
      <GrapeSlider />
      
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-amber-600 text-sm tracking-[0.3em] uppercase font-medium">Our Selection</span>
            <h2 className="text-3xl font-serif font-bold mt-3">Featured Wines</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {featuredWines.map((wine) => <WineCard key={wine.id} wine={wine} onSelect={onSelectWine} onAddToCart={onAddToCart} />)}
          </div>
          <div className="text-center mt-8">
            <button onClick={() => setActiveSection('collection')} className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold group">
              View All {wines.length} Wines<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10"><h2 className="text-3xl font-serif font-bold">Wine Origins</h2></div>
          <div className="grid md:grid-cols-3 gap-6">
            {countries.map((c) => (
              <div key={c.code} className="bg-stone-50 p-6 rounded-sm hover:bg-stone-100 transition-colors text-center">
                <span className="text-4xl mb-3 block">{c.flag}</span>
                <h3 className="text-lg font-semibold mb-2">{c.name}</h3>
                <p className="text-stone-600 text-sm mb-3">{c.description}</p>
                <div className="flex flex-wrap justify-center gap-1">{c.specialties.map((s, i) => <span key={i} className="text-xs bg-white px-2 py-1 text-stone-600">{s}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-serif font-bold mb-4">Canada Trade Mission 2025</h2>
          <p className="text-stone-600 mb-6">In September 2025, NicotaWines led 10 Nigerian investors on a landmark trade mission to Canada, resulting in 80+ cases and strategic partnerships.</p>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-3 rounded-sm"><div className="text-xl font-bold text-amber-600">7</div><div className="text-xs text-stone-600">Days</div></div>
            <div className="bg-white p-3 rounded-sm"><div className="text-xl font-bold text-amber-600">80+</div><div className="text-xs text-stone-600">Cases</div></div>
            <div className="bg-white p-3 rounded-sm"><div className="text-xl font-bold text-amber-600">5</div><div className="text-xs text-stone-600">Wineries</div></div>
          </div>
          <button onClick={() => setActiveSection('gallery')} className="px-6 py-3 bg-stone-900 hover:bg-stone-800 text-white font-semibold">View Tour Gallery</button>
        </div>
      </section>
    </div>
  );
}

function CollectionPage({ onSelectWine, onAddToCart }) {
  const [filter, setFilter] = useState('all');
  const [country, setCountry] = useState('all');
  
  const categories = [{ id: 'all', label: 'All' }, { id: 'red', label: 'Red' }, { id: 'white', label: 'White' }, { id: 'sparkling', label: 'Sparkling' }, { id: 'rose', label: 'Rosé' }, { id: 'dessert', label: 'Dessert' }, { id: 'spirits', label: 'Spirits' }];
  const countryOpts = [{ id: 'all', label: 'All' }, { id: 'Italy', label: 'Italy' }, { id: 'France', label: 'France' }, { id: 'Canada', label: 'Canada' }];
  
  const filtered = wines.filter(w => (filter === 'all' || w.category === filter) && (country === 'all' || w.country === country));

  return (
    <div className="pt-20">
      <section className="bg-stone-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-amber-500 text-sm tracking-[0.3em] uppercase font-medium">Complete Collection</span>
          <h1 className="text-4xl font-serif font-bold mt-3 mb-2">Our Wines</h1>
          <p className="text-stone-400">{wines.length} premium labels from three continents</p>
        </div>
      </section>
      
      <section className="bg-white border-b sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="flex items-center space-x-1 overflow-x-auto pb-2 md:pb-0">
              {categories.map((c) => (
                <button key={c.id} onClick={() => setFilter(c.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-sm whitespace-nowrap ${filter === c.id ? 'bg-stone-900 text-white' : 'text-stone-600 hover:bg-stone-100'}`}>
                  {c.label}
                </button>
              ))}
            </div>
            <select value={country} onChange={(e) => setCountry(e.target.value)} className="text-sm border rounded-sm px-3 py-1.5 bg-white">
              {countryOpts.map((c) => <option key={c.id} value={c.id}>{c.label}</option>)}
            </select>
          </div>
        </div>
      </section>
      
      <section className="py-10 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-sm text-stone-500 mb-4">{filtered.length} wines</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {filtered.map((wine) => <WineCard key={wine.id} wine={wine} onSelect={onSelectWine} onAddToCart={onAddToCart} />)}
          </div>
        </div>
      </section>
    </div>
  );
}

function EventsPage() {
  const upcoming = recentEvents.filter(e => e.status === 'upcoming');
  const completed = recentEvents.filter(e => e.status === 'completed');

  return (
    <div className="pt-20">
      <section className="bg-stone-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-amber-500 text-sm tracking-[0.3em] uppercase font-medium">Stay Updated</span>
          <h1 className="text-4xl font-serif font-bold mt-3">Events & Tastings</h1>
        </div>
      </section>
      
      {completed.length > 0 && (
        <section className="py-10 bg-amber-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-xl font-serif font-bold mb-6">Recent Highlights</h2>
            {completed.map((event) => (
              <div key={event.id} className="bg-white rounded-sm shadow-sm p-6 mb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded mb-2">Completed</span>
                    <h3 className="text-lg font-serif font-bold">{event.title}</h3>
                    <p className="text-stone-600 text-sm mt-1">{event.description}</p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-stone-500">
                      <span><Calendar className="h-4 w-4 inline mr-1" />{event.date}</span>
                      <span><MapPin className="h-4 w-4 inline mr-1" />{event.location}</span>
                    </div>
                  </div>
                  {event.highlights && (
                    <div className="flex flex-wrap gap-2">
                      {event.highlights.map((h, i) => (
                        <span key={i} className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded">{h}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
      
      <section className="py-10 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-xl font-serif font-bold mb-6">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcoming.map((event) => (
              <div key={event.id} className="bg-white rounded-sm shadow-sm overflow-hidden">
                <div className="p-5">
                  <span className="inline-block px-2 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded mb-2">{event.type}</span>
                  <h3 className="text-lg font-serif font-bold mb-2">{event.title}</h3>
                  <p className="text-stone-600 text-sm mb-3">{event.description}</p>
                  <div className="space-y-1 text-sm text-stone-500">
                    <div className="flex items-center"><Calendar className="h-4 w-4 text-amber-500 mr-2" />{event.date}</div>
                    {event.time && <div className="flex items-center"><Clock className="h-4 w-4 text-amber-500 mr-2" />{event.time}</div>}
                    <div className="flex items-center"><MapPin className="h-4 w-4 text-amber-500 mr-2" />{event.location}</div>
                  </div>
                  {event.price && (
                    <div className="flex items-center justify-between pt-4 mt-4 border-t">
                      <span className="font-bold text-amber-600">{event.price}</span>
                      <button className="px-4 py-2 bg-stone-900 hover:bg-amber-600 text-white text-sm font-medium">Reserve</button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="bg-stone-900 text-white p-8 rounded-sm">
            <h2 className="text-xl font-serif font-bold mb-3">Host a Private Event</h2>
            <p className="text-stone-300 text-sm mb-4">Corporate tastings, birthdays, or special occasions.</p>
            <button className="px-6 py-3 bg-amber-600 hover:bg-amber-500 font-semibold">Enquire Now</button>
          </div>
        </div>
      </section>
    </div>
  );
}

function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="pt-20">
      <section className="bg-stone-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-amber-500 text-sm tracking-[0.3em] uppercase font-medium">Memories</span>
          <h1 className="text-4xl font-serif font-bold mt-3">Tour Gallery</h1>
          <p className="text-stone-400 mt-2">Canada Trade Mission • September 2025</p>
        </div>
      </section>
      
      <section className="py-10 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {tourGallery.map((item) => (
              <div key={item.id} onClick={() => setSelectedImage(item)} className="cursor-pointer group relative aspect-square bg-gradient-to-br from-stone-200 to-stone-300 rounded-sm overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera className="h-10 w-10 text-stone-400" />
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-3 text-white">
                    <h3 className="font-semibold text-sm">{item.title}</h3>
                    <p className="text-xs text-stone-300">{item.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="absolute inset-0 bg-black/80" />
          <div className="relative bg-white max-w-xl w-full rounded-sm overflow-hidden" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedImage(null)} className="absolute top-3 right-3 p-2 bg-white/90 rounded-full z-10"><X className="h-4 w-4" /></button>
            <div className="aspect-video bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center">
              <Camera className="h-16 w-16 text-stone-400" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-serif font-bold mb-1">{selectedImage.title}</h3>
              <p className="text-amber-600 text-sm mb-2">{selectedImage.location} • {selectedImage.date}</p>
              <p className="text-stone-600 text-sm">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
      
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-xl font-serif font-bold mb-4 text-center">Mission Highlights</h2>
          <div className="text-stone-600 text-sm space-y-3">
            <p>The Canada Trade Mission 2025 was a landmark achievement for NicotaWines. Supported by the Canadian Trade Commission and the Deputy High Commissioner's office, we led ten Nigerian investors through an immersive exploration of Canadian wine country.</p>
            <p>At Lakeview Wine Co., the delegation experienced firsthand the scale and precision of Canadian winemaking, touring facilities housing over 6 million litres of wine in maturation. The professional tasting sessions resulted in the selection of exceptional products including the Syrah, Gewürztraminer, and rare icewines.</p>
            <p>The mission culminated in a prestigious showcase at Toronto University, where our selected wines received extraordinary enthusiasm from Canadian and Nigerian dignitaries.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function ToursPage() {
  return (
    <div className="pt-20">
      <section className="bg-stone-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-amber-500 text-sm tracking-[0.3em] uppercase font-medium">Wine Tourism</span>
          <h1 className="text-4xl font-serif font-bold mt-3">Wine Tours</h1>
        </div>
      </section>
      
      <section className="py-10 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-4">
          {tours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-sm shadow-sm overflow-hidden">
              <div className="grid md:grid-cols-3">
                <div className="bg-gradient-to-br from-stone-900 to-stone-800 text-white p-5">
                  <div className="flex items-center space-x-2 mb-2"><Globe className="h-4 w-4 text-amber-500" /><span className="text-amber-500 text-sm">{tour.country}</span></div>
                  <h3 className="text-lg font-serif font-bold mb-1">{tour.title}</h3>
                  <p className="text-stone-300 text-sm mb-3">{tour.duration}</p>
                  <span className="text-lg font-bold text-amber-500">{tour.price}</span>
                </div>
                <div className="md:col-span-2 p-5">
                  <p className="text-stone-600 text-sm mb-3">{tour.description}</p>
                  <div className="grid md:grid-cols-2 gap-3 mb-3">
                    <div><h4 className="text-xs font-semibold uppercase tracking-wide mb-2">Highlights</h4><ul className="space-y-1">{tour.highlights.map((h, i) => <li key={i} className="flex items-start text-xs text-stone-600"><Star className="h-3 w-3 text-amber-500 mr-1 mt-0.5" />{h}</li>)}</ul></div>
                    <div><h4 className="text-xs font-semibold uppercase tracking-wide mb-2">Includes</h4><ul className="space-y-1">{tour.includes.map((item, i) => <li key={i} className="flex items-start text-xs text-stone-600"><Check className="h-3 w-3 text-green-500 mr-1 mt-0.5" />{item}</li>)}</ul></div>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t">
                    <span className="text-xs text-stone-500">Best: {tour.bestTime}</span>
                    <button className="px-4 py-2 bg-stone-900 hover:bg-amber-600 text-white text-xs font-medium">Learn More</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="pt-20">
      <section className="bg-stone-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-amber-500 text-sm tracking-[0.3em] uppercase font-medium">Our Story</span>
          <h1 className="text-4xl font-serif font-bold mt-3">About Nicota Wines</h1>
        </div>
      </section>
      
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-stone-600 mb-4">Founded in Lagos, NicotaWines has established itself as Nigeria's premier wine importer, bringing exceptional wines from Canada, Italy, and France to discerning palates across the nation.</p>
          <p className="text-stone-600 mb-4">Our portfolio spans over 35 labels, from Sicily's bold Nero d'Avola to Piedmont's sweet Moscato, from Bordeaux's prestigious Crémants to Niagara's rare icewines. Each wine is personally selected for quality, authenticity, and market appeal.</p>
          <p className="text-stone-600">Beyond importing, we create experiences. Our tasting events educate and delight, while our wine tours offer firsthand encounters with the world's greatest vineyards.</p>
        </div>
      </section>
      
      <section className="py-12 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-4">
            {[{ icon: Award, title: 'Quality', desc: 'Hand-selected excellence' },
              { icon: Users, title: 'Education', desc: 'Wine knowledge sharing' },
              { icon: Globe, title: 'Authenticity', desc: 'Direct winery relations' },
              { icon: Heart, title: 'Passion', desc: 'Love in every bottle' }].map((v, i) => (
              <div key={i} className="text-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm"><v.icon className="h-5 w-5 text-amber-600" /></div>
                <h3 className="font-semibold text-sm mb-1">{v.title}</h3>
                <p className="text-stone-600 text-xs">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[{ n: '37', l: 'Labels' }, { n: '3', l: 'Continents' }, { n: '10+', l: 'Years' }, { n: '500+', l: 'Clients' }].map((s, i) => (
            <div key={i}><div className="text-2xl font-bold text-amber-500 mb-1">{s.n}</div><div className="text-stone-400 text-xs uppercase">{s.l}</div></div>
          ))}
        </div>
      </section>
    </div>
  );
}

function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const handleSubmit = (e) => { e.preventDefault(); alert('Thank you!'); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); };

  return (
    <div className="pt-20">
      <section className="bg-stone-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-amber-500 text-sm tracking-[0.3em] uppercase font-medium">Get in Touch</span>
          <h1 className="text-4xl font-serif font-bold mt-3">Contact Us</h1>
        </div>
      </section>
      
      <section className="py-10 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-sm shadow-sm">
            <h2 className="text-lg font-serif font-bold mb-4">Contact Info</h2>
            <div className="space-y-3">
              {[{ icon: MapPin, label: 'Victoria Island, Lagos' }, { icon: Phone, label: '+234 (0) 800 NICOTA' }, { icon: Mail, label: 'info@nicotawines.com' }, { icon: Clock, label: 'Mon-Fri: 9AM-6PM' }].map((item, i) => (
                <div key={i} className="flex items-center space-x-3"><div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center"><item.icon className="h-4 w-4 text-amber-600" /></div><span className="text-sm text-stone-600">{item.label}</span></div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2 bg-white p-5 rounded-sm shadow-sm">
            <h2 className="text-lg font-serif font-bold mb-4">Send Message</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid md:grid-cols-2 gap-3">
                <input type="text" placeholder="Name *" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="px-3 py-2 border border-stone-200 rounded-sm text-sm" />
                <input type="email" placeholder="Email *" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="px-3 py-2 border border-stone-200 rounded-sm text-sm" />
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                <input type="tel" placeholder="Phone" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="px-3 py-2 border border-stone-200 rounded-sm text-sm" />
                <select required value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} className="px-3 py-2 border border-stone-200 rounded-sm text-sm bg-white">
                  <option value="">Subject *</option><option>Orders</option><option>Events</option><option>Tours</option><option>Corporate</option>
                </select>
              </div>
              <textarea placeholder="Message *" required rows={3} value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="w-full px-3 py-2 border border-stone-200 rounded-sm text-sm resize-none" />
              <button type="submit" className="px-5 py-2 bg-amber-600 hover:bg-amber-500 text-white text-sm font-semibold"><Send className="h-4 w-4 inline mr-2" />Send</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

// ============================================
// MAIN APP
// ============================================

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedWine, setSelectedWine] = useState(null);
  const { cart, cartTotal, cartCount, isCartOpen, setIsCartOpen, addToCart, removeFromCart, updateQuantity, formatPrice } = useCart();

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [activeSection]);

  const handleAddToCart = (wine) => { addToCart(wine); setIsCartOpen(true); setTimeout(() => setIsCartOpen(false), 2000); };

  const renderPage = () => {
    switch (activeSection) {
      case 'home': return <HomePage setActiveSection={setActiveSection} onSelectWine={setSelectedWine} onAddToCart={handleAddToCart} />;
      case 'collection': return <CollectionPage onSelectWine={setSelectedWine} onAddToCart={handleAddToCart} />;
      case 'events': return <EventsPage />;
      case 'tours': return <ToursPage />;
      case 'gallery': return <GalleryPage />;
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage setActiveSection={setActiveSection} onSelectWine={setSelectedWine} onAddToCart={handleAddToCart} />;
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans antialiased">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />
      <main>{renderPage()}</main>
      <Footer setActiveSection={setActiveSection} />
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} cart={cart} cartTotal={cartTotal} onUpdateQuantity={updateQuantity} onRemove={removeFromCart} formatPrice={formatPrice} />
      <WineModal wine={selectedWine} onClose={() => setSelectedWine(null)} onAddToCart={handleAddToCart} />
    </div>
  );
}
