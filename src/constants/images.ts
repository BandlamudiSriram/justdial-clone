// Service Categories
const SERVICE_IMAGES = {
  BANQUET_HALLS: "https://images.unsplash.com/photo-1511795409834-432f7b0d1c6a",
  CATERERS: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
  BEAUTY_PARLOUR: "https://images.unsplash.com/photo-1515377905703-c4788e51af15",
  BRIDAL_REQUISITES: "https://images.unsplash.com/photo-1511895426328-d531613c1f2c",
  SPA_MASSAGE: "https://images.unsplash.com/photo-1549400851-5c7c0a0c0c0c",
  SALONS: "https://images.unsplash.com/photo-1515377905703-c4788e51af15",
  AC_REPAIR: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df",
  BIKE_SERVICE: "https://images.unsplash.com/photo-1558981806-ec527fa84c39",
  CAR_SERVICE: "https://images.unsplash.com/photo-1549257458-af0e1b1e0b0b",
};

// Business Categories
const BUSINESS_IMAGES = {
  TRAVEL: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce",
  RESTAURANTS: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
  DOCTORS: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
  HOTELS: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
  REAL_ESTATE: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
  EDUCATION: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
  AUTOMOBILES: "https://images.unsplash.com/photo-1551830820-330a71b99659",
  SHOPPING: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
  REPAIRS: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df",
  EVENTS: "https://images.unsplash.com/photo-1511795409834-432f7b0d1c6a",
  PETS: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
  FINANCIAL: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
  INDUSTRIAL: "https://images.unsplash.com/photo-1513828583-688-c52646dc9d4f",
  COMMUNITY: "https://images.unsplash.com/photo-1511795409834-432f7b0d1c6a",
  TRANSPORT: "https://images.unsplash.com/photo-1549400851-5c7c0a0c0c0c",
  PROFESSIONALS: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
  DAILY_NEEDS: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
  ENTERTAINMENT: "https://images.unsplash.com/photo-1511795409834-432f7b0d1c6a",
  EMERGENCY: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
  GOVERNMENT: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
  RELIGIOUS: "https://images.unsplash.com/photo-1511795409834-432f7b0d1c6a",
  SPORTS: "https://images.unsplash.com/photo-1549400851-5c7c0a0c0c0c",
  ART: "https://images.unsplash.com/photo-1511795409834-432f7b0d1c6a",
  MEDIA: "https://images.unsplash.com/photo-1511795409834-432f7b0d1c6a",
  SCIENCE: "https://images.unsplash.com/photo-1511795409834-432f7b0d1c6a",
  TECHNOLOGY: "https://images.unsplash.com/photo-1511795409834-432f7b0d1c6a",
  OTHER: "https://images.unsplash.com/photo-1511795409834-432f7b0d1c6a",
};

// Page-specific Images
const PAGE_IMAGES = {
  // Hero Section
  HERO_1: "https://images.unsplash.com/photo-1511795409834-432f7b0d1c6a",
  HERO_2: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
  HERO_3: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",

  // Career Page
  CAREER_HERO: "https://images.unsplash.com/photo-1511795409834-432f7b0d1c6a",
  CAREER_CULTURE: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
  CAREER_BENEFITS: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",

  // Investor Relations
  INVESTOR_HERO: "https://images.unsplash.com/photo-1511795409834-432f7b0d1c6a",
  INVESTOR_MEETING: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",

  // Advertise Page
  ADVERTISE_HERO: "https://images.unsplash.com/photo-1511795409834-432f7b0d1c6a",
  ADVERTISE_BENEFITS: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
};

// Brand Assets
const BRAND_IMAGES = {
  LOGO: "/images/logo.png",
};

// Export all images in a single object
export const IMAGES = {
  ...SERVICE_IMAGES,
  ...BUSINESS_IMAGES,
  ...PAGE_IMAGES,
  ...BRAND_IMAGES,
}; 