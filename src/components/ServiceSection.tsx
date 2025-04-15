import type React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ServiceItem {
  id: number;
  title: string;
  image: string;
}

interface ServiceSectionProps {
  title: string;
  items: ServiceItem[];
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ title, items }) => {
  return (
    <section className="jd-container">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <Link
          href="/"
          className="text-sm font-medium text-primary flex items-center hover:underline"
        >
          View All <ArrowRight className="h-4 w-4 ml-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item) => (
          <Link key={item.id} href="/" className="service-card block group">
            <div className="relative h-48 md:h-56 w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg" />
              <div className="absolute bottom-0 left-0 p-4 w-full">
                <h3 className="text-white font-semibold text-lg group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
