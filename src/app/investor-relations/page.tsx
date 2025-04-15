import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { IMAGES } from "@/constants/images";

const InvestorRelationsPage = () => {
  const financialHighlights = [
    {
      title: "Revenue",
      value: "₹1,234 Cr",
      change: "+12.5%",
      period: "FY 2023-24",
    },
    {
      title: "EBITDA",
      value: "₹456 Cr",
      change: "+8.2%",
      period: "FY 2023-24",
    },
    {
      title: "Net Profit",
      value: "₹234 Cr",
      change: "+15.3%",
      period: "FY 2023-24",
    },
  ];

  const investorResources = [
    {
      title: "Annual Report 2023-24",
      date: "May 15, 2024",
      type: "PDF",
      size: "2.5 MB",
    },
    {
      title: "Quarterly Results Q4 2024",
      date: "April 30, 2024",
      type: "PDF",
      size: "1.8 MB",
    },
    {
      title: "Investor Presentation",
      date: "April 15, 2024",
      type: "PDF",
      size: "3.2 MB",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.INVESTOR_HERO}
            alt="Investor Relations Hero"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="jd-container relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Investor Relations</h1>
          <p className="text-xl mb-8 max-w-2xl">
            Building trust and creating long-term value for our shareholders
          </p>
        </div>
      </section>

      {/* Financial Highlights */}
      <section className="py-16">
        <div className="jd-container">
          <h2 className="text-3xl font-bold mb-8">Financial Highlights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {financialHighlights.map((item, index) => (
              <div
                key={index}
                className="border rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <div className="text-3xl font-bold mb-2">{item.value}</div>
                <div className="flex items-center text-green-600">
                  <span>{item.change}</span>
                  <span className="ml-2 text-sm text-muted-foreground">
                    {item.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investor Resources */}
      <section className="py-16 bg-muted">
        <div className="jd-container">
          <div className="relative w-full h-48 mb-8 rounded-lg overflow-hidden">
            <Image
              src={IMAGES.INVESTOR_MEETING}
              alt="Investor Meeting"
              fill
              className="object-cover"
            />
          </div>
          <h2 className="text-3xl font-bold mb-8">Investor Resources</h2>
          <div className="grid gap-6">
            {investorResources.map((resource, index) => (
              <div
                key={index}
                className="border rounded-lg p-6 hover:shadow-md transition-shadow bg-white"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span>{resource.date}</span>
                      <span className="mx-2">•</span>
                      <span>{resource.type}</span>
                      <span className="mx-2">•</span>
                      <span>{resource.size}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="jd-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Contact Investor Relations</h2>
            <p className="text-muted-foreground mb-8">
              For investor-related queries, please contact our Investor Relations team
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Email</h3>
                <a
                  href="mailto:investors@justdial.com"
                  className="text-primary hover:underline"
                >
                  investors@justdial.com
                </a>
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <a href="tel:+912266666666" className="text-primary hover:underline">
                  +91 22 6666 6666
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestorRelationsPage; 