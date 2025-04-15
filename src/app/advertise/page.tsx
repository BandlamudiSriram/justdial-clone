import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check } from "lucide-react";
import { IMAGES } from "@/constants/images";

const AdvertisePage = () => {
  const advertisingPlans = [
    {
      name: "Basic Listing",
      price: "₹999/month",
      features: [
        "Business Profile Creation",
        "Basic Contact Information",
        "Business Category Listing",
        "Location on Map",
        "Customer Reviews",
      ],
    },
    {
      name: "Premium Listing",
      price: "₹2,999/month",
      features: [
        "All Basic Listing Features",
        "Priority Placement",
        "Enhanced Business Profile",
        "Photo Gallery (10 images)",
        "Social Media Links",
        "Business Highlights",
        "Special Offers Section",
      ],
    },
    {
      name: "Business Plus",
      price: "₹4,999/month",
      features: [
        "All Premium Listing Features",
        "Top Placement in Search Results",
        "Video Upload (1 video)",
        "Photo Gallery (20 images)",
        "Business Website Link",
        "Lead Management System",
        "Analytics Dashboard",
        "24/7 Support",
      ],
    },
  ];

  const benefits = [
    {
      title: "Increased Visibility",
      description: "Get your business in front of millions of potential customers",
    },
    {
      title: "Targeted Reach",
      description: "Reach customers who are actively looking for your services",
    },
    {
      title: "Enhanced Credibility",
      description: "Build trust with verified business listings and customer reviews",
    },
    {
      title: "Better Engagement",
      description: "Connect with customers through photos, videos, and special offers",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.ADVERTISE_HERO}
            alt="Advertise Hero"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="jd-container relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Advertise Your Business</h1>
          <p className="text-xl mb-8 max-w-2xl">
            Get your business in front of millions of potential customers on JustDial
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link href="#plans">View Advertising Plans</Link>
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="jd-container">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Advertise on JustDial?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="border rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="relative w-full h-40 mb-4 rounded-md overflow-hidden">
                  <Image
                    src={IMAGES.ADVERTISE_BENEFITS}
                    alt={benefit.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advertising Plans */}
      <section id="plans" className="py-16 bg-muted">
        <div className="jd-container">
          <h2 className="text-3xl font-bold mb-8 text-center">Advertising Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {advertisingPlans.map((plan, index) => (
              <div
                key={index}
                className="border rounded-lg p-6 hover:shadow-md transition-shadow bg-white"
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full">
                  <Link href="/contact-sales">Contact Sales</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="jd-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8">
              Our sales team is ready to help you choose the best advertising plan for your business
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Call Us</h3>
                <a href="tel:+912266666666" className="text-primary hover:underline">
                  +91 22 6666 6666
                </a>
              </div>
              <div>
                <h3 className="font-semibold">Email Us</h3>
                <a
                  href="mailto:sales@justdial.com"
                  className="text-primary hover:underline"
                >
                  sales@justdial.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdvertisePage; 