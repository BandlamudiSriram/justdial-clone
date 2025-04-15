import React from "react";
import HeroSection from "@/components/HeroSection";
import CategoryGrid from "@/components/CategoryGrid";
import ServiceSection from "@/components/ServiceSection";
import BillsRecharge from "@/components/BillsRecharge";
import TravelBooking from "@/components/TravelBooking";
import CityExplore from "@/components/CityExplore";
import { IMAGES } from "@/constants/images";

export default function Home() {
  const popularCategories = [
    { id: 1, title: "Banquet Halls", image: IMAGES.BANQUET_HALLS },
    { id: 2, title: "Bridal Requisite", image: IMAGES.BRIDAL_REQUISITES },
    { id: 3, title: "Caterers", image: IMAGES.CATERERS },
  ];

  const beautyCategories = [
    { id: 1, title: "Beauty Parlours", image: IMAGES.BEAUTY_PARLOUR },
    { id: 2, title: "Spa & Massages", image: IMAGES.SPA_MASSAGE },
    { id: 3, title: "Salons", image: IMAGES.SALONS },
  ];

  const serviceCategories = [
    { id: 1, title: "AC Service", image: IMAGES.AC_REPAIR },
    { id: 2, title: "Car Service", image: IMAGES.CAR_SERVICE },
    { id: 3, title: "Bike Service", image: IMAGES.BIKE_SERVICE },
  ];

  return (
    <div className="space-y-8 py-4">
      <HeroSection />
      <CategoryGrid />

      <ServiceSection
        title="Wedding Requisites"
        items={popularCategories}
      />

      <ServiceSection
        title="Beauty & Spa"
        items={beautyCategories}
      />

      <ServiceSection
        title="Repairs & Services"
        items={serviceCategories}
      />

      <BillsRecharge />
      <TravelBooking />
      <CityExplore />
    </div>
  );
}
