import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  const banners = [
    {
      id: 1,
      title: "Loan Against Property",
      description: "Get instant approval starting from 9.40%",
      cta: "Apply Now",
      ctaLink: "/loans",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&h=400&q=80",
      bgColor: "from-amber-100 to-amber-50",
      alt: "Loan Against Property Banner",
    },
    {
      id: 2,
      title: "Find Top Hotels",
      description: "Best deals on premium hotels across India",
      cta: "Book Now",
      ctaLink: "/hotels",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&h=400&q=80",
      bgColor: "from-blue-100 to-blue-50",
      alt: "Find Top Hotels Banner",
    },
    {
      id: 3,
      title: "Professional Services",
      description: "Connect with verified service providers",
      cta: "Explore",
      ctaLink: "/services",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&h=400&q=80",
      bgColor: "from-green-100 to-green-50",
      alt: "Professional Services Banner",
    },
  ];

  return (
    <section className="jd-container">
      <Carousel className="w-full">
        <CarouselContent>
          {banners.map((banner) => (
            <CarouselItem key={banner.id}>
              <Card className="border-0 shadow-none">
                <CardContent className="p-0">
                  <div className={`flex flex-col md:flex-row items-center rounded-xl overflow-hidden bg-gradient-to-r ${banner.bgColor}`}>
                    <div className="md:w-1/2 p-6 md:p-10">
                      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">{banner.title}</h2>
                      <p className="text-sm md:text-base mb-4 text-gray-600">{banner.description}</p>
                      <Button asChild className="bg-primary hover:bg-primary/90 text-white font-medium">
                        <Link href={banner.ctaLink}>
                          {banner.cta}
                        </Link>
                      </Button>
                    </div>
                    <div className="relative md:w-1/2 h-48 md:h-64 overflow-hidden">
                      <Image
                        src={banner.image}
                        alt={banner.alt}
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex left-2" />
        <CarouselNext className="hidden md:flex right-2" />
      </Carousel>
    </section>
  );
};

export default HeroSection;
